import { type MouseEvent } from "react";
import { HiX } from "react-icons/hi";

interface ProjectVideoModalProps {
  videoUrl: string;
  title: string;
  onClose: () => void;
}

const ProjectVideoModal = ({
  videoUrl,
  title,
  onClose,
}: ProjectVideoModalProps) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-slate-900 rounded-2xl p-3 border border-white/10 shadow-2xl overflow-hidden"
        onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black">
          <iframe
            src={videoUrl}
            className="w-full h-full"
            frameBorder="0"
            allow="fullscreen; picture-in-picture"
            allowFullScreen
            title={title}
          />
        </div>

        <button
          type="button"
          className="absolute top-5 right-5 bg-slate-800/80 hover:bg-[#a87dcc] text-white hover:text-slate-950 p-2 rounded-full transition-colors border border-white/10"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          <HiX className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default ProjectVideoModal;;
