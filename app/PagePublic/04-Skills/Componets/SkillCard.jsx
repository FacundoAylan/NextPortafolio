"use client";

const SkillCard = ({ name, icon }) =>{
    return (
        <div 
            className="
                group
                relative w-24 h-24 md:w-28 md:h-28 
                border-2 border-[#a87dcc] rounded-xl p-1 
                text-white backdrop-blur-sm bg-white/10
                flex flex-col items-center justify-center 
                transition-all duration-700 ease-out 
                hover:bg-[#a87dcc]/20 hover:scale-110 hover:cursor-pointer"
        >
            <div className="text-4xl drop-shadow-md group-hover:animate-pulse">{icon}</div>
            <p className="text-xs md:text-sm mt-2 font-bold text-center font-orbitron tracking-wide">
                {name}
            </p>
        </div>
    )
}

export default SkillCard;