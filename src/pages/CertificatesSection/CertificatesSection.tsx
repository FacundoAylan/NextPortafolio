import { FaGraduationCap, FaAward } from "react-icons/fa";

const CertificatesSection = () => {
  return (
    <div className="w-full h-[calc(100vh-5rem)] flex flex-col justify-between py-4 px-4 sm:px-8 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto h-full flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Título Principal */}
        <h1 className="about text-2xl md:text-4xl font-black text-[#a87dcc] uppercase font-orbitron tracking-wider text-center drop-shadow-[0_0_12px_rgba(168,125,204,0.4)] shrink-0">
          Títulos y Certificaciones
        </h1>

        {/* Layout Principal: 2 Columnas en Desktop */}
        <div className="w-full flex-1 min-h-0 flex flex-col md:flex-row gap-4 items-stretch">
          <div className="w-full md:w-5/12 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:border-[#a87dcc]/40 hover:-translate-y-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 border-b border-[#a87dcc]/20 pb-4 mb-4">
                {/* Ícono con contenedor dinámico y Glow */}
                <div className="relative group/icon shrink-0">
                  <div className="absolute -inset-1 rounded-xl bg-[#a87dcc]/30 blur-sm transition-all duration-300 group-hover/icon:bg-[#a87dcc]/50" />
                  <div className="relative p-3.5 bg-slate-900/80 rounded-xl border border-[#a87dcc]/60 text-[#a87dcc] transition-transform duration-300 group-hover/icon:scale-105">
                    <FaGraduationCap className="text-3xl"/>
                  </div>
                </div>

                {/* Textos y Badge de Estado */}
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-2">
                    {/* Indicador tipo punto verde en pulso */}
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[11px] font-mono text-[#a87dcc] uppercase tracking-widest font-extrabold drop-shadow-[0_0_6px_rgba(168,125,204,0.4)]">
                      En curso
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-black font-orbitron text-white tracking-wide mt-0.5">
                    Educación Universitaria
                  </h3>
                </div>
              </div>

              <div className="space-y-2 mt-4">
                <h2 className="text-xl md:text-2xl font-bold font-orbitron text-white leading-tight">
                  Tecnicatura Universitaria en Programación
                </h2>
                <p className="text-sm font-mono text-white/70">
                  Universidad Tecnológica Nacional (UTN)
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5">
              <span className="inline-block px-3 py-1 text-xs font-mono bg-[#a87dcc]/20 text-[#a87dcc] rounded-full border border-[#a87dcc]/30">
                Formación Profesional
              </span>
            </div>
          </div>

          {/* Columna Derecha: Imagen Certificado */}
          <div className="w-full md:w-7/12 min-h-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-xl flex flex-col justify-between transition-all duration-300 hover:border-[#a87dcc]/40">
            <div className="w-full flex items-center gap-2 border-b border-[#a87dcc]/20 pb-3 shrink-0">
              <FaAward className="text-[#a87dcc] text-xl" />
              <h3 className="text-base font-bold font-orbitron text-white">
                Certificación Full Stack
              </h3>
            </div>

            {/* Visualizador de la Imagen adaptativo */}
            <div className="relative group w-full flex-1 min-h-0 flex items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/40 p-2 mt-3">
              <img
                src="/image/certificado.webp"
                alt="Certificado Full Stack Developer"
                className="max-w-full max-h-full object-contain rounded-lg transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CertificatesSection;