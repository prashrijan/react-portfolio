import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import { About, Contact, Home, Projects, Skills } from "./Components/Index";
import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { motion } from "framer-motion";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  const toggleDarkMode = (checked) => {
    setIsDarkMode(checked);
  };

  return (
    <>
      {/* Splash Screen */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        onAnimationComplete={() => setAnimationComplete(true)}
        className={`fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center`}
        style={{
          backgroundColor: isDarkMode
            ? "rgba(15, 23, 42, 0.95)"
            : "rgba(243, 244, 246, 0.95)",
          backdropFilter: "blur(5px)",
        }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
          className="md:text-4xl font-bold tex-center text-2xl"
          style={{ color: isDarkMode ? "white" : "black" }}
        >
          Welcome to Prashrijan's World
        </motion.h1>
      </motion.div>

      {/* Main Website */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: animationComplete ? 1 : 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className={`${
          isDarkMode ? "bg-slate-800 text-white" : "bg-gray-100 text-black"
        } min-h-screen`}
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
        <div className="p-4">
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
      </motion.div>
    </>
  );
}

export default App;
