import React from "react";

export default function SkillsCard({ skill, isDarkMode }) {
    const { imgSrc, languageName, level } = skill || {};

    return (
        <article
            className={[
                "group relative overflow-hidden rounded-2xl p-3 ring-1 transition-all",
                "hover:-translate-y-1 hover:shadow-xl",
                isDarkMode
                    ? "bg-gray-800 ring-gray-700"
                    : "bg-white ring-gray-200",
            ].join(" ")}
            aria-label={languageName}
        >
            {/* subtle gradient edge */}
            <div
                className="pointer-events-none absolute -inset-0.5 -z-10 rounded-2xl opacity-0 blur transition-opacity duration-300 group-hover:opacity-60"
                style={{
                    background: isDarkMode
                        ? "linear-gradient(90deg,#22d3ee33,#a78bfa33)"
                        : "linear-gradient(90deg,#60a5fa33,#f472b633)",
                }}
            />

            {/* image */}
            <div
                className={[
                    "relative aspect-square w-full overflow-hidden rounded-xl",
                    isDarkMode ? "bg-gray-900" : "bg-gray-50",
                ].join(" ")}
            >
                {imgSrc ? (
                    <img
                        src={imgSrc}
                        alt={languageName || "Skill"}
                        className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-[1.04]"
                        loading="lazy"
                        decoding="async"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center text-xs opacity-60">
                        No Image
                    </div>
                )}

                {/* level chip, if provided */}
                {level && (
                    <span
                        className={[
                            "absolute bottom-2 left-2 rounded-full px-2.5 py-1 text-[10px] font-semibold backdrop-blur",
                            isDarkMode
                                ? "bg-white/10 text-slate-200"
                                : "bg-black/5 text-slate-700",
                        ].join(" ")}
                    >
                        {level}
                    </span>
                )}
            </div>

            {/* label */}
            <h3
                className={[
                    "mt-3 text-center text-sm font-medium",
                    isDarkMode ? "text-slate-200" : "text-slate-800",
                ].join(" ")}
            >
                {languageName || "Untitled"}
            </h3>
        </article>
    );
}
