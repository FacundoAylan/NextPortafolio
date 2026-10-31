import { useEffect, useState } from "react";
import { 
  AboutSection, 
  CertificatesSection, 
  HomeSection, 
  ProjectsSection, 
  SkillsSection 
} from "./pages";
import { NavBar } from "./shared";

function App() {
  const [face, setFace] = useState(0);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "certificates"];
    const targetId = sections[face];
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [face]);

  return (
    <div className="w-full h-full min-h-screen bg-slate-950/90 overflow-x-hidden">
      <NavBar setFace={setFace} />
      <div className="bg-[url(/image/background.webp)] w-full flex flex-col flex-1 pt-16">
        <div id="home" className="scroll-mt-20"><HomeSection /></div>
        <div id="about" className="scroll-mt-20"><AboutSection /></div>
        <div id="skills" className="scroll-mt-20"><SkillsSection /></div>
        <div id="projects" className="scroll-mt-20"><ProjectsSection /></div>
        <div id="certificates" className="scroll-mt-20"><CertificatesSection /></div>
      </div>
    </div>
  );
}

export default App;