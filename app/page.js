'use client';
import NavBar from "@/components/01-Navbar";
import HomeCard from "@/components/02-Home";
import Titles from "@/components/06-Title";
import '@/components/06-Title/styles.css';
import About from "@/components/03-About";
import Skill from "@/components/04-Skills";
import Proyect from "@/components/05-Projects";

export default function Home() {

  const scrollSection= (id)=>{

    const section = document.getElementById(id);

    if(section){
      section.scrollIntoView({behavior: 'smooth'});
    }
  }

  return (
    <main className="w-full relative">
      <header className="w-full h-22 md:h-16 fixed z-10">
        <NavBar scrollSection={scrollSection}/>
      </header>
      <section 
        id="home"
        className="w-full h-screen pt-16"
      >
        <HomeCard/>
      </section>
      <section 
        id="about"
        className="w-full h-screen pt-8 lg:pt-16"
      >
        <About/>
      </section>
      <section 
        id="skills"
        className="w-screen min-h-screen pt-8 lg:pt-20"
      >
        <Skill/>
      </section>
      <section 
        id="projects"
        className="w-full h-screen "
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
