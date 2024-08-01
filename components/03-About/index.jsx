'use client'
import { useEffect } from 'react';
import './styles.css';
import { animationScript } from './script';

export default function About(){

  useEffect(()=>{
    const animation = async()=>{
      await animationScript('title','traslateTitle 1s linear')
      await animationScript('text', 'traslateText 1s linear')
      await animationScript('datos1', 'traslateDatos1 1s linear')
      await animationScript('datos2', 'traslateDatos2 1s linear')
    }
    animation()
  },[]);

  return(
    <div className="w-full h-full flex  flex-col overflow-hidden pb-1 px-4">
      <h1 id='title' className="w-screen text-center text-6xl text-[#a87dcc] font-black">Sobre mi</h1>
      <p id='text' className="mt-4 lg:mt-8 text-white text-base md:text-xl font-bold md:tracking-wider">¡Hola! Soy <span className="font-bold text-[#a87dcc]">Facundo</span>, estudiante de <span className="font-bold text-[#a87dcc]">Analista en Sistemas en la UBA y Full Stack Developer</span>. Me apasiona el diseño web y me encanta aprender nuevas tecnologías. Además, tengo un gran interés en la electrónica y la reparación de computadoras. Estoy emocionado por seguir creciendo profesionalmente y encontrar nuevas formas de fusionar mi pasión por el diseño y la tecnología. ¡Gracias por visitar mi portafolio! Siempre estoy abierto a nuevas oportunidades y colaboraciones, así que no dudes en ponerte en contacto conmigo.</p>
      <div className="w-full flex flex-col md:hidden lg:flex lg:flex-row lg:justify-between mt-6 lg:mt-12">
        <div id='datos1' className="w-full lg:w-1/2 text-white text-lg tracking-wider">
          <h3 className="font-black text-[#a87dcc] text-3xl text-center lg:text-start">Datos personales</h3>
          <h4 className="mt-4 text-white"><span className="font-bold text-[#a87dcc]">Cumpleaños: </span>20/02/2000</h4>
          <h4><span className="font-bold text-[#a87dcc]">Telefono: </span>1136747801</h4>
          <h4><span className="font-bold text-[#a87dcc]">Correo: </span>facundoaylan3@gmail.com</h4>
        </div>
        <div id='datos2' className="w-full md:w-1/2 h-1/4">
          <h3 className="text-center md:text-start font-black text-3xl text-[#a87dcc]">Intereses</h3>
          <div className="flex w-full flex-wrap justify-center h-full gap-8 mt-4 ">
            <img 
              src='/image/portatil.png'
              className="w-20 h-20 border-2 border-white p-1 rounded-xl bg-[#a87dcc]"
            />
            <img 
              src='/image/electronica.png'
              className="w-20 h-20 border-2 border-white p-1 rounded-xl bg-[#a87dcc]"
            />
            <img 
              src='/image/gamer.png'
              className="w-20 h-20 border-2 border-white p-1 rounded-xl bg-[#a87dcc]"
            />
            <img 
              src='/image/musical.png'
              className="w-20 h-20 border-2 border-white p-1 rounded-xl bg-[#a87dcc]"
            />
            <img 
              src='/image/peliculas.png'
              className="w-20 h-20 border-2 border-white p-1 rounded-xl bg-[#a87dcc]"
            />
            <img 
              src='/image/codigo.png'
              className="w-20 h-20 border-2 border-white p-1 rounded-xl bg-[#a87dcc]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}