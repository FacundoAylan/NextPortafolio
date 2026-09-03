import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface ProjectPaginationProps {
  currentIndex: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
}

const ProjectPagination = ({
  currentIndex,
  totalSlides,
  onPrev,
  onNext,
}: ProjectPaginationProps) => {
  return (
    <div className="w-full flex justify-center items-center mt-4 md:mt-2 z-40 shrink-0">
      <div className="flex justify-center items-center gap-3 sm:gap-4 bg-slate-950/90 px-4 py-1.5 rounded-full shadow-2xl border border-white/10 backdrop-blur-lg">
        <button
          type="button"
          onClick={onPrev}
          className="p-1 rounded-full text-[#a87dcc] hover:text-white hover:bg-white/10 transition-all duration-200 active:scale-90 shrink-0"
          aria-label="Anterior"
        >
          <HiChevronLeft className="text-xl sm:text-2xl" />
        </button>

        <span className="text-xs font-mono font-bold text-white tracking-widest px-1 whitespace-nowrap select-none">
          <span className="text-[#a87dcc]">{currentIndex + 1}</span> /{" "}
          {totalSlides}
        </span>

        <button
          type="button"
          onClick={onNext}
          className="p-1 rounded-full text-[#a87dcc] hover:text-white hover:bg-white/10 transition-all duration-200 active:scale-90 shrink-0"
          aria-label="Siguiente"
        >
          <HiChevronRight className="text-xl sm:text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default ProjectPagination;