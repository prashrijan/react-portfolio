import React from "react";

const ProfileCard = ({ isDarkMode }) => {
  return (
    <section
      className={`overflow-hidden bg-gray-100 ${
        isDarkMode ? "dark:bg-gray-800" : ""
      } md:pt-0 sm:pt-16 2xl:pt-16 `}
    >
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-24">
          <div>
            <h2
              className={`text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl`}
            >
              Hey 👋 I am
              <br className="block" />
              Prashrijan Shrestha
            </h2>
            <p
              className={`max-w-lg mt-3 text-xl leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              } md:mt-8`}
            >
              Web Developer with a strong focus on creating seamless and
              intuitive user experiences. Eager to contribute to innovative
              projects and grow in the field of web development.
            </p>

            <p
              className={`mt-4 text-xl ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              } md:mt-8`}
            >
              <span className="relative inline-block">
                <span
                  className={`absolute inline-block w-full bottom-0.5 h-2 ${
                    isDarkMode ? "bg-gray-900" : "bg-yellow-300"
                  }`}
                ></span>
                <span className="relative"> Have a question? </span>
              </span>
              <br className="block sm:hidden" />
              Ask me on{" "}
              <a
                href="https://www.linkedin.com/in/prashrijanshrestha/"
                className={`transition-all duration-200 ${
                  isDarkMode ? "text-sky-400" : "text-sky-500"
                } hover:${
                  isDarkMode ? "text-sky-500" : "text-sky-600"
                } dark:hover:${
                  isDarkMode ? "text-sky-500" : "text-sky-400"
                } hover:underline`}
              >
                Linkedin
              </a>
            </p>

            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-center mt-4 transition-all transform hover:scale-105 hover:rotate-3"
            >
              Download CV <i className="ri-download-line text-lg"></i>
            </button>
          </div>

          <div className="relative">
            <img
              className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
              alt=""
            />

            <img
              className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
              src="/profile.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
