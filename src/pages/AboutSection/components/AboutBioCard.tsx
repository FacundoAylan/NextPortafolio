const AboutBioCard = () => {
  return (
    <div className="relative group bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:border-[#a87dcc]/50 transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(168,125,204,0.15)]">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#a87dcc]/0 via-[#a87dcc]/5 to-[#a87dcc]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <p className="relative text-white/90 text-base md:text-xl font-bold font-orbitron leading-relaxed md:tracking-wider 2xl:text-2xl">
        ¡Hola! Soy{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a87dcc] to-purple-300 underline decoration-[#a87dcc]/40 underline-offset-4">
          Facundo
        </span>
        , estudiante de{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a87dcc] to-purple-300 underline decoration-[#a87dcc]/40 underline-offset-4">
          Tecnicatura en programación en la UTN y Full Stack Developer
        </span>
        . Me apasiona el diseño web y me encanta aprender nuevas
        tecnologías. Además, tengo un gran interés en la electrónica y la
        reparación de computadoras. Estoy emocionado por seguir creciendo
        profesionalmente y encontrar nuevas formas de fusionar mi pasión por
        el diseño y la tecnología. ¡Gracias por visitar mi portafolio!
        Siempre estoy abierto a nuevas oportunidades y colaboraciones, así
        que no dudes en ponerte en contacto conmigo.
      </p>
    </div>
  );
};

export default AboutBioCard;