import InterestCard from "./components/InterestCard";
import { FaMicrochip, FaGamepad, FaMusic, FaFilm } from "react-icons/fa";

const AboutSection = () => {

  return (
    <div className="w-full min-h-[calc(100vh-5rem)] flex flex-col justify-start pt-2 md:pt-4 pb-6 px-4 sm:px-8">
      <div className="w-full flex flex-col gap-4 max-w-6xl mx-auto md:my-auto">
        {/* Card 1: Presentación / Biografía */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl hover:border-[#a87dcc]/40 transition-all duration-500 ease-out hover:-translate-y-1.5 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p
            id="text"
            className="text-white/90 text-base md:text-xl font-bold font-orbitron leading-relaxed md:tracking-wider 2xl:text-2xl"
          >
            ¡Hola! Soy{" "}
            <span className="text-[#a87dcc] underline decoration-[#a87dcc]/40 underline-offset-4">
              Facundo
            </span>
            , estudiante de{" "}
            <span className="text-[#a87dcc] underline decoration-[#a87dcc]/40 underline-offset-4">
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

        {/* Sección Datos e Intereses */}
        <div className="w-full hidden md:flex flex-col lg:flex-row lg:justify-between gap-6 px-1">
          {/* Card 2: Personal Information */}
          <div
            id="datos1"
            className="w-full md:w-1/2 hidden md:block bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl font-mono text-white text-lg tracking-wider transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-[#a87dcc]/40 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150"
          >
            <h3 className="about font-black text-[#a87dcc] text-2xl 2xl:text-4xl text-center md:text-start border-b border-[#a87dcc]/20 pb-3 mb-4">
              Datos personales
            </h3>
            <div className="space-y-3">
              <h4 className="flex items-center gap-2">
                <span className="font-orbitron text-[#a87dcc]">
                  Cumpleaños:
                </span>
                <span className="text-white/80">20/02/2000</span>
              </h4>
              <h4 className="flex items-center gap-2">
                <span className="font-orbitron text-[#a87dcc]">Teléfono:</span>
                <a
                  href="tel:1136747801"
                  className="text-white/80 hover:text-[#a87dcc] transition-colors duration-300"
                >
                  1136747801
                </a>
              </h4>
              <h4 className="flex items-center gap-2">
                <span className="font-orbitron text-[#a87dcc]">Correo:</span>
                <a
                  href="mailto:facundoaylan3@gmail.com"
                  className="text-white/80 hover:text-[#a87dcc] transition-colors duration-300"
                >
                  facundoaylan3@gmail.com
                </a>
              </h4>
            </div>
          </div>

          {/* Card 3: Interests */}
          <div
            id="datos2"
            className="hidden md:block md:w-1/2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-[#a87dcc]/40 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300"
          >
            <h3 className="about text-center font-black text-2xl text-[#a87dcc] 2xl:text-4xl border-b border-[#a87dcc]/20 pb-3 mb-4">
              Intereses
            </h3>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <InterestCard
                name="Electrónica"
                icon={<FaMicrochip size={28} className="text-[#a87dcc]" />}
              />
              <InterestCard
                name="Gamer"
                icon={<FaGamepad size={28} className="text-[#a87dcc]" />}
              />
              <InterestCard
                name="Música"
                icon={<FaMusic size={28} className="text-[#a87dcc]" />}
              />
              <InterestCard
                name="Películas"
                icon={<FaFilm size={28} className="text-[#a87dcc]" />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
