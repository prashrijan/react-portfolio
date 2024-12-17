import React from "react";

const Projects = ({ isDarkMode }) => {
  return (
    <div
      className={`${
        isDarkMode ? "bg-slate-800 text-white" : "bg-gray-100 text-black"
      } min-h-screen-minus-80`}
    >
      Projects
    </div>
  );
};

export default Projects;
