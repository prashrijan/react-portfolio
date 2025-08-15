export function SocialButton({ isDarkMode, href, label, svg }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`rounded-lg p-2 transition ring-1 ${
                isDarkMode
                    ? "ring-slate-800 hover:bg-slate-800"
                    : "ring-slate-200 hover:bg-gray-100"
            }`}
        >
            {svg}
        </a>
    );
}
