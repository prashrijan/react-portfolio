import React from "react";
import ProfileCard from "./ProfileCard";

const Home = ({ isDarkMode }) => {
    return (
        <div
            className={`${
                isDarkMode
                    ? "bg-slate-800 text-white"
                    : "bg-gray-100 text-black"
            }`}
        >
            <ProfileCard isDarkMode={isDarkMode} />
        </div>
    );
};

export default Home;
