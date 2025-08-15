import React, { useMemo, useState } from "react";
import SkillsCard from "./SkillsCard";
import {
    frontendSkills,
    backendSkills,
    databaseSkills,
} from "../Assets/assets";

const TABS = [
    { key: "All", label: "All Skills" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "database", label: "Database" },
];

export default function Skills({ isDarkMode }) {
    const allSkills = useMemo(
        () => [...frontendSkills, ...backendSkills, ...databaseSkills],
        []
    );

    const [activeTab, setActiveTab] = useState("All");
    const [query, setQuery] = useState("");

    // counts for the pills
    const counts = {
        All: allSkills.length,
        frontend: frontendSkills.length,
        backend: backendSkills.length,
        database: databaseSkills.length,
    };

    const sourceByTab = {
        All: allSkills,
        frontend: frontendSkills,
        backend: backendSkills,
        database: databaseSkills,
    };

    // filter by tab + search query
    const filteredSkills = useMemo(() => {
        const base = sourceByTab[activeTab] || [];
        if (!query.trim()) return base;
        const q = query.toLowerCase();
        return base.filter((s) =>
            (s.languageName || "").toLowerCase().includes(q)
        );
    }, [activeTab, query]);

    return (
        <section
            className={`min-h-screen-minus-80 w-full ${
                isDarkMode
                    ? "bg-gray-900 text-white"
                    : "bg-gray-50 text-gray-900"
            }`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
                {/* Header */}
                <header className="flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p
                            className={`text-xs uppercase tracking-widest ${
                                isDarkMode ? "text-slate-400" : "text-slate-500"
                            }`}
                        >
                            Toolbox
                        </p>
                        <h2 className="text-3xl font-extrabold sm:text-4xl">
                            My Skills
                        </h2>
                        <p
                            className={`mt-2 text-sm ${
                                isDarkMode ? "text-slate-300" : "text-slate-600"
                            }`}
                        >
                            Filter by area or search directly. Hover a card for
                            a little sparkle ✨
                        </p>
                    </div>

                    {/* Search */}
                    <div className="w-full sm:w-80">
                        <div
                            className={`flex items-center gap-2 rounded-2xl ring-1 px-3 py-2 ${
                                isDarkMode
                                    ? "bg-gray-800 ring-gray-700"
                                    : "bg-white ring-gray-200"
                            }`}
                        >
                            <svg
                                className={`h-4 w-4 ${
                                    isDarkMode
                                        ? "text-slate-400"
                                        : "text-slate-500"
                                }`}
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M10 4a6 6 0 1 1-3.973 10.485l-2.77 2.77-1.414-1.414 2.77-2.77A6 6 0 0 1 10 4Zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
                            </svg>
                            <input
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search skills…"
                                className={`w-full bg-transparent outline-none text-sm ${
                                    isDarkMode
                                        ? "placeholder:text-slate-500"
                                        : "placeholder:text-slate-400"
                                }`}
                            />
                            {query && (
                                <button
                                    onClick={() => setQuery("")}
                                    className={`rounded-md px-2 py-1 text-xs ${
                                        isDarkMode
                                            ? "bg-gray-700 text-slate-200 hover:bg-gray-600"
                                            : "bg-gray-100 text-slate-700 hover:bg-gray-200"
                                    }`}
                                >
                                    Clear
                                </button>
                            )}
                        </div>
                    </div>
                </header>

                {/* Filters */}
                <div className="sticky top-16 z-10 mt-6">
                    <div className="flex flex-wrap items-center gap-2">
                        {TABS.map((t) => {
                            const active = activeTab === t.key;
                            return (
                                <button
                                    key={t.key}
                                    type="button"
                                    aria-pressed={active}
                                    onClick={() => setActiveTab(t.key)}
                                    className={[
                                        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ring-1 transition",
                                        active
                                            ? isDarkMode
                                                ? "bg-blue-600 text-white ring-blue-500"
                                                : "bg-blue-600 text-white ring-blue-600"
                                            : isDarkMode
                                            ? "bg-gray-800 text-slate-200 ring-gray-700 hover:bg-gray-700"
                                            : "bg-white text-slate-800 ring-gray-200 hover:bg-gray-50",
                                    ].join(" ")}
                                >
                                    {t.label}
                                    <span
                                        className={[
                                            "rounded-full px-2 py-0.5 text-[11px] font-semibold",
                                            active
                                                ? isDarkMode
                                                    ? "bg-white/20"
                                                    : "bg-white/20"
                                                : isDarkMode
                                                ? "bg-gray-700"
                                                : "bg-gray-100",
                                        ].join(" ")}
                                    >
                                        {counts[t.key]}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Grid */}
                <div className="mt-8">
                    {filteredSkills.length === 0 ? (
                        <div
                            className={`rounded-2xl p-8 text-center ring-1 ${
                                isDarkMode
                                    ? "bg-gray-800 ring-gray-700"
                                    : "bg-white ring-gray-200"
                            }`}
                        >
                            <p className="text-sm opacity-80">
                                No results for{" "}
                                <span className="font-semibold">“{query}”</span>
                                . Try another term.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                            {filteredSkills.map((skill, idx) => (
                                <SkillsCard
                                    key={`${
                                        skill.languageName || "skill"
                                    }-${idx}`}
                                    skill={skill}
                                    isDarkMode={isDarkMode}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
