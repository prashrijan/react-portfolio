import React from "react";

export default function About({ isDarkMode, photoUrl = "/profile.png" }) {
    return (
        <section
            className={`relative ${
                isDarkMode
                    ? "bg-gray-950 text-white"
                    : "bg-gray-50 text-gray-900"
            } min-h-screen-minus-80 py-16 px-4 sm:px-6 lg:px-8`}
        >
            {/* subtle top border accent */}
            <div
                className="absolute inset-x-0 top-0 h-px"
                style={{
                    background: isDarkMode
                        ? "linear-gradient(90deg,#0ea5e9,#a78bfa)"
                        : "linear-gradient(90deg,#60a5fa,#f472b6)",
                }}
            />

            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-12">
                {/* LEFT: Sticky Profile Card */}
                <aside className="md:col-span-4">
                    <div
                        className={`rounded-3xl ring-1 p-6 md:sticky md:top-24 ${
                            isDarkMode
                                ? "bg-gray-900 ring-gray-800"
                                : "bg-white ring-gray-200"
                        }`}
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="relative">
                                <img
                                    src={photoUrl}
                                    alt="Prashrijan Shrestha"
                                    className="h-28 w-28 rounded-full object-cover ring-2 ring-offset-2"
                                    style={{
                                        ringColor: isDarkMode
                                            ? "#334155"
                                            : "#e2e8f0",
                                        ringOffsetColor: isDarkMode
                                            ? "#0b1220"
                                            : "#ffffff",
                                    }}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>

                            <h1 className="mt-4 text-xl font-bold">
                                Prashrijan Shrestha
                            </h1>
                            <p
                                className={`mt-1 text-sm ${
                                    isDarkMode
                                        ? "text-slate-400"
                                        : "text-slate-600"
                                }`}
                            >
                                Frontend Developer
                            </p>

                            <div className="mt-4 flex flex-wrap justify-center gap-2">
                                <Chip isDarkMode={isDarkMode}>Sydney • 🇦🇺</Chip>
                                <Chip isDarkMode={isDarkMode}>
                                    Open to Roles
                                </Chip>
                                <Chip isDarkMode={isDarkMode}>
                                    Available for Freelance
                                </Chip>
                            </div>

                            <div className="mt-6 flex w-full flex-col gap-2 sm:flex-row">
                                <a
                                    href="/Prashrijan_Shrestha_CV.pdf"
                                    download
                                    className={`flex-1 rounded-xl px-4 py-2 text-center text-sm font-medium transition
                    ${
                        isDarkMode
                            ? "bg-white text-gray-900 hover:bg-gray-200"
                            : "bg-gray-900 text-white hover:bg-black"
                    }`}
                                >
                                    Download CV
                                </a>
                                <a
                                    href="#contact"
                                    className={`flex-1 rounded-xl border px-4 py-2 text-center text-sm font-medium transition
                    ${
                        isDarkMode
                            ? "border-gray-700 hover:bg-gray-800"
                            : "border-gray-300 hover:bg-gray-100"
                    }`}
                                >
                                    Contact
                                </a>
                            </div>

                            {/* socials */}
                            <div className="mt-5 flex gap-3">
                                <Social
                                    href="https://www.linkedin.com/in/prashrijanshrestha/"
                                    label="LinkedIn"
                                    isDarkMode={isDarkMode}
                                >
                                    <svg
                                        className="h-4 w-4"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M4.984 3.5A2.25 2.25 0 1 0 5 8 2.25 2.25 0 0 0 4.984 3.5ZM3 9h4v12H3Zm6 0h3.6v1.7h.051C13.3 9.9 14.7 9 16.7 9c3.2 0 3.8 2.1 3.8 4.9V21h-4v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21H9Z" />
                                    </svg>
                                </Social>
                                <Social
                                    href="https://github.com/prashrijan"
                                    label="GitHub"
                                    isDarkMode={isDarkMode}
                                >
                                    <svg
                                        className="h-4 w-4"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M12 2C6.477 2 2 6.59 2 12.253c0 4.517 2.865 8.345 6.839 9.699.5.095.683-.223.683-.497 0-.245-.009-.894-.014-1.754-2.782.616-3.369-1.37-3.369-1.37-.455-1.176-1.11-1.49-1.11-1.49-.908-.636.069-.623.069-.623 1.003.071 1.53 1.056 1.53 1.056.893 1.565 2.343 1.113 2.914.851.091-.665.35-1.113.636-1.37-2.221-.258-4.555-1.136-4.555-5.056 0-1.117.39-2.03 1.03-2.747-.103-.259-.447-1.3.098-2.71 0 0 .84-.27 2.75 1.048A9.33 9.33 0 0 1 12 7.52a9.3 9.3 0 0 1 2.5.35c1.908-1.318 2.747-1.048 2.747-1.048.546 1.41.202 2.451.1 2.71.64.717 1.028 1.63 1.028 2.747 0 3.93-2.337 4.796-4.565 5.05.359.32.678.95.678 1.915 0 1.382-.013 2.498-.013 2.838 0 .275.181.595.688.494A10.06 10.06 0 0 0 22 12.253C22 6.59 17.523 2 12 2Z"
                                        />
                                    </svg>
                                </Social>
                                <Social
                                    href="mailto:shresthaprashrijan@gmail.com"
                                    label="Email"
                                    isDarkMode={isDarkMode}
                                >
                                    <svg
                                        className="h-4 w-4"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M20 4H4a2 2 0 0 0-2 2v.217l10 6.25 10-6.25V6a2 2 0 0 0-2-2Zm0 4.533-8.554 5.343a1 1 0 0 1-1.06 0L2 8.533V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.533Z" />
                                    </svg>
                                </Social>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* RIGHT: Content */}
                <main className="md:col-span-8">
                    {/* Section: Intro */}
                    <Section
                        isDarkMode={isDarkMode}
                        title="About Me"
                        eyebrow="Profile"
                    >
                        <p
                            className={
                                isDarkMode ? "text-slate-300" : "text-slate-700"
                            }
                        >
                            I’m{" "}
                            <span className="font-semibold">
                                Prashrijan Shrestha
                            </span>
                            , a frontend developer who ships clean UI and smooth
                            UX. I design websites that are not just good-looking
                            but also intuitive, accessible, and fast. With every
                            line of code, I’m aiming for fewer clicks, clearer
                            intent, and zero surprises in production.
                        </p>
                    </Section>

                    {/* Section: Values */}
                    <Section
                        isDarkMode={isDarkMode}
                        title="Principles"
                        eyebrow="How I work"
                    >
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <Card
                                isDarkMode={isDarkMode}
                                title="Clean > Clever"
                            >
                                Readable components. Predictable state. Tests
                                where it counts.
                            </Card>
                            <Card
                                isDarkMode={isDarkMode}
                                title="Accessible by Default"
                            >
                                Keyboard-first, semantic HTML, real contrast —
                                no excuses.
                            </Card>
                            <Card
                                isDarkMode={isDarkMode}
                                title="Fast is a Feature"
                            >
                                Smart caching, small bundles, and perf budgets
                                that stick.
                            </Card>
                        </div>
                    </Section>

                    {/* Section: Highlights */}
                    <Section
                        isDarkMode={isDarkMode}
                        title="Highlights"
                        eyebrow="Snapshot"
                    >
                        <div className="grid grid-cols-3 gap-3 max-w-md">
                            <Stat
                                k="Projects"
                                v="12+"
                                isDarkMode={isDarkMode}
                            />
                            <Stat
                                k="Experience"
                                v="3+ yrs"
                                isDarkMode={isDarkMode}
                            />
                            <Stat
                                k="Uptime"
                                v="99.9%"
                                isDarkMode={isDarkMode}
                            />
                        </div>
                    </Section>

                    {/* Section: Timeline */}
                    <Section
                        isDarkMode={isDarkMode}
                        title="Timeline"
                        eyebrow="Recent work"
                    >
                        <Timeline
                            isDarkMode={isDarkMode}
                            items={[
                                {
                                    year: "2025",
                                    title: "Chunaab v2 — Next.js Rebuild",
                                    desc: "SSR, cleaner DX, real-time dashboards, better SEO.",
                                },
                                {
                                    year: "2024",
                                    title: "Capstone: Chunaab v1 (MERN)",
                                    desc: "Role-based voting, PDF results, live charts, Stripe.",
                                },
                                {
                                    year: "2023",
                                    title: "Frontend deep dive",
                                    desc: "Design systems, accessibility, performance budgets.",
                                },
                            ]}
                        />
                    </Section>
                </main>
            </div>
        </section>
    );
}

/* ---------- tiny bits ---------- */

function Chip({ children, isDarkMode }) {
    return (
        <span
            className={`rounded-full px-3 py-1 text-xs font-medium ring-1
        ${
            isDarkMode
                ? "bg-gray-900 ring-gray-800 text-slate-200"
                : "bg-white ring-gray-200 text-slate-800"
        }`}
        >
            {children}
        </span>
    );
}

function Social({ href, label, children, isDarkMode }) {
    return (
        <a
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-lg p-2 ring-1 transition ${
                isDarkMode
                    ? "ring-gray-800 hover:bg-gray-800"
                    : "ring-gray-200 hover:bg-gray-100"
            }`}
        >
            {children}
        </a>
    );
}

function Section({ title, eyebrow, children, isDarkMode }) {
    return (
        <section className="mt-2">
            <div className="flex items-center gap-2">
                <span className="h-4 w-1.5 rounded-full bg-gradient-to-b from-blue-500 to-fuchsia-500" />
                <span
                    className={`text-[11px] uppercase tracking-widest ${
                        isDarkMode ? "text-slate-400" : "text-slate-500"
                    }`}
                >
                    {eyebrow}
                </span>
            </div>
            <h2 className="mt-1 text-2xl font-bold">{title}</h2>
            <div
                className={`mt-4 rounded-2xl p-5 ring-1 ${
                    isDarkMode
                        ? "bg-gray-900 ring-gray-800"
                        : "bg-white ring-gray-200"
                }`}
            >
                {children}
            </div>
        </section>
    );
}

function Card({ title, children, isDarkMode }) {
    return (
        <div
            className={`rounded-xl p-4 ring-1 ${
                isDarkMode
                    ? "bg-gray-900 ring-gray-800"
                    : "bg-white ring-gray-200"
            }`}
        >
            <div className="text-sm font-semibold">{title}</div>
            <p
                className={`mt-1 text-sm ${
                    isDarkMode ? "text-slate-400" : "text-slate-600"
                }`}
            >
                {children}
            </p>
        </div>
    );
}

function Stat({ k, v, isDarkMode }) {
    return (
        <div
            className={`rounded-xl p-4 text-center ring-1 ${
                isDarkMode
                    ? "bg-gray-900 ring-gray-800"
                    : "bg-white ring-gray-200"
            }`}
        >
            <div className="text-2xl font-bold">{v}</div>
            <div
                className={`text-[11px] uppercase tracking-widest ${
                    isDarkMode ? "text-slate-400" : "text-slate-600"
                }`}
            >
                {k}
            </div>
        </div>
    );
}

function Timeline({ items, isDarkMode }) {
    return (
        <ul className="relative mt-2 space-y-6">
            <span
                className={`pointer-events-none absolute left-4 top-0 h-full w-px ${
                    isDarkMode ? "bg-slate-700" : "bg-slate-200"
                }`}
            />
            {items.map((it) => (
                <li key={it.title} className="relative pl-10">
                    <span
                        className={`absolute left-2 top-1.5 h-4 w-4 rounded-full ring-2 ${
                            isDarkMode
                                ? "bg-cyan-300/30 ring-cyan-200/50"
                                : "bg-blue-400/25 ring-blue-300/60"
                        }`}
                    >
                        <span
                            className={`${
                                isDarkMode ? "bg-cyan-300" : "bg-blue-500"
                            } absolute inset-[5px] rounded-full`}
                        />
                    </span>
                    <div className="text-sm font-semibold">
                        {it.year} — {it.title}
                    </div>
                    <p
                        className={`text-sm mt-0.5 ${
                            isDarkMode ? "text-slate-400" : "text-slate-600"
                        }`}
                    >
                        {it.desc}
                    </p>
                </li>
            ))}
        </ul>
    );
}
