const AboutInfoCard = () => {
  return (
    <div className="w-full lg:w-1/2 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.3)] font-mono text-white text-lg tracking-wider transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#a87dcc]/50 hover:shadow-[0_0_30px_rgba(168,125,204,0.15)] group relative overflow-hidden">
      {/* Brillo ambiental interno */}
      <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-[#a87dcc]/10 rounded-full blur-2xl group-hover:bg-[#a87dcc]/20 transition-all duration-500 pointer-events-none" />

      <h3 className="about font-black text-[#a87dcc] text-2xl 2xl:text-4xl text-center md:text-start border-b border-[#a87dcc]/20 pb-3 mb-6">
        Información clave
      </h3>
      <div className="space-y-4">
        <h4 className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
          <span className="font-orbitron text-[#a87dcc] min-w-[120px]">Ubicación:</span>
          <span className="text-white/80 text-base">Buenos Aires (CABA), Argentina</span>
        </h4>
        <h4 className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
          <span className="font-orbitron text-[#a87dcc] min-w-[120px]">Teléfono:</span>
          <a
            href="tel:1136747801"
            className="text-white/80 text-base hover:text-[#a87dcc] transition-colors duration-300 underline underline-offset-4 decoration-transparent hover:decoration-[#a87dcc]"
          >
            1136747801
          </a>
        </h4>
        <h4 className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
          <span className="font-orbitron text-[#a87dcc] min-w-[120px]">Correo:</span>
          <a
            href="mailto:facundoaylan3@gmail.com"
            className="text-white/80 text-base hover:text-[#a87dcc] transition-colors duration-300 underline underline-offset-4 decoration-transparent hover:decoration-[#a87dcc] break-all"
          >
            facundoaylan3@gmail.com
          </a>
        </h4>
      </div>
    </div>
  );
};

export default AboutInfoCard;