"use client";
import SkillCard from "./SkillCard";

const SectionSkills =({title, skills})=>{
    return(
        <div 
            className="w-full md:w-1/2 
            backdrop-blur-sm bg-white/5
            mt-[200px] md:mt-48 xl:mt-1
            border-2 border-gray-700 rounded-3xl
            hover:border-[#a87dcc]"
        >
            <h1 
                className="text-center text-2xl font-black text-[#a87dcc] mt-4 lg:text-4xl uppercase"
            >
                {title}
            </h1>

            <div className="w-full flex gap-4 flex-wrap justify-center items-center mt-6">
                {skills.map((skill, index)=>(
                    <SkillCard 
                        key={index}
                        name={skill.name}
                        icon={<skill.icon size={30} color={skill.color}/>}
                    />
                ))}
            </div>
        </div>
    )
}

export default SectionSkills;