"use client";
import "./styles.css";
import {
  FaLaptop,
  FaMicrochip,
  FaGamepad,
  FaMusic,
  FaFilm,
  FaCode,
} from "react-icons/fa";

const InterestCard = ({ name, icon }) => (
  <div className="interest-card w-24 h-20 border-2 border-[#a87dcc] p-1 rounded-xl flex flex-col items-center justify-center">
    <div className="text-white">{icon}</div>
    <p className="font-bold text-xs mt-2 text-[#a87dcc] font-mono text-center">
      {name}
    </p>
  </div>
);

export default function About() {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden pb-1 px-4 justify-center">
      <h1
        id="title"
        className="about w-full h-1/5 text-center text-6xl text-[#a87dcc] font-black xl:text-7xl flex items-center justify-center"
      >
        Sobre mi
      </h1>
      <div className="w-full h-4/5 flex flex-col gap-4">
        <p
          id="text"
          className="h-1/5 text-white text-base md:text-xl font-bold font-mono md:tracking-wider 2xl:text-3xl"
        >
          ¡Hola! Soy <span className="font-bold text-[#a87dcc]">Facundo</span>,
          estudiante de{" "}
          <span className="font-bold text-[#a87dcc]">
            Analista en Sistemas en la UBA y Full Stack Developer
          </span>
          . Me apasiona el diseño web y me encanta aprender nuevas tecnologías.
          Además, tengo un gran interés en la electrónica y la reparación de
          computadoras. Estoy emocionado por seguir creciendo profesionalmente y
          encontrar nuevas formas de fusionar mi pasión por el diseño y la
          tecnología. ¡Gracias por visitar mi portafolio! Siempre estoy abierto
          a nuevas oportunidades y colaboraciones, así que no dudes en ponerte
          en contacto conmigo.
        </p>
        <div className="w-full flex flex-col md:flex-row lg:justify-between mt-6 md:mt-24">
          <div
            id="datos1"
            className="w-full md:w-1/2 text-white text-lg tracking-wider 2xl:text-3xl font-mono"
          >
            <h3 className="about font-black text-[#a87dcc] text-3xl text-center md:text-start 2xl:text-5xl">
              Datos personales
            </h3>
            <h4 className="mt-4 text-white">
              <span className="font-bold text-[#a87dcc]">Cumpleaños: </span>
              20/02/2000
            </h4>
            <h4>
              <span className="font-bold text-[#a87dcc]">Telefono: </span>
              1136747801
            </h4>
            <h4>
              <span className="font-bold text-[#a87dcc]">Correo: </span>
              facundoaylan3@gmail.com
            </h4>
          </div>

          <div id="datos2" className="w-full md:w-1/2 h-1/4">
            <h3 className="about text-center font-black text-3xl text-[#a87dcc] 2xl:text-5xl">
              Intereses
            </h3>
            <div className="flex w-full flex-wrap justify-center h-full gap-8 mt-4">
              <InterestCard name="Portátil" icon={<FaLaptop size={30} />} />
              <InterestCard
                name="Electrónica"
                icon={<FaMicrochip size={30} />}
              />
              <InterestCard name="Gamer" icon={<FaGamepad size={30} />} />
              <InterestCard name="Música" icon={<FaMusic size={30} />} />
              <InterestCard name="Películas" icon={<FaFilm size={30} />} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
