import React from "react";

const SkillsCard = ({ skill }) => {
  return (
    <div>
      <img
        className="size-32 max-w-full object-cover rounded-lg"
        src={skill.imgSrc}
        alt="HTML5"
      />
      <p className="text-center mt-2 font-medium">{skill.languageName}</p>
    </div>
  );
};

export default SkillsCard;
