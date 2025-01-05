import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import { About, Contact, Home, Projects, Skills } from "./Components/Index";
import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    setIsDarkMode(checked);
  };
  return (
    <>
      <div
        className={`${
          isDarkMode ? "bg-slate-800 text-white" : "bg-gray-100 text-black"
        }`}
      >
        <NavBar isDarkMode={isDarkMode} />
        <DarkModeSwitch
          style={{
            position: "absolute",
            marginTop: "20px",
            right: "20px",
          }}
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={28}
        />
        <div className="p-0">
          <Routes>
            <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
            <Route
              path="/skills"
              element={<Skills isDarkMode={isDarkMode} />}
            />
            <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
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
      </div>
    </>
  );
}

export default App;
