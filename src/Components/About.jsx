import React from "react";

const About = ({ isDarkMode }) => {
  return (
    <section
      className={`${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } py-16 px-4 sm:px-6 lg:px-8 min-h-screen-minus-80 flex items-center`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl">About Me</h2>
        <p
          className={`mt-4 text-lg ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          I’m Prashrijan Shrestha, a frontend developer who crafts the digital
          experiences you interact with online. I design websites that are not
          just visually appealing but intuitive to use. With every line of code,
          I shape the future of web interaction, making the digital world
          smoother and more accessible for everyone.
        </p>
      </div>
    </section>
  );
};

export default About;
