"use client";
import { useState } from "react";
import "./styles.css";

export default function NavBar({ scrollSection }) {
  
  const [openMenu, setOpenMenu] = useState(false);
  const [selectButton, setSelectButton] = useState('home');

  const handleClick = (selectId)=>{
    scrollSection(selectId);
    setTimeout(()=>{
      setSelectButton(selectId);
    },0);
  }

  return (
    <div className="w-full h-full title flex justify-between  px-2 lg:px-6 items-center">
      <h1 className=" nameTitle text-2xl md:text-3xl lg:text-4xl font-black text-[#a87dcc] tracking-widest">
        Facundo Aylan
      </h1>
      <li className="hidden md:flex font-bold">
        <ul className="relative h-10 w-auto">
          <button
            className={`${selectButton === 'home'? 'fondo normal-case':''} uppercase px-2 flex items-center justify-center text-white h-full w-full`}
            onClick={()=>handleClick("home")}
          >
            {
              selectButton === 'home'?(
                <img 
                  src={'/navBar/home.png'}
                  width="20" 
                  height="18" 
                  style={{ marginRight: '0.2rem' }}
                />
              ):('')
            }
            Inicio
          </button>
        </ul>
        <ul className="relative h-10 w-auto">
          <button
            className={`${selectButton ==='about'? 'fondo normal-case':''} uppercase px-2 flex justify-center items-center text-white h-full w-full`}
            onClick={()=>handleClick("about")}
          >
            {
              selectButton === 'about'?(
                <img 
                  src={'/navBar/about.png'}
                  width="20" 
                  height="18" 
                  style={{ marginRight: '0.2rem' }}
                />
                
              ):('')
            }
            sobre mi
          </button>
        </ul>
        <ul className="relative h-10 w-auto">
          <button
            className={`${selectButton === 'skills'?'fondo normal-case':''} uppercase px-2 flex justify-center items-center text-white h-full w-full`}
            onClick={() => handleClick("skills")}
          >
            {
              selectButton === 'skills'?(
                <img 
                  src={'/navBar/skills.png'}
                  width="20" 
                  height="18" 
                  style={{ marginRight: '0.2rem' }}
                />
              ):('')
            }
            Skills
          </button>
        </ul>
        <ul className="relative h-10 w-auto">
          <button
            className={`${selectButton === 'projects'? 'fondo normal-case':''} uppercase px-2 flex jsutify-center items-center text-white h-full w-full`}
            onClick={() => handleClick("projects")}
          >
            {
              selectButton === 'projects'?(
                <img 
                  src={'/navBar/proyectos.png'}
                  width="20" 
                  height="18" 
                  style={{ marginRight: '0.2rem' }}
                />
                
              ):('')
            }
            Proyectos
          </button>
        </ul>
        <ul className="relative h-10 w-auto">
          <button
            className={`${selectButton ==='certificados'? 'fondo normal-case':''} uppercase px-2 flex jsutify-center items-center  text-white h-full w-full`}
            onClick={() => handleClick("certificados")}
          >
            {
              selectButton === 'certificados'?(
                <img 
                  src={'/navBar/certificados.png'}
                  width="20" 
                  height="18" 
                  style={{ marginRight: '0.2rem' }}
                />
                
              ):('')
            }
            Certificados
          </button>
        </ul>
      </li>
      <button className="md:hidden" onClick={() => setOpenMenu(!openMenu)}>
        <img width={50} height={50} src={"/image/hamburguesa.png"} />
      </button>
      {openMenu && (
        <div className="w-[96%] h-auto fixed z-10  mt-96 overflow-hidden">
          <li className="w-full h-full font-bold list-none">
            <ul className="h-16 w-full bg-[#a87dcc]">
              <button
                className="h-full w-full bg-[#a87dcc] border-2 border-black  hover:translate-x-[-4px] hover:translate-y-[-4px]"
                onClick={() => scrollSection("home")}
              >
                Inicio
              </button>
            </ul>
            <ul className="h-16 w-full bg-[#a87dcc]">
              <button
                className="h-full w-full bg-[#a87dcc] border-2 border-black  hover:translate-x-[-4px] hover:translate-y-[-4px]"
                onClick={() => scrollSection("about")}
              >
                sobre mi
              </button>
            </ul>
            <ul className="h-16 w-full bg-[#a87dcc]">
              <button
                className="h-full w-full bg-[#a87dcc] border-2 border-black  hover:translate-x-[-4px] hover:translate-y-[-4px]"
                onClick={() => scrollSection("skills")}
              >
                Skills
              </button>
            </ul>
            <ul className="h-16 w-full bg-[#a87dcc]">
              <button
                className="h-full w-full bg-[#a87dcc] border-2 border-black  hover:translate-x-[-4px] hover:translate-y-[-4px]"
                onClick={() => scrollSection("projects")}
              >
                Proyectos
              </button>
            </ul>
            <ul className="h-16 w-full bg-[#a87dcc]">
              <button
                className="h-full w-full bg-[#a87dcc] border-2 border-black p-1 hover:translate-x-[-5px] hover:translate-y-[-4px]"
                onClick={() => scrollSection("certificados")}
              >
                Certificados
              </button>
            </ul>
          </li>
        </div>
      )}
      <div className="w-full h-[3px] lg:h-[5px] bg-red-200 absolute bottom-0 left-0">
        <div className="progressbar absolute z-10 rounded"/>
      </div>

    </div>
  );
}
