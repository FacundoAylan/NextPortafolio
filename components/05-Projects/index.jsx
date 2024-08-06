'use client'
import { useState } from "react";
import CardProjects from "./cardProyects";
import { slides } from "./data";

export default function Proyect(){

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };
  
  return(
    <div className="w-full h-full">
      <h1 className="w-screen h-1/5 text-center text-6xl text-[#a87dcc] font-black">Proyectos</h1>
      <div className="w-full h-4/5 hidden md:flex gap-8 px-6 flex-wrap items-center justify-center">
        {slides.map((slide, index) => {
          return (
              <CardProjects
                key={index}
                image={slide.image}
                title={slide.title}
                subtitle={slide.subtitle}
                content={slide.content}
                right={slide.rightSubtitle}
                video={slide.video}
                github={slide.github}
              />
              );
        })}
      </div>

      <div className="w-full h-4/5 flex gap-2 items-center relative md:hidden mt-4">
        <button onClick={prevSlide} className="absolute z-10 text-white left-2 top-1/4">Anterior</button>
        <div className="w-full h-full absolute flex justify-center">
          {slides.slice(currentIndex, currentIndex + 1).map((slide, index) => (
            <CardProjects
              key={index}
              image={slide.image}
              title={slide.title}
              subtitle={slide.subtitle}
              content={slide.content}
              right={slide.rightSubtitle}
              video={slide.video}
              github={slide.github}
            />
          ))}
        </div>
        <button onClick={nextSlide} className="absolute z-10 text-white right-2 top-1/4">Siguiente</button>
      </div>
    </div>
  )
}