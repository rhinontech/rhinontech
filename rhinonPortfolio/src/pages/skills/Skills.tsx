import Divider from "../../utils/Divider";
import skills_1 from "../../assets/project_1.png";
import skills_2 from "../../assets/project_2.png";
import skills_3 from "../../assets/project_3.png";
import { useState } from "react";

function Skills() {
  const skills = [skills_1, skills_2, skills_3]; // Array of skill images
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  const handleNext = () => {
    setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
  };

  const handlePrev = () => {
    setCurrentSkillIndex((prevIndex) =>
      prevIndex === 0 ? skills.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="mt-20 pb-10 mr-[10%] ml-[10%]">
      <p className="poppins text-2xl font-semibold text-right">Skills</p>
      <Divider />
      <div className="mt-7 pb-5 flex items-center justify-evenly">
        {/* <Buttons title="Languages" width="140" /> */}
        <p className="pr-5 pl-5 pt-2 pb-2 rounded-[15px] font-medium poppins button-shadow cursor-pointer bg-[#7733FF] text-white min-w-[120px] w-[140px]">
          Languages
        </p>
      </div>

      <div className="flex items-center justify-center mt-10">
        <div className="flex-none w-14 cursor-pointer">
          <i
            className="fa-solid fa-caret-left hover:text-[#7733FF] text-[50px] p-[3px] pl-[7px] rounded-md button-shadow"
            onClick={handlePrev}
          ></i>
        </div>
        <div className="grow-[0.6] flex justify-center">
          <img
            className="min-w-[100px] sm:max-w-[300px] rounded-full profile-shadow"
            src={skills[currentSkillIndex]}
            alt="skill"
          />
        </div>
        <div className="flex-none w-14 cursor-pointer">
          <i
            className="fa-solid fa-caret-right hover:text-[#7733FF] text-[50px] p-[3px] pr-[7px] rounded-md button-shadow"
            onClick={handleNext}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Skills;
