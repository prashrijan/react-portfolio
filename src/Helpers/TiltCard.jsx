export function TiltCard({ children }) {
    return (
        <div
            className="[perspective:1000px]"
            onMouseMove={(e) => {
                const card = e.currentTarget.querySelector("[data-tilt]");
                if (!card) return;
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const rx = (y / rect.height - 0.5) * -6;
                const ry = (x / rect.width - 0.5) * 6;
                card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
            }}
            onMouseLeave={(e) => {
                const card = e.currentTarget.querySelector("[data-tilt]");
                if (card) card.style.transform = "rotateX(0deg) rotateY(0deg)";
            }}
        >
            <div
                data-tilt
                className="transition-transform duration-200 will-change-transform"
                style={{ transformStyle: "preserve-3d" }}
            >
                {children}
            </div>
        </div>
    );
}
