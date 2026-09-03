import type{ ReactNode } from "react";

interface SkillCardProps {
  name: string;
  icon: ReactNode;
  status?: string;
}

export const SkillCard = ({ name, icon, status }: SkillCardProps) => {
  return (
    <div
      className="
    group relative w-16 h-20 sm:w-20 sm:h-22 md:w-22 md:h-24
    border border-white/10 rounded-xl p-1.5 
    text-white backdrop-blur-md bg-white/5 shadow-md
    flex flex-col items-center justify-center 
    transition-all duration-300 ease-out 
    hover:border-[#a87dcc] hover:bg-[#a87dcc]/20 hover:-translate-y-1 hover:shadow-[#a87dcc]/20 hover:shadow-lg hover:cursor-pointer"
    >
      {/* Badge opcional en tamaño ajustado */}
      {status && (
        <span className="absolute -top-2 z-10 px-1.5 py-0.2 text-[8px] font-mono font-semibold bg-[#a87dcc] text-slate-950 rounded-full shadow-sm border border-purple-300 whitespace-nowrap">
          {status}
        </span>
      )}

      {/* Ícono reducido */}
      <div className="text-2xl md:text-3xl drop-shadow-sm transition-transform duration-300 group-hover:scale-105">
        {icon}
      </div>

      {/* Texto compacto */}
      <p className="text-[10px] md:text-xs mt-1 font-bold text-center font-orbitron tracking-wide text-white/90 group-hover:text-white truncate w-full px-0.5">
        {name}
      </p>
    </div>
  );
};

export default SkillCard;
