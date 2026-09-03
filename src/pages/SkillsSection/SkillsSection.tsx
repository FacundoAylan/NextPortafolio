import { backendSkills, frontendSkills, toolsSkills } from "../../constants/skills";
import SectionSkills from "./Componets/SectionSkills";

interface SkillSection {
  title: string;
  skills: typeof frontendSkills; 
  delay: string;
}

const SkillsSection = () => {
  const skillSections: SkillSection[] = [
    { title: "Front End", skills: frontendSkills, delay: "delay-0" },
    { title: "Back End", skills: backendSkills, delay: "delay-150" },
    { title: "Herramientas", skills: toolsSkills, delay: "delay-300" },
  ];

  return (
    <div className="w-full flex-1 min-h-0 flex flex-col justify-start md:justify-center items-center px-4 py-6 mt-[400px] md:mt-0 md:px-8 overflow-y-auto md:overflow-hidden z-10">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-4 sm:gap-6 items-stretch justify-center my-auto">
        {skillSections.map((section) => (
          <div
            key={section.title}
            className={`w-full md:w-1/3 flex flex-col transition-all duration-500 ease-out animate-in fade-in slide-in-from-bottom-4 ${section.delay}`}
          >
            <SectionSkills title={section.title} skills={section.skills} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
