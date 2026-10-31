
const HomeIntroSplash = ({ showContent }: { showContent: boolean }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col gap-4 items-center justify-center px-4 text-center bg-slate-950/95 backdrop-blur-md transition-all duration-1000 ease-in-out ${
        showContent
          ? "opacity-0 -translate-y-8 pointer-events-none"
          : "opacity-100 translate-y-0"
      }`}
    >
      <span className="text-[#a87dcc] text-xs sm:text-sm md:text-base font-semibold tracking-[0.35em] uppercase font-mono">
        Bienvenidos a mi portfolio
      </span>

      <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-white drop-shadow-sm">
        Fullstack{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a87dcc] via-purple-400 to-indigo-300">
          Developer
        </span>
      </h1>

      <p className="text-base sm:text-xl text-gray-300 tracking-wide font-light">
        Especializado en{" "}
        <span className="text-[#a87dcc] font-medium">React</span> &amp;{" "}
        <span className="text-[#a87dcc] font-medium">Node.js</span>
      </p>

    <div className="flex items-center justify-center gap-2 mt-4">
      {/* Cuadrado 1 */}
      <div className="w-4 h-4 sm:w-6 sm:h-6 2xl:w-8 2xl:h-8 bg-[#a87dcc] rounded-md  animate-bounce [animation-delay:-0.3s]" />
      
      {/* Cuadrado 2 */}
      <div className="w-4 h-4 sm:w-6 sm:h-6 2xl:w-8 2xl:h-8 bg-[#a87dcc] rounded-md  animate-bounce [animation-delay:-0.15s]" />
      
      {/* Cuadrado 3 */}
      <div className="w-4 h-4 sm:w-6 sm:h-6 2xl:w-8 2xl:h-8 bg-[#a87dcc] rounded-md  animate-bounce" />
    </div>

  </div>
  );
};

export default HomeIntroSplash;