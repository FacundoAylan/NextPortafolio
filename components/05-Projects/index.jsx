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
      <h1 className="w-full h-1/5 text-center text-6xl text-[#a87dcc] font-black">Proyectos</h1>
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
        <button onClick={prevSlide} className="absolute z-10 text-white left-6 top-1/4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
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
        <button onClick={nextSlide} className="absolute z-10 text-white right-6 top-1/4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}