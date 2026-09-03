import { useState } from "react";
import type { JSX } from "react";
import {
  HomeSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  CertificatesSection,
} from "./pages";
import { NavBar } from "./shared";

interface Cara {
  id: number;
  content: JSX.Element;
}

function App() {
  const [face, setFace] = useState<number>(0);
  const [prevFace, setPrevFace] = useState<number | null>(null);

  const caras: Cara[] = [
    { id: 0, content: <HomeSection /> },
    { id: 1, content: <AboutSection /> },
    { id: 2, content: <SkillsSection /> },
    { id: 3, content: <ProjectsSection /> },
    { id: 4, content: <CertificatesSection /> },
  ];

  const handleSetFace = (newFace: number): void => {
    if (newFace !== face) {
      setPrevFace(face);
      setFace(newFace);
    }
  };

  return (
    <main
      className="bg-[url(/image/background.webp)] w-full h-screen flex flex-col overflow-hidden text-white relative bg-cover bg-center bg-no-repeat bg-fixed"
    >
      {/* Header Fijo */}
      <header className="w-full h-16 shrink-0 z-50 relative">
        <NavBar setFace={handleSetFace} />
      </header>

      {/* Contenedor flexible de pantallas */}
      <div className="relative flex-1 w-full overflow-hidden z-10">
        {caras.map((cara, index) => {
          const isActive = index === face;
          const isPrevious = index === prevFace;

          return (
            <div
              key={cara.id}
              className={`bg-slate-950/60 absolute inset-0 w-full h-full flex flex-col items-center justify-start md:justify-center overflow-y-auto transition-all duration-500 ease-in-out ${
                isActive
                  ? "scale-100 opacity-100 z-40 pointer-events-auto"
                  : isPrevious
                    ? "scale-90 opacity-0 z-10 pointer-events-none"
                    : "scale-90 opacity-0 z-0 pointer-events-none"
              }`}
            >
              <div className="w-full min-h-full flex items-center justify-center">
                {cara.content}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default App;
