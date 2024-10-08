'use client'
import { useEffect } from 'react';
import { scriptAnimation } from '@/app/script';
import './styles.css';

export default function About(){

  // useEffect(()=>{
  //   const animation = async()=>{
  //     await scriptAnimation('title','traslateTitle 1s linear')
  //     await scriptAnimation('text', 'traslateText 1s linear')
  //     await scriptAnimation('datos1', 'traslateDatos1 1s linear')
  //     await scriptAnimation('datos2', 'traslateDatos2 1s linear')
  //   }
  //   animation()
  // },[]);

  return(
    <div className="w-full h-full flex  flex-col overflow-hidden pb-1 px-4 justify-center">
      <h1 id='title' className=" about w-full h-1/5 text-center text-6xl text-[#a87dcc] font-black xl:text-7xl flex items-center justify-center">Sobre mi</h1>
      <div className='w-full h-4/5 flex flex-col gap-4'>
        <p id='text' className="h-1/5  text-white text-base md:text-xl font-bold md:tracking-wider 2xl:text-3xl">¡Hola! Soy <span className="font-bold text-[#a87dcc]">Facundo</span>, estudiante de <span className="font-bold text-[#a87dcc]">Analista en Sistemas en la UBA y Full Stack Developer</span>. Me apasiona el diseño web y me encanta aprender nuevas tecnologías. Además, tengo un gran interés en la electrónica y la reparación de computadoras. Estoy emocionado por seguir creciendo profesionalmente y encontrar nuevas formas de fusionar mi pasión por el diseño y la tecnología. ¡Gracias por visitar mi portafolio! Siempre estoy abierto a nuevas oportunidades y colaboraciones, así que no dudes en ponerte en contacto conmigo.</p>
        <div className="w-full flex flex-col md:flex-row lg:justify-between mt-6 md:mt-24">
          <div id='datos1' className="w-full md:w-1/2 text-white text-lg tracking-wider 2xl:text-3xl">
            <h3 className="about font-black text-[#a87dcc] text-3xl text-center md:text-start 2xl:text-5xl">Datos personales</h3>
            <h4 className="mt-4 text-white"><span className="font-bold text-[#a87dcc]">Cumpleaños: </span>20/02/2000</h4>
            <h4><span className="font-bold text-[#a87dcc]">Telefono: </span>1136747801</h4>
            <h4><span className="font-bold text-[#a87dcc]">Correo: </span>facundoaylan3@gmail.com</h4>
          </div>
          <div id='datos2' className="w-full md:w-1/2 h-1/4">
            <h3 className=" about text-center font-black text-3xl text-[#a87dcc] 2xl:text-5xl">Intereses</h3>
            <div className="flex w-full flex-wrap justify-center h-full gap-8 mt-4 ">
              <img 
                src='https://firebasestorage.googleapis.com/v0/b/portafolio-fac1a.appspot.com/o/portatil.png?alt=media&token=f1f10402-b469-4ebb-a97b-2a596aa6003f'
                className="w-20 h-20 border-2 border-white p-1 rounded-xl bg-[#a87dcc]"
              />
              <img 
                src='https://firebasestorage.googleapis.com/v0/b/portafolio-fac1a.appspot.com/o/electronica.png?alt=media&token=21eab295-aace-417c-8776-88b76868dcdb'
                className="w-20 h-20 border-2 border-white p-1 rounded-xl bg-[#a87dcc]"
              />
              <img 
                src='https://firebasestorage.googleapis.com/v0/b/portafolio-fac1a.appspot.com/o/gamer.png?alt=media&token=d9f90823-8e99-42c8-8570-9f96b9df6a64'
                className="w-20 h-20 border-2 border-white p-1 rounded-xl bg-[#a87dcc]"
              />
              <img 
                src='/image/musical.png'
                className="w-20 h-20 border-2 border-white p-1 rounded-xl bg-[#a87dcc]"
              />
              <img 
                src='https://firebasestorage.googleapis.com/v0/b/portafolio-fac1a.appspot.com/o/peliculas.png?alt=media&token=2ce098ac-8b75-4afb-a009-7c538cd202c8'
                className="w-20 h-20 border-2 border-white p-1 rounded-xl bg-[#a87dcc]"
              />
              <img 
                src='https://firebasestorage.googleapis.com/v0/b/portafolio-fac1a.appspot.com/o/codigo.png?alt=media&token=42e71aa0-31e2-4ae9-822e-38bee6b22c81'
                className="w-20 h-20 border-2 border-white p-1 rounded-xl bg-[#a87dcc]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}