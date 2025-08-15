export function Ticker({ children, isDarkMode }) {
    return (
        <div
            className={`relative overflow-hidden rounded-2xl ring-1 ${
                isDarkMode
                    ? "bg-slate-900 ring-slate-800"
                    : "bg-white ring-slate-200"
            }`}
        >
            <style>{`
        @keyframes tickerScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
            <div className="flex whitespace-nowrap">
                <div className="flex animate-[tickerScroll_18s_linear_infinite]">
                    {children}
                </div>
                <div className="flex animate-[tickerScroll_18s_linear_infinite]">
                    {children}
                </div>
            </div>
        </div>
    );
}
