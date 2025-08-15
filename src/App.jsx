import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import { About, Contact, Home, Projects, Skills } from "./Components/Index";
import { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Ensure Tailwind's dark: classes work globally
    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDarkMode);
    }, [isDarkMode]);

    return (
        <>
            <NavBar isDarkMode={isDarkMode} />

            {/* Floating dark-mode switch (no layout space, always on top) */}
            {/* Floating dark-mode switch */}
            <div className="fixed top-4 right-4 z-[9999] pointer-events-none">
                <div
                    className={`rounded-full px-2 py-2 backdrop-blur ring-1 pointer-events-auto
      ${
          isDarkMode
              ? "bg-white/10 ring-white/20"
              : "bg-white/80 ring-slate-200"
      }`}
                >
                    <DarkModeSwitch
                        checked={isDarkMode}
                        onChange={setIsDarkMode}
                        size={28}
                        moonColor={isDarkMode ? "#FDE68A" : "#334155"}
                        sunColor={isDarkMode ? "#F59E0B" : "#0EA5E9"}
                        aria-label="Toggle dark mode"
                    />
                </div>
            </div>

            <div>
                <Routes>
                    <Route
                        path="/"
                        element={<Home isDarkMode={isDarkMode} />}
                    />
                    <Route
                        path="/skills"
                        element={<Skills isDarkMode={isDarkMode} />}
                    />
                    <Route
                        path="/about"
                        element={<About isDarkMode={isDarkMode} />}
                    />
                    <Route
                        path="/contact"
                        element={<Contact isDarkMode={isDarkMode} />}
                    />
                    <Route
                        path="/projects"
                        element={<Projects isDarkMode={isDarkMode} />}
                    />
                </Routes>
            </div>
        </>
    );
}

export default App;
