import type{ ComponentType } from "react";
import SkillCard from "./SkillCard";

export interface Skill {
  name: string;
  icon: ComponentType<{ color?: string; className?: string }>;
  color?: string;
  status?: string;
}

interface SectionSkillsProps {
  title: string;
  skills: Skill[];
}

export const SectionSkills = ({ title, skills }: SectionSkillsProps) => {
  return (
    <div
      className="
        w-full 
        backdrop-blur-md bg-white/5
        border border-white/10 rounded-2xl p-5 shadow-xl
        transition-all duration-300 ease-out 
        hover:border-[#a87dcc]/40 hover:shadow-2xl"
    >
      <h2 className="text-center text-xl md:text-2xl font-black text-[#a87dcc] border-b border-[#a87dcc]/20 pb-3 uppercase tracking-wider font-orbitron drop-shadow-[0_0_8px_rgba(168,125,204,0.4)]">
        {title}
      </h2>

      <div className="w-full flex gap-3 md:gap-4 flex-wrap justify-center items-center mt-6">
        {skills.map((skill) => {
          const IconComponent = skill.icon;
          return (
            <SkillCard
              key={skill.name}
              name={skill.name}
              icon={<IconComponent color={skill.color} />}
              status={skill.status}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SectionSkills;
