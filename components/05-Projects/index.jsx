'use client'
import CardProjects from "./cardProyects";
import { slides } from "./data";

export default function Proyect(){
  
  return(
    <div className="w-full h-full">
      <h1 className="w-screen h-1/5 text-center text-6xl text-[#a87dcc] font-black">Proyectos</h1>
      <div className="w-full h-4/5 flex gap-8 px-6 flex-wrap items-center justify-center">
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
    </div>
  )
}