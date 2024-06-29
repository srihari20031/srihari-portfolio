import Image from "next/image";
import { skills } from "../constants/index";

const SkillBox = () => {
  return (
    <div className="my-20">
      <div className="font-extrabold text-center text-[30px] text-[#ffb703]">
      Skills & Showcases
      </div>
      
      <div className="lg:grid lg:grid-cols-6 pt-10 lg:px-24 md:px-28 px-12  lg:mb-20 mb-10 grid grid-cols-3">
        {skills.map((skill: any) => {
          return (
            <div key={skill.id} className="pt-10 flex items-center justify-center">
              <Image
                src={skill.image}
                alt={skill.name}
                className="w-[60px] h-[60px]   border-gray-400 p-2 rounded-lg shadow-lg animate-float"
              />
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillBox;
