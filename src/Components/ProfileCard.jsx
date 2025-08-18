import React, { useMemo } from "react";
import { SocialButton } from "../Helpers/SocialButton";
import { Ticker } from "../Helpers/Ticker";
import { TiltCard } from "../Helpers/TiltCard";
import { skillsDefault, statsDefault } from "../Assets/assets";

export default function ProfileCard({
    isDarkMode,
    photoUrl = "/profile.png",
    skills = skillsDefault,
    stats = statsDefault,
}) {
    const ticker = useMemo(() => [...skills, ...skills, ...skills], [skills]);

    return (
        <section
            className={`relative overflow-hidden ${
                isDarkMode
                    ? "bg-slate-800 text-white"
                    : "bg-gray-100 text-gray-900"
            } w-full min-h-screen-minus-80`}
        >
            {/* angled gradient slashes for a distinct vibe */}
            <div
                className="pointer-events-none absolute -top-24 right-0 h-72 w-[55vw] -skew-y-6 opacity-25 blur-2xl"
                style={{
                    background: isDarkMode
                        ? "linear-gradient(90deg,#0ea5e9,#a78bfa)"
                        : "linear-gradient(90deg,#60a5fa,#f472b6)",
                }}
            />
            <div
                className="pointer-events-none absolute -bottom-24 left-0 h-72 w-[45vw] skew-y-6 opacity-20 blur-2xl"
                style={{
                    background: isDarkMode
                        ? "linear-gradient(90deg,#22d3ee,#f472b6)"
                        : "linear-gradient(90deg,#34d399,#818cf8)",
                }}
            />

            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl py-12 md:py-16">
                <div className="grid items-center grid-cols-1 md:grid-cols-12 gap-12">
                    {/* LEFT: Content */}
                    <div className="md:col-span-7">
                        <div
                            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ring-1 ${
                                isDarkMode
                                    ? "bg-black/30 text-slate-200 ring-slate-700"
                                    : "bg-white text-slate-700 ring-slate-200"
                            }`}
                        >
                            <span
                                className={`inline-block h-2 w-2 rounded-full ${
                                    isDarkMode
                                        ? "bg-emerald-400"
                                        : "bg-emerald-500"
                                }`}
                            />
                            Available for work
                        </div>

                        <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
                            Hey 👋 I’m{" "}
                            <span className="whitespace-nowrap">
                                Prashrijan Shrestha
                            </span>
                        </h2>

                        <p
                            className={`max-w-xl mt-4 text-lg leading-relaxed ${
                                isDarkMode ? "text-gray-300" : "text-gray-600"
                            }`}
                        >
                            Frontend developer who ships crisp UI and smooth UX.
                            I build accessible, fast interfaces with clean
                            component architecture and zero drama in production.
                        </p>

                        {/* CTAs */}
                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            <a
                                href="/fullStackResume.pdf"
                                download="Prashrijan_CV.pdf"
                                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition ${
                                    isDarkMode
                                        ? "bg-white text-gray-900 hover:bg-gray-200"
                                        : "bg-gray-900 text-white hover:bg-black"
                                }`}
                            >
                                {/* download icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M12 3a1 1 0 0 1 1 1v9.586l2.293-2.293 1.414 1.414L12 17.414l-4.707-4.707 1.414-1.414L11 13.586V4a1 1 0 0 1 1-1Z" />
                                    <path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3h-2v3H7v-3H5v3Z" />
                                </svg>
                                Download CV
                            </a>

                            <a
                                href="/contact"
                                className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium transition ${
                                    isDarkMode
                                        ? "border-slate-700 hover:bg-slate-800"
                                        : "border-slate-300 hover:bg-gray-100"
                                }`}
                            >
                                Let’s Talk
                            </a>
                        </div>

                        {/* Socials */}
                        <div className="mt-5 flex gap-4">
                            <SocialButton
                                isDarkMode={isDarkMode}
                                href="https://www.linkedin.com/in/prashrijanshrestha/"
                                label="LinkedIn"
                                svg={
                                    <svg
                                        className="h-5 w-5"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M4.984 3.5A2.25 2.25 0 1 0 5 8 2.25 2.25 0 0 0 4.984 3.5ZM3 9h4v12H3Zm6 0h3.6v1.7h.051C13.3 9.9 14.7 9 16.7 9c3.2 0 3.8 2.1 3.8 4.9V21h-4v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21H9Z" />
                                    </svg>
                                }
                            />
                            <SocialButton
                                isDarkMode={isDarkMode}
                                href="https://github.com/prashrijan"
                                label="GitHub"
                                svg={
                                    <svg
                                        className="h-5 w-5"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12 2C6.477 2 2 6.59 2 12.253c0 4.517 2.865 8.345 6.839 9.699.5.095.683-.223.683-.497 0-.245-.009-.894-.014-1.754-2.782.616-3.369-1.37-3.369-1.37-.455-1.176-1.11-1.49-1.11-1.49-.908-.636.069-.623.069-.623 1.003.071 1.53 1.056 1.53 1.056.893 1.565 2.343 1.113 2.914.851.091-.665.35-1.113.636-1.37-2.221-.258-4.555-1.136-4.555-5.056 0-1.117.39-2.03 1.03-2.747-.103-.259-.447-1.3.098-2.71 0 0 .84-.27 2.75 1.048A9.33 9.33 0 0 1 12 7.52a9.3 9.3 0 0 1 2.5.35c1.908-1.318 2.747-1.048 2.747-1.048.546 1.41.202 2.451.1 2.71.64.717 1.028 1.63 1.028 2.747 0 3.93-2.337 4.796-4.565 5.05.359.32.678.95.678 1.915 0 1.382-.013 2.498-.013 2.838 0 .275.181.595.688.494A10.06 10.06 0 0 0 22 12.253C22 6.59 17.523 2 12 2Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                }
                            />
                            <SocialButton
                                isDarkMode={isDarkMode}
                                href="mailto:shresthaprashrijan@gmail.com"
                                label="Email"
                                svg={
                                    <svg
                                        className="h-5 w-5"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M20 4H4a2 2 0 0 0-2 2v.217l10 6.25 10-6.25V6a2 2 0 0 0-2-2Zm0 4.533-8.554 5.343a1 1 0 0 1-1.06 0L2 8.533V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.533Z" />
                                    </svg>
                                }
                            />
                        </div>

                        {/* Skills ticker */}
                        <div className="mt-8">
                            <Ticker isDarkMode={isDarkMode}>
                                {ticker.map((s, i) => (
                                    <span
                                        key={`${s}-${i}`}
                                        className={`mx-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${
                                            isDarkMode
                                                ? "bg-slate-900 text-slate-200"
                                                : "bg-white text-slate-800"
                                        } ring-1 ${
                                            isDarkMode
                                                ? "ring-slate-700"
                                                : "ring-slate-200"
                                        }`}
                                    >
                                        <span
                                            className={`inline-block h-1.5 w-1.5 rounded-full ${
                                                isDarkMode
                                                    ? "bg-cyan-300"
                                                    : "bg-blue-500"
                                            }`}
                                        />
                                        {s}
                                    </span>
                                ))}
                            </Ticker>
                        </div>

                        {/* Quick stats */}
                        <div className="mt-8 grid grid-cols-3 gap-3 max-w-sm">
                            {stats.map(({ label, value }) => (
                                <div
                                    key={label}
                                    className={`rounded-2xl p-4 text-center ring-1 shadow-sm ${
                                        isDarkMode
                                            ? "bg-slate-900 ring-slate-800"
                                            : "bg-white ring-slate-200"
                                    }`}
                                >
                                    <div className="text-2xl font-bold">
                                        {value}
                                    </div>
                                    <div
                                        className={`text-[11px] uppercase tracking-wide ${
                                            isDarkMode
                                                ? "text-slate-400"
                                                : "text-slate-600"
                                        }`}
                                    >
                                        {label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Photo with subtle tilt */}
                    <div className="md:col-span-5">
                        <TiltCard>
                            <div
                                className={`relative rounded-3xl p-2 ring-1 shadow-2xl ${
                                    isDarkMode
                                        ? "bg-slate-900 ring-slate-800"
                                        : "bg-white ring-slate-200"
                                }`}
                            >
                                {/* stacked frames for “polaroid” feel */}
                                <div
                                    className="absolute -inset-2 -z-10 rotate-[-3deg] rounded-3xl opacity-70"
                                    style={{
                                        background: isDarkMode
                                            ? "linear-gradient(90deg,#22d3ee33,#a78bfa33)"
                                            : "linear-gradient(90deg,#60a5fa33,#f472b633)",
                                    }}
                                />
                                <div
                                    className="absolute -inset-2 -z-20 rotate-[2deg] rounded-3xl opacity-60"
                                    style={{
                                        background: isDarkMode
                                            ? "linear-gradient(90deg,#0ea5e933,#f472b633)"
                                            : "linear-gradient(90deg,#34d39933,#818cf833)",
                                    }}
                                />

                                <img
                                    src={photoUrl}
                                    alt="Portrait of Prashrijan Shrestha"
                                    className="aspect-[4/5] w-full rounded-2xl object-cover"
                                    loading="lazy"
                                    decoding="async"
                                />

                                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                                    <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                                        Frontend Developer
                                    </span>
                                    <span
                                        className={`rounded-full px-3 py-1 text-xs font-medium backdrop-blur ${
                                            isDarkMode
                                                ? "bg-white/10 text-slate-200"
                                                : "bg-black/5 text-slate-700"
                                        }`}
                                    >
                                        Sydney • 🇦🇺
                                    </span>
                                </div>
                            </div>
                        </TiltCard>
                    </div>
                </div>
            </div>
        </section>
    );
}
