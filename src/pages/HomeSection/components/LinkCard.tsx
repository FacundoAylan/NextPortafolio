import type { ReactNode } from "react";

interface LinkCardProps {
  href: string;
  icon: ReactNode;
  text: string;
  download?: boolean;
}

const LinkCard = ({ href, icon, text, download = false }: LinkCardProps) => {
  const isExternal = !download && href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      download={download ? true : undefined}
      className="group relative w-[80%] md:w-full h-full flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-md shadow-sm overflow-hidden transition-all duration-300 ease-out hover:scale-105 hover:bg-slate-800/50 hover:border-[#a87dcc]/40 hover:shadow-md"
    >
      {/* Destello de luz mate al pasar el cursor (Shimmer discreto) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />

      {/* Ícono sobrio con escala suave */}
      <div className="text-2xl sm:text-3xl text-white/80 group-hover:text-[#a87dcc] group-hover:scale-110 transition-all duration-300 mb-1.5 z-10 shrink-0">
        {icon}
      </div>

      {/* Texto centrado estilizado */}
      <span className="font-mono text-xs sm:text-sm font-medium text-white/80 group-hover:text-white tracking-wide text-center transition-colors duration-300 z-10">
        {text}
      </span>
    </a>
  );
};

export default LinkCard;