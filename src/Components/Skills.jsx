import React, { useState } from "react";
import SkillsCard from "./SkillsCard";

const frontendSkills = [
  {
    languageName: "HTML5",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIxeNFO8PSlvOvudmrtLIOYdTpN6o77VKolQ&s",
  },
  {
    languageName: "CSS3",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Official_CSS_Logo.svg/1024px-Official_CSS_Logo.svg.png",
  },
  {
    languageName: "JavaScript",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
  },
  {
    languageName: "React",
    imgSrc:
      "https://static-00.iconduck.com/assets.00/react-icon-512x512-u6e60ayf.png",
  },
  {
    languageName: "Tailwind CSS",
    imgSrc:
      "https://user-images.githubusercontent.com/98990/89711240-4172a200-d989-11ea-8d51-4aaf922fa407.png",
  },
];

const backendSkills = [
  {
    languageName: "Node.js",
    imgSrc:
      "https://ezerus.com.au/wp-content/uploads/2019/05/nodejs-square-200.png",
  },
  {
    languageName: "Express.js",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnDneBGnQL7E9hZDwztRO1GfQcCj1FqRrhBw&s",
  },
  {
    languageName: "MongoDB",
    imgSrc:
      "https://coursera-university-assets.s3.amazonaws.com/05/353594a7964fdeaff4e10615de58c0/MongoDBSquareLogo.png",
  },
];

const Skills = () => {
  const [skills, setSkills] = useState([...frontendSkills, ...backendSkills]);
  const [activeLink, setActiveLink] = useState("All");

  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-100 min-h-screen-minus-80">
      <h2 className="text-3xl font-bold mt-4 text-gray-800">My Skills</h2>
      {/* Categories */}
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button
          type="button"
          onClick={() => {
            setActiveLink("All");
            setSkills([...frontendSkills, ...backendSkills]);
          }}
          className={`${
            activeLink === "All"
              ? "text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
              : "text-gray-900 border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300"
          } rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3`}
        >
          All Skills
        </button>
        <button
          type="button"
          onClick={() => {
            setActiveLink("frontend");
            setSkills([...frontendSkills]);
          }}
          className={`${
            activeLink === "frontend"
              ? "text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
              : "text-gray-900 border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300"
          } rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3`}
        >
          Frontend
        </button>
        <button
          type="button"
          onClick={() => {
            setActiveLink("backend");
            setSkills([...backendSkills]);
          }}
          className={`${
            activeLink === "backend"
              ? "text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
              : "text-gray-900 border border-white hover:border-gray-200 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300"
          } rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3`}
        >
          Backend
        </button>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill) => {
          return <SkillsCard skill={skill} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
