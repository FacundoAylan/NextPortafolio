import { FaLaptopCode, FaServer, FaDatabase, FaTools } from "react-icons/fa";

const AboutSpecialtiesCard = () => {
  return (
    <div className="w-full lg:w-1/2 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.3)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#a87dcc]/50 hover:shadow-[0_0_30px_rgba(168,125,204,0.15)] group relative overflow-hidden">
      {/* Brillo ambiental interno */}
      <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-[#a87dcc]/10 rounded-full blur-2xl group-hover:bg-[#a87dcc]/20 transition-all duration-500 pointer-events-none" />

      <h3 className="about text-center font-black text-2xl text-[#a87dcc] 2xl:text-4xl border-b border-[#a87dcc]/20 pb-3 mb-6">
        Especialidades
      </h3>
      <div className="grid grid-cols-2 gap-3 mt-4">
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-[#a87dcc]/40 transition-all duration-300 group/item">
          <FaLaptopCode className="text-xl 2xl:text-2xl text-[#a87dcc] group-hover/item:scale-110 transition-transform duration-300 shrink-0" />
          <span className="text-sm 2xl:text-lg font-mono text-white/90">Frontend Dev</span>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-[#a87dcc]/40 transition-all duration-300 group/item">
          <FaServer className="text-xl 2xl:text-2xl text-[#a87dcc] group-hover/item:scale-110 transition-transform duration-300 shrink-0" />
          <span className="text-sm 2xl:text-lg font-mono text-white/90">Backend API</span>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-[#a87dcc]/40 transition-all duration-300 group/item">
          <FaDatabase className="text-xl 2xl:text-2xl text-[#a87dcc] group-hover/item:scale-110 transition-transform duration-300 shrink-0" />
          <span className="text-sm 2xl:text-lg font-mono text-white/90">Bases de Datos</span>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-[#a87dcc]/40 transition-all duration-300 group/item">
          <FaTools className="text-xl 2xl:text-2xl text-[#a87dcc] group-hover/item:scale-110 transition-transform duration-300 shrink-0" />
          <span className="text-sm 2xl:text-lg font-mono text-white/90">Sistemas &amp; HW</span>
        </div>
      </div>
    </div>
  );
};

export default AboutSpecialtiesCard;