export default function ProjectCard({ project, isDarkMode }) {
    const {
        title,
        description,
        tags = [],
        image,
        liveUrl,
        githubUrl,
        year,
    } = project;

    return (
        <article
            className={[
                "group relative overflow-hidden rounded-2xl border transition-all",
                "shadow-sm hover:shadow-xl hover:-translate-y-0.5",
                isDarkMode
                    ? "bg-slate-800/70 border-slate-700"
                    : "bg-white border-slate-200",
            ].join(" ")}
            aria-label={title}
        >
            {/* Cover */}
            <div className="relative">
                {image ? (
                    <img
                        src={image}
                        alt={`${title} cover`}
                        className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        loading="lazy"
                        decoding="async"
                    />
                ) : (
                    <div
                        className={[
                            "h-48 w-full",
                            isDarkMode ? "bg-slate-700" : "bg-slate-100",
                        ].join(" ")}
                    />
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
                {year && (
                    <span
                        className={[
                            "absolute top-3 right-3 rounded-full px-2 py-1 text-xs font-medium",
                            isDarkMode
                                ? "bg-black/40 text-slate-200"
                                : "bg-white/80 text-slate-700",
                            "backdrop-blur-sm",
                        ].join(" ")}
                    >
                        {year}
                    </span>
                )}
            </div>

            {/* Body */}
            <div className="p-5">
                <h3 className="text-lg font-semibold leading-snug">{title}</h3>
                <p
                    className={[
                        "mt-2 text-sm",
                        isDarkMode ? "text-slate-300" : "text-slate-600",
                    ].join(" ")}
                >
                    {description}
                </p>

                {/* Tags */}
                {tags.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                        {tags.map((t) => (
                            <li
                                key={t}
                                className={[
                                    "rounded-full px-2.5 py-1 text-[11px] font-medium",
                                    isDarkMode
                                        ? "bg-slate-700 text-slate-200"
                                        : "bg-slate-100 text-slate-700",
                                ].join(" ")}
                            >
                                {t}
                            </li>
                        ))}
                    </ul>
                )}

                {/* Actions */}
                <div className="mt-5 flex items-center gap-3">
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={[
                                "inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium",
                                isDarkMode
                                    ? "bg-slate-900 hover:bg-slate-800 border border-slate-700"
                                    : "bg-slate-900 hover:bg-black text-white border border-slate-900",
                                isDarkMode ? "text-white" : "text-white",
                                "transition-colors",
                            ].join(" ")}
                        >
                            {/* external link icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M14 3h7v7h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H14V3Z" />
                                <path d="M5 5h6v2H7v10h10v-4h2v6H5V5Z" />
                            </svg>
                            Live
                        </a>
                    )}
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={[
                                "inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium border transition-colors",
                                isDarkMode
                                    ? "border-slate-700 hover:bg-slate-800 text-slate-200"
                                    : "border-slate-300 hover:bg-slate-50 text-slate-800",
                            ].join(" ")}
                        >
                            {/* github mark */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 2C6.477 2 2 6.59 2 12.253c0 4.517 2.865 8.345 6.839 9.699.5.095.683-.223.683-.497 0-.245-.009-.894-.014-1.754-2.782.616-3.369-1.37-3.369-1.37-.455-1.176-1.11-1.49-1.11-1.49-.908-.636.069-.623.069-.623 1.003.071 1.53 1.056 1.53 1.056.893 1.565 2.343 1.113 2.914.851.091-.665.35-1.113.636-1.37-2.221-.258-4.555-1.136-4.555-5.056 0-1.117.39-2.03 1.03-2.747-.103-.259-.447-1.3.098-2.71 0 0 .84-.27 2.75 1.048A9.33 9.33 0 0 1 12 7.52a9.3 9.3 0 0 1 2.5.35c1.908-1.318 2.747-1.048 2.747-1.048.546 1.41.202 2.451.1 2.71.64.717 1.028 1.63 1.028 2.747 0 3.93-2.337 4.796-4.565 5.05.359.32.678.95.678 1.915 0 1.382-.013 2.498-.013 2.838 0 .275.181.595.688.494A10.06 10.06 0 0 0 22 12.253C22 6.59 17.523 2 12 2Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Code
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}
