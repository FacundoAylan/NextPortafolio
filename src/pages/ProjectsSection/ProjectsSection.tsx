import { useState, useEffect } from "react";
import { slides } from "../../constants/projectData";
import ProjectInfo from "./components/ProjectInfo";
import ProjectVideoPreview from "./components/ProjectVideoPreview";
import ProjectPagination from "./ProjectPagination";
import ProjectVideoModal from "./ProjectVideoModal";


export const ProjectsSection = () => {
  const [index, setIndex] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleNext = () => setIndex((prev) => (prev + 1) % slides.length);
  const handlePrev = () =>
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  // Navegación por teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showModal && e.key === "Escape") {
        setShowModal(false);
      } else if (!showModal) {
        if (e.key === "ArrowRight") handleNext();
        if (e.key === "ArrowLeft") handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showModal]);

  const currentSlide = slides[index];

  return (
    <div className="relative w-full h-full min-h-full flex flex-col md:justify-between overflow-y-auto md:overflow-hidden border border-white/10 shadow-2xl px-4 md:px-12 pt-6 md:pt-10 pb-6">
      {/* Sección Superior: Contenido + Video */}
      <div className="w-full flex flex-col md:flex-1 md:flex-row items-center md:items-center md:justify-between gap-6 z-10">
        <ProjectInfo currentSlide={currentSlide} currentIndex={index} />
        <ProjectVideoPreview
          currentSlide={currentSlide}
          onOpenModal={() => setShowModal(true)}
        />
      </div>

      {/* Paginador Inferior */}
      <ProjectPagination
        currentIndex={index}
        totalSlides={slides.length}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      {/* Modal Interactivo */}
      {showModal && (
        <ProjectVideoModal
          videoUrl={currentSlide.video}
          title={currentSlide.title}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default ProjectsSection;
