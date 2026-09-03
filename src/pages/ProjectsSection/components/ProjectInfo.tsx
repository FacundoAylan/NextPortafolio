import { motion, AnimatePresence } from "framer-motion";
import type { ProjectSlide } from "../../../constants/projectData";

interface ProjectInfoProps {
  currentSlide: ProjectSlide;
  currentIndex: number;
}

const ProjectInfo = ({
  currentSlide,
  currentIndex,
}: ProjectInfoProps) => {
  return (
    <div className="w-full md:w-[48%] flex flex-col justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex flex-col gap-3 md:gap-4 w-full"
        >
          {/* Subtítulo y Título */}
          <div>
            <span className="text-[10px] md:text-xs font-mono font-bold text-[#a87dcc] uppercase tracking-widest px-3 py-1 bg-[#a87dcc]/10 border border-[#a87dcc]/30 rounded-full inline-block mb-1.5">
              {currentSlide.subtitle}
            </span>
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-orbitron text-white tracking-wide">
              {currentSlide.title}
            </h1>
          </div>

          {/* Badges de Tecnologías */}
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {currentSlide.icons.map((item, i) => {
              const IconComponent = item.icon;
              if (!IconComponent) return null;

              return (
                <div
                  key={i}
                  className="bg-slate-900/80 text-white/90 px-2.5 py-1 rounded-xl text-[11px] md:text-xs font-mono font-semibold flex items-center gap-1.5 border border-white/10 shadow-sm transition-all duration-300 hover:border-[#a87dcc]/50 group"
                >
                  <IconComponent
                    className={`text-sm md:text-base ${item.color || "text-[#a87dcc]"} transition-transform duration-200 group-hover:scale-110`}
                  />
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>

          {/* Descripción */}
          <div className="w-full h-[130px] sm:h-[160px] md:h-[200px] border border-white/10 rounded-2xl p-3 md:p-4 bg-slate-950/40 backdrop-blur-md shadow-xl overflow-y-auto leading-relaxed text-white/80 text-xs sm:text-sm md:text-base space-y-2">
            {currentSlide.description.split("\n").map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProjectInfo;