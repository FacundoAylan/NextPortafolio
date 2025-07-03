'use client';
import NavBar from "@/components/01-Navbar";
import HomeCard from "@/components/02-Home";
import About from "@/components/03-About";
import Skill from "@/components/04-Skills";
import Proyect from "@/components/05-Projects";
import Titles from "@/components/06-Title";
import { useState } from "react";

export default function Home() {

  const [face, setFace] = useState(0);
  const [prevFace, setPrevFace] = useState(null);

  const caras = [
    { id: 0, content: <HomeCard /> },
    { id: 1, content: <About /> },
    { id: 2, content: <Skill /> },
    { id: 3, content: <Proyect /> },
    { id: 3, content: <Titles /> }
  ];

  const handleSetFace = (newFace) => {
    if (newFace !== face) {
      setPrevFace(face);
      setFace(newFace);
    }
  };

  return (
    <main className="w-full h-screen">
      <header className="w-full h-16">
        <NavBar setFace={handleSetFace}/>
      </header>
      <div className="relative w-full md:h-[calc(100vh-64px)]">
        {caras.map((cara, index) => {
          const isActive = index === face;
          const isPrevious = index === prevFace;

          return (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-all duration-600 ease-in-out ${
                isActive
                  ? "scale-100 opacity-100 z-40 clip-path-circle"
                  : isPrevious
                  ? "scale-0 opacity-0 z-30 clip-path-closed"
                  : "opacity-0 z-10"
              }`}
            >
              <div
                className={`w-full h-full flex items-center justify-center transition-transform duration-500 ease-in-out ${
                  isActive ? "scale-100" : "scale-0"
                }`}
              >
                {cara.content}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
