"use client";
import InterestCard from "./components/InterestCard";
import "./styles.css";
import {
    FaMicrochip,
    FaGamepad,
    FaMusic,
    FaFilm,
} from "react-icons/fa";


const About = ()=> {
    return (
        <div 
        className="w-full h-full 
        flex flex-col justify-center
        overflow-y-auto md:overflow-hidden pb-1 px-4"
        >
            <h1
                id="title"
                className="about w-full h-1/5 
                flex items-center justify-center
                text-center 
                text-3xl md:text-6xl xl:text-7xl 
                text-[#a87dcc] font-black "
            >
                Sobre mi
            </h1>
            <div className="w-full h-4/5 flex flex-col gap-2 md:gap-4">
                <p
                    id="text"
                    className="h-auto md:h-1/5 
                    text-white text-base md:text-xl font-bold font-orbitron 
                    md:tracking-wider 2xl:text-3xl"
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
                <div 
                className="w-full 
                flex flex-col lg:flex-row lg:justify-between 
                mt-6 md:mt-24 px-4"
                >
                    {/* Personal information */}
                    <div
                        id="datos1"
                        className="w-full md:w-1/2  
                        hidden md:block text-white 
                        text-lg tracking-wider font-mono mb-6 lg:mb-0"
                    >
                        <h3 className="about font-black text-[#a87dcc] 
                        text-3xl 2xl:text-5xl text-center md:text-start">
                            Datos personales
                        </h3>
                        <h4 className="mt-4 text-white">
                            <span className="font-orbitron text-[#a87dcc]">Cumpleaños: </span>
                            20/02/2000
                        </h4>
                        <h4>
                            <span className="font-orbitron text-[#a87dcc]">Teléfono: </span>
                            1136747801
                        </h4>
                        <h4>
                            <span className="font-orbitron text-[#a87dcc]">Correo: </span>
                            facundoaylan3@gmail.com
                        </h4>
                    </div>

                    {/* Interests */}
                    <div id="datos2" className="hidden md:block md:w-1/2">
                        <h3 
                        className="about text-center font-black 
                        text-3xl text-[#a87dcc] 2xl:text-5xl"
                        >
                            Intereses
                        </h3>
                        <div className="flex flex-wrap justify-center gap-4 mt-4">
                            <InterestCard name="Electrónica" icon={<FaMicrochip size={30} />}/>
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

export default About;
