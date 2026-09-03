import { HiPlay } from "react-icons/hi";
import type { ProjectSlide } from "../../../constants/projectData";

interface ProjectVideoPreviewProps {
  currentSlide: ProjectSlide;
  onOpenModal: () => void;
}

const ProjectVideoPreview = ({
  currentSlide,
  onOpenModal,
}: ProjectVideoPreviewProps) => {
  return (
    <div className="w-full md:w-[48%] flex justify-center md:justify-end items-center md:items-end z-10">
      <div
        onClick={onOpenModal}
        className="md:mt-6 relative w-full max-w-[500px] md:h-[320px] aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-slate-950 group cursor-pointer transition-all duration-300 hover:border-[#a87dcc]/40 hover:shadow-[#a87dcc]/10"
      >
        <iframe
          key={currentSlide.video}
          src={`${currentSlide.video}&background=1&loop=1&byline=0&title=0&muted=1`}
          className="w-full h-full object-cover pointer-events-none opacity-65 group-hover:opacity-90 transition-opacity duration-500"
          frameBorder="0"
          allow="fullscreen"
          title={currentSlide.title}
        />

        {/* Overlay interactivo */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-center justify-center transition-all duration-300 group-hover:bg-slate-950/20">
          <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/20 text-[#a87dcc] flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:border-[#a87dcc] group-hover:bg-[#a87dcc] group-hover:text-slate-950">
            <HiPlay className="text-xl md:text-3xl ml-0.5 transition-colors duration-300" />
          </div>
        </div>

        <div className="absolute bottom-2.5 right-3 px-2.5 py-0.5 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/10 text-[9px] md:text-[10px] font-mono text-white/70 tracking-widest uppercase pointer-events-none">
          Ver Demo
        </div>
      </div>
    </div>
  );
};

export default ProjectVideoPreview;
