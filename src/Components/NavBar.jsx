import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ isDarkMode }) => {
  const [activeLink, setActiveLink] = useState("/");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={`${
        isDarkMode ? "bg-gray-900 text-white shadow-lg" : "bg-white"
      } shadow-xl`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3">
          <img src="/developer.png" className="h-8" alt="Developer" />
          <span className="self-center text-xl md:text-2xl font-semibold whitespace-nowrap">
            Prashrijan | Software Developer
          </span>
        </a>

        {/* Menu Button for small screens */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full lg:block lg:w-auto`}
          id="navbar-default"
        >
          <ul
            className={`${
              isDarkMode
                ? "bg-gray-800 lg:bg-gray-900 border-gray-700"
                : "border-gray-100 bg-white"
            } font-medium flex flex-col lg:flex-row p-4 lg:p-0 mt-4 lg:mt-0 border rounded-lg lg:border-0 lg:space-x-8 text-xl`}
          >
            <li>
              <NavLink
                to={"/"}
                onClick={() => setActiveLink("/")}
                className={`block py-2 px-3 rounded bg-transparent ${
                  activeLink === "/"
                    ? isDarkMode
                      ? "text-white bg-blue-700"
                      : "text-blue-700 bg-gray-100"
                    : isDarkMode
                    ? "text-gray-400 hover:text-white hover:bg-gray-700"
                    : "text-gray-900 hover:bg-gray-100 hover:text-blue-700"
                }`}
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/skills"}
                onClick={() => setActiveLink("/skills")}
                className={`block py-2 px-3 rounded bg-transparent ${
                  activeLink === "/skills"
                    ? isDarkMode
                      ? "text-white bg-blue-700"
                      : "text-blue-700 bg-gray-100"
                    : isDarkMode
                    ? "text-gray-400 hover:text-white hover:bg-gray-700"
                    : "text-gray-900 hover:bg-gray-100 hover:text-blue-700"
                }`}
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/projects"}
                onClick={() => setActiveLink("/projects")}
                className={`block py-2 px-3 rounded bg-transparent ${
                  activeLink === "/projects"
                    ? isDarkMode
                      ? "text-white bg-blue-700"
                      : "text-blue-700 bg-gray-100"
                    : isDarkMode
                    ? "text-gray-400 hover:text-white hover:bg-gray-700"
                    : "text-gray-900 hover:bg-gray-100 hover:text-blue-700"
                }`}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                onClick={() => setActiveLink("/about")}
                className={`block py-2 px-3 rounded bg-transparent ${
                  activeLink === "/about"
                    ? isDarkMode
                      ? "text-white bg-blue-700"
                      : "text-blue-700 bg-gray-100"
                    : isDarkMode
                    ? "text-gray-400 hover:text-white hover:bg-gray-700"
                    : "text-gray-900 hover:bg-gray-100 hover:text-blue-700"
                }`}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                onClick={() => setActiveLink("/contact")}
                className={`block py-2 px-3 rounded bg-transparent ${
                  activeLink === "/contact"
                    ? isDarkMode
                      ? "text-white bg-blue-700"
                      : "text-blue-700 bg-gray-100"
                    : isDarkMode
                    ? "text-gray-400 hover:text-white hover:bg-gray-700"
                    : "text-gray-900 hover:bg-gray-100 hover:text-blue-700"
                }`}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
