import React from "react";
import ProfileCard from "./ProfileCard";

const Home = ({ isDarkMode }) => {
  return (
    <div
      className={`${
        isDarkMode ? "bg-slate-800 text-white" : "bg-gray-100 text-black"
      } min-h-screen-minus-80 flex items-center justify-center p-4 sm:p-0`}
    >
      <ProfileCard isDarkMode={isDarkMode} />
    </div>
  );
};

export default Home;
