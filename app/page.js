'use client';
import HomeCard from "@/components/02-Home";
import About from "@/components/03-About";
import Skill from "@/components/04-Skills";
import Proyect from "@/components/05-Projects";
import Titles from "@/components/06-Title";

export default function Home() {

  return (
    <main className="w-full min-h-screen">
      <section 
        id="home" 
        className="w-full h-[calc(100vh-64px)] mt-16 overflow-hidden"
      >
        <HomeCard/>
      </section>
      <section 
        id="about"
        className="w-full min-h-full md:h-[calc(100vh-64px)] mt-16"
      >
        <About/>
      </section>
      <section 
        id="skills"
        className="w-full min-h-full md:h-auto mt-16"
      >
        <Skill/>
      </section>
      <section 
        id="projects"
        className="w-full h-screen mt-16"
      >
        <Proyect/>
      </section>
      <section 
        id="certificados"
        className=" w-full h-screen pt-8 flex items-center justify-center"
      >
        <div className='containerImage w-10/12 px-4 md:px-0 md:w-1/2 md:h-3/5'>
          <Titles />
        </div>
      </section>
      <footer className="w-full fixed bottom-2">
      </footer>
    </main>
  );
}
