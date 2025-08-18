import React, { useMemo, useState } from "react";

// Grab envs for BOTH Vite & CRA
const EMAILJS_PUBLIC_KEY =
    typeof import.meta !== "undefined" &&
    import.meta.env?.VITE_EMAILJS_PUBLIC_KEY;

const EMAILJS_SERVICE_ID =
    typeof import.meta !== "undefined" &&
    import.meta.env?.VITE_EMAILJS_SERVICE_ID;

const EMAILJS_TEMPLATE_ID =
    typeof import.meta !== "undefined" &&
    import.meta.env?.VITE_EMAILJS_TEMPLATE_ID;

const CONTACT_EMAIL = "shresthaprashrijan@gmail.com";

export default function Contact({ isDarkMode }) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        website: "",
    });
    const [submitting, setSubmitting] = useState(false);
    const [status, setStatus] = useState({ type: "", msg: "" });

    const emailEnabled = !!(
        EMAILJS_PUBLIC_KEY &&
        EMAILJS_SERVICE_ID &&
        EMAILJS_TEMPLATE_ID
    );

    const canSubmit = useMemo(() => {
        const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
        return (
            form.name.trim() &&
            emailOk &&
            form.message.trim().length >= 10 &&
            !submitting
        );
    }, [form, submitting]);

    const onChange = (e) =>
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: "", msg: "" });
        if (form.website) {
            // bot caught
            return;
        }
        if (!canSubmit) return;

        setSubmitting(true);

        // Try EmailJS if configured; otherwise fall back to mailto
        if (emailEnabled) {
            try {
                const emailjs = await import("@emailjs/browser"); // dynamic import; no crash if package missing
                await emailjs.send(
                    EMAILJS_SERVICE_ID,
                    EMAILJS_TEMPLATE_ID,
                    {
                        from_name: form.name,
                        from_email: form.email,
                        subject: form.subject || "(No subject)",
                        message: form.message,
                        to_email: CONTACT_EMAIL,
                    },
                    { publicKey: EMAILJS_PUBLIC_KEY }
                );

                setStatus({
                    type: "success",
                    msg: "Message sent! I’ll get back to you ASAP.",
                });
                setForm({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                    website: "",
                });
            } catch (err) {
                // graceful fallback to mailto
                mailtoFallback();
            } finally {
                setSubmitting(false);
            }
        } else {
            mailtoFallback();
            setSubmitting(false);
        }
    };

    const mailtoFallback = () => {
        const subject = form.subject || `Message from ${form.name}`;
        const body = `Hi Prash,\n\n${form.message}\n\n— ${form.name}\n${form.email}`;
        const url = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;
        window.location.href = url;
        setStatus({
            type: "info",
            msg: "Opening your email app… If nothing happens, check pop-up blockers or copy the email below.",
        });
    };

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(CONTACT_EMAIL);
            setStatus({ type: "success", msg: "Email copied to clipboard." });
        } catch {
            setStatus({
                type: "error",
                msg: "Couldn’t copy. Long-press or right-click to copy manually.",
            });
        }
    };

    return (
        <section
            className={`relative overflow-hidden ${
                isDarkMode
                    ? "bg-gray-950 text-white"
                    : "bg-gray-50 text-gray-900"
            } min-h-screen-minus-80 md:py-32 px-4 sm:px-6 lg:px-8 py-14`}
        >
            {/* subtle background accents */}
            <div
                className="pointer-events-none absolute -top-24 right-0 h-72 w-[55vw] -skew-y-6 opacity-20 blur-2xl"
                style={{
                    background: isDarkMode
                        ? "linear-gradient(90deg,#0ea5e955,#a78bfa55)"
                        : "linear-gradient(90deg,#60a5fa55,#f472b655)",
                }}
            />
            <div
                className="pointer-events-none absolute -bottom-24 left-0 h-72 w-[45vw] skew-y-6 opacity-15 blur-2xl"
                style={{
                    background: isDarkMode
                        ? "linear-gradient(90deg,#22d3ee55,#f472b655)"
                        : "linear-gradient(90deg,#34d39955,#818cf855)",
                }}
            />

            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-12">
                {/* Left: Header + Contact Cards */}
                <div className="md:col-span-5 space-y-4">
                    <div className="flex items-center gap-2">
                        <span className="h-4 w-1.5 rounded-full bg-gradient-to-b from-blue-500 to-fuchsia-500" />
                        <span
                            className={`text-xs uppercase tracking-widest ${
                                isDarkMode ? "text-slate-400" : "text-slate-500"
                            }`}
                        >
                            Contact
                        </span>
                    </div>
                    <h1 className="text-3xl font-extrabold sm:text-4xl">
                        Let’s build something clean & fast.
                    </h1>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <InfoCard isDarkMode={isDarkMode} label="Email">
                            <div className="flex items-center gap-2 min-w-0">
                                <a
                                    className="flex-1 min-w-0 truncate underline underline-offset-4"
                                    href={`mailto:${CONTACT_EMAIL}`}
                                    title={CONTACT_EMAIL}
                                >
                                    {CONTACT_EMAIL}
                                </a>
                                <button
                                    onClick={copyEmail}
                                    className={`shrink-0 rounded-md px-2 py-1 text-xs ${
                                        isDarkMode
                                            ? "bg-gray-800 hover:bg-gray-700"
                                            : "bg-gray-100 hover:bg-gray-200"
                                    }`}
                                >
                                    Copy
                                </button>
                            </div>
                        </InfoCard>

                        <InfoCard isDarkMode={isDarkMode} label="LinkedIn">
                            <a
                                className="inline-flex items-center gap-2 underline underline-offset-4"
                                href="https://www.linkedin.com/in/prashrijanshrestha/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                prashrijanshrestha
                                <svg
                                    className="h-4 w-4"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M14 3h7v7h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H14V3Z" />
                                    <path d="M5 5h6v2H7v10h10v-4h2v6H5V5Z" />
                                </svg>
                            </a>
                        </InfoCard>

                        <InfoCard isDarkMode={isDarkMode} label="Location">
                            Sydney, Australia 🇦🇺
                        </InfoCard>

                        <InfoCard isDarkMode={isDarkMode} label="Response time">
                            Under 24 hours (weekdays)
                        </InfoCard>
                    </div>

                    {status.msg ? (
                        <div
                            className={`rounded-xl px-4 py-3 text-sm ring-1 ${
                                status.type === "success"
                                    ? isDarkMode
                                        ? "bg-emerald-900/30 text-emerald-200 ring-emerald-800"
                                        : "bg-emerald-50 text-emerald-800 ring-emerald-200"
                                    : status.type === "error"
                                    ? isDarkMode
                                        ? "bg-rose-900/30 text-rose-200 ring-rose-800"
                                        : "bg-rose-50 text-rose-800 ring-rose-200"
                                    : isDarkMode
                                    ? "bg-blue-900/30 text-blue-200 ring-blue-800"
                                    : "bg-blue-50 text-blue-800 ring-blue-200"
                            }`}
                            role="status"
                        >
                            {status.msg}
                        </div>
                    ) : null}
                </div>

                {/* Right: Form */}
                <div className="md:col-span-7">
                    <form
                        onSubmit={handleSubmit}
                        className={`rounded-3xl p-6 ring-1 ${
                            isDarkMode
                                ? "bg-gray-900 ring-gray-800"
                                : "bg-white ring-gray-200"
                        }`}
                        noValidate
                    >
                        {/* Honeypot (invisible) */}
                        <input
                            type="text"
                            name="website"
                            value={form.website}
                            onChange={onChange}
                            className="hidden"
                            tabIndex={-1}
                            autoComplete="off"
                        />

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <Field
                                label="Your Name"
                                name="name"
                                value={form.name}
                                onChange={onChange}
                                placeholder="Prashrijan Shrestha"
                                required
                                isDarkMode={isDarkMode}
                            />
                            <Field
                                label="Email"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={onChange}
                                placeholder="you@example.com"
                                required
                                isDarkMode={isDarkMode}
                            />
                        </div>

                        <Field
                            className="mt-4"
                            label="Subject"
                            name="subject"
                            value={form.subject}
                            onChange={onChange}
                            placeholder="Let’s talk about a frontend role"
                            isDarkMode={isDarkMode}
                        />

                        <FieldTextArea
                            className="mt-4"
                            label="Message"
                            name="message"
                            value={form.message}
                            onChange={onChange}
                            placeholder="Tell me about the project, timeline, and what success looks like…"
                            minLength={10}
                            maxLength={1000}
                            isDarkMode={isDarkMode}
                        />

                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            <button
                                type="submit"
                                disabled={!canSubmit}
                                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition
                  ${
                      !canSubmit
                          ? isDarkMode
                              ? "bg-gray-800 text-slate-400"
                              : "bg-gray-100 text-slate-400"
                          : isDarkMode
                          ? "bg-white text-gray-900 hover:bg-gray-200"
                          : "bg-gray-900 text-white hover:bg-black"
                  }`}
                            >
                                {submitting ? (
                                    <>
                                        <Spinner />
                                        Sending…
                                    </>
                                ) : (
                                    <>
                                        <svg
                                            className="h-4 w-4"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2 .01 7Z" />
                                        </svg>
                                        Send Message
                                    </>
                                )}
                            </button>

                            <a
                                href={`mailto:${CONTACT_EMAIL}`}
                                className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium transition
                  ${
                      isDarkMode
                          ? "border-gray-700 hover:bg-gray-800"
                          : "border-gray-300 hover:bg-gray-100"
                  }`}
                            >
                                Email Directly
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

/* ---------- UI bits ---------- */

function InfoCard({ isDarkMode, label, children }) {
    return (
        <div
            className={`rounded-2xl p-4 ring-1 ${
                isDarkMode
                    ? "bg-gray-900 ring-gray-800"
                    : "bg-white ring-gray-200"
            }`}
        >
            <div className="text-[11px] uppercase tracking-widest opacity-70">
                {label}
            </div>
            <div className="mt-1 text-sm">{children}</div>
        </div>
    );
}

function Field({
    label,
    name,
    value,
    onChange,
    placeholder,
    isDarkMode,
    type = "text",
    required,
    className = "",
}) {
    return (
        <label className={`block ${className}`}>
            <span
                className={`text-xs font-medium ${
                    isDarkMode ? "text-slate-300" : "text-slate-700"
                }`}
            >
                {label}
                {required && " *"}
            </span>
            <input
                type={type}
                name={name}
                required={required}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`mt-1 w-full rounded-xl px-3 py-2 text-sm ring-1 outline-none transition
          ${
              isDarkMode
                  ? "bg-gray-800 ring-gray-700 placeholder:text-slate-500 focus:ring-slate-500"
                  : "bg-white ring-gray-300 placeholder:text-slate-400 focus:ring-slate-600"
          }`}
            />
        </label>
    );
}

function FieldTextArea({
    label,
    name,
    value,
    onChange,
    placeholder,
    isDarkMode,
    minLength,
    maxLength,
    className = "",
}) {
    const remaining = maxLength ? maxLength - (value?.length || 0) : null;
    return (
        <label className={`block ${className}`}>
            <span
                className={`text-xs font-medium ${
                    isDarkMode ? "text-slate-300" : "text-slate-700"
                }`}
            >
                {label} *
            </span>
            <textarea
                name={name}
                required
                minLength={minLength}
                maxLength={maxLength}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                rows={6}
                className={`mt-1 w-full rounded-xl px-3 py-2 text-sm ring-1 outline-none transition
          ${
              isDarkMode
                  ? "bg-gray-800 ring-gray-700 placeholder:text-slate-500 focus:ring-slate-500"
                  : "bg-white ring-gray-300 placeholder:text-slate-400 focus:ring-slate-600"
          }`}
            />
            {remaining !== null && (
                <div
                    className={`mt-1 text-[11px] ${
                        isDarkMode ? "text-slate-500" : "text-slate-500"
                    }`}
                >
                    {remaining} characters left
                </div>
            )}
        </label>
    );
}

function Spinner() {
    return (
        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
            <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
            ></circle>
            <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4z"
            ></path>
        </svg>
    );
}
