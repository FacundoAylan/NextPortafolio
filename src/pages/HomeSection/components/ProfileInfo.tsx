import SocialLinksGrid from "./SocialLinksGrid";

interface ProfileInfoProps {
  isReady: boolean;
}

const ProfileInfo = ({ isReady }: ProfileInfoProps) => {
  return (
    <div
      className={`w-full md:w-[60%] flex flex-col items-center md:items-start justify-center gap-2.5 sm:gap-4 2xl:gap-8 text-center md:text-left z-10 transition-all duration-1000 ease-out delay-200 ${
        isReady ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20 pointer-events-none"
      }`}
    >
      {/* Badge */}
      <span className="text-[10px] sm:text-xs 2xl:text-2xl font-mono font-bold text-[#a87dcc] uppercase tracking-widest px-3 py-1 bg-[#a87dcc]/10 border border-[#a87dcc]/30 rounded-full inline-block">
        Portfolio Personal
      </span>

      {/* Título Principal */}
      <h1 className="text-2xl sm:text-4xl lg:text-7xl 2xl:text-8xl font-black font-orbitron text-white tracking-wide uppercase drop-shadow-lg">
        Full Stack <span className="text-[#a87dcc]">Developer</span>
      </h1>

      {/* Subtítulos */}
      <div className="space-y-0.5">
        <h2 className="text-xs sm:text-xl 2xl:text-3xl font-semibold text-white/90 tracking-wide">
          Experiencia en React &amp; Node.js
        </h2>
        <p className="text-[11px] sm:text-base 2xl:text-3xl font-mono text-[#a87dcc]/90">
          Buenos Aires (CABA)/Argentina
        </p>
      </div>

      {/* Grilla de Redes */}
      <SocialLinksGrid />
    </div>
  );
};

export default ProfileInfo;