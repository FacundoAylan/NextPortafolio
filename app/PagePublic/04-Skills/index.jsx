"use client";
import { backendSkills, frontendSkills, toolsSkills } from '@/data/skills';
import SectionSkills from './Componets/SectionSkills';

export default function Skill() {

    const skillSections = [
     { title: "Front end", skills: frontendSkills },
      { title: "Back End", skills: backendSkills },
      { title: "Herramientas", skills: toolsSkills },
    ];

    return (
        <div className="w-full h-full flex gap-6 mt-2 overflow-y-scroll py-6 px-2">
          {skillSections.map((section, index) => (
            <SectionSkills 
              key={index}
              title={section.title}
              skills={section.skills}
            />
          ))}
        </div>
    )
}