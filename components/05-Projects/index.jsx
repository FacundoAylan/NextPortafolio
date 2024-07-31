'use client'
import CardProjects from "./cardProyects";
import { slides } from "./data";

export default function Proyect(){
  
  return(
    <div className="w-full h-full flex gap-4 px-6 items-center">
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
  )
}