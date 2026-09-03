import { FaGithub, FaLinkedin, FaFilePdf, FaEnvelope } from "react-icons/fa";
import LinkCard from "./components/LinkCard";
import mailtoLink from "./utils/sendEmail";

const HomeSection = () => {

  return (
      <div className="group w-full h-full min-h-full flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-12 px-4 sm:px-12 py-6 text-white shadow-2xl overflow-y-auto">
        {/* Columna Izquierda: Foto de Perfil */}
        <div className="w-full md:w-[40%] flex items-center md:justify-end justify-center shrink-0 [perspective:1000px] pt-2">
          <div className="relative w-36 h-36 sm:w-56 sm:h-56 md:w-80 md:h-[380px] aspect-square md:aspect-auto rounded-full md:rounded-3xl border-2 border-[#a87dcc]/40 shadow-[0_0_30px_rgba(168,125,204,0.25)] transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cursor-pointer">
            {/* Cara Frontal */}
            <div
              className="absolute inset-0 w-full h-full rounded-full md:rounded-3xl overflow-hidden bg-slate-950"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              <img
                src="/image/profile.webp"
                alt="Facundo Aylan profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Cara Trasera */}
            <div
              className="absolute inset-0 w-full h-full rounded-full md:rounded-3xl overflow-hidden bg-slate-950 [transform:rotateY(180deg)]"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              <img
                src="/image/profile2.webp"
                alt="Facundo Aylan presenting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Columna Derecha: Información Principal */}
        <div className="w-full md:w-[60%] flex flex-col items-center md:items-start justify-center gap-2.5 sm:gap-4 text-center md:text-left z-10">
          {/* Badge */}
          <span className="text-[10px] sm:text-xs font-mono font-bold text-[#a87dcc] uppercase tracking-widest px-3 py-1 bg-[#a87dcc]/10 border border-[#a87dcc]/30 rounded-full inline-block">
            Portfolio Personal
          </span>

          {/* Título Principal */}
          <h1 className="text-2xl sm:text-4xl lg:text-7xl font-black font-orbitron text-white tracking-wide uppercase drop-shadow-lg">
            Full Stack <span className="text-[#a87dcc]">Developer</span>
          </h1>

          {/* Subtítulos */}
          <div className="space-y-0.5">
            <h2 className="text-xs sm:text-xl font-semibold text-white/90 tracking-wide">
              Experiencia en React & Node.js
            </h2>
            <p className="text-[11px] sm:text-base font-mono text-[#a87dcc]/90">
              Buenos Aires (CABA), Argentina
            </p>
          </div>

          {/* Grilla de Redes */}
          <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full max-w-md mt-2 md:mt-4 items-center">
            <LinkCard
              href="https://github.com/FacundoAylan"
              icon={<FaGithub className="text-base sm:text-xl shrink-0" />}
              text="GitHub"
            />
            <LinkCard
              href="https://www.linkedin.com/in/facundo-aylan-582b52257/"
              icon={
                <FaLinkedin className="text-[#0A66C2] text-base sm:text-xl shrink-0" />
              }
              text="LinkedIn"
            />
            <LinkCard
              href="/FacundoAylan.pdf"
              icon={
                <FaFilePdf className="text-[#FF0000] text-base sm:text-xl shrink-0" />
              }
              text="CV"
              download
            />
            <LinkCard
              href={mailtoLink}
              icon={
                <FaEnvelope className="text-[#EA4335] text-base sm:text-xl shrink-0" />
              }
              text="Email"
            />
          </div>
        </div>
      </div>
  );
}

export default HomeSection;
