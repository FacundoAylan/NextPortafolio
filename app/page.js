"use client";
import NavBar from "@/app/PagePublic/01-NavBar/NavBar";
import HomeCard from "@/app/PagePublic/02-Home/Home";
import About from "@/app/PagePublic/03-About/About";
import Skill from "@/app/PagePublic/04-Skills/Skills";
import Proyect from "@/app/PagePublic/05-Projects";
import Titles from "@/app/PagePublic/06-Title";
import { useState } from "react";
import "./globals.css";

export default function Home() {
  const [face, setFace] = useState(0);
  const [prevFace, setPrevFace] = useState(null);

  const caras = [
    { id: 0, content: <HomeCard /> },
    { id: 1, content: <About /> },
    { id: 2, content: <Skill /> },
    { id: 3, content: <Proyect /> },
    { id: 3, content: <Titles /> },
  ];

  const handleSetFace = (newFace) => {
    if (newFace !== face) {
      setPrevFace(face);
      setFace(newFace);
    }
  };

  return (
    <main className="w-full h-screen">

      <header className="w-full h-16 fixed z-[100]">
        <NavBar setFace={handleSetFace} />
      </header>
      {caras.map((cara, index) => {
        const isActive = index === face;
        const isPrevious = index === prevFace;

        return (
          <div
            key={index}
            className={`absolute top-16 left-0 w-full h-[calc(100vh-64px)] flex items-center justify-center transition-all duration-600 ease-in-out ${
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
    </main>
  );
}
