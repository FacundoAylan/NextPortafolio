import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import AboutBioCard from "./components/AboutBioCard";
import AboutInfoCard from "./components/AboutInfoCard";
import AboutSpecialtiesCard from "./components/AboutSpecialtiesCard";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section className="relative w-full min-h-[calc(100vh-5rem)] flex flex-col justify-center py-8 px-4 sm:px-8 overflow-hidden">
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#a87dcc]/10 rounded-full blur-[120px] pointer-events-none" />

      <div
        ref={ref}
        className={`w-full flex flex-col gap-6 max-w-6xl 2xl:gap-9 mx-auto z-10 transition-all duration-1000 ease-out ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-16 pointer-events-none"
        }`}
      >
        {/* Card 1: Biografía */}
        <AboutBioCard />

        {/* Sección Datos y Especialidades (juntas) */}
        <div className="w-full flex flex-col lg:flex-row justify-between gap-6">
          <AboutInfoCard />
          <AboutSpecialtiesCard />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;