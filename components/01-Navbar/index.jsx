"use client";
import { useState, useEffect } from "react";
import "./styles.css";

export default function NavBar({ scrollSection }) {
  
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = (selectId) => {
    scrollSection(selectId);
  };



  return (
    <div className="w-full h-full title flex justify-between px-2 lg:px-6 items-center">
      <h1 className="nameTitle text-2xl md:text-3xl lg:text-4xl font-black text-[#a87dcc] tracking-widest">
        Facundo Aylan
      </h1>
      <li className="hidden md:flex font-bold font-mono">
        <ul className="relative h-10 w-auto">
          <button
            className={` uppercase px-2 flex items-center justify-center text-white h-full w-full`}
            onClick={() => handleClick("home")}
          >
            Inicio
          </button>
        </ul>
        <ul className="relative h-10 w-auto">
          <button
            className={` uppercase px-2 flex justify-center items-center text-white h-full w-full`}
            onClick={() => handleClick("about")}
          >
            sobre mi
          </button>
        </ul>
        <ul className="relative h-10 w-auto">
          <button
            className={` uppercase px-2 flex justify-center items-center text-white h-full w-full`}
            onClick={() => handleClick("skills")}
          >
            Skills
          </button>
        </ul>
        <ul className="relative h-10 w-auto">
          <button
            className={` uppercase px-2 flex justify-center items-center text-white h-full w-full`}
            onClick={() => handleClick("projects")}
          >
            Proyectos
          </button>
        </ul>
        <ul className="relative h-10 w-auto">
          <button
            className={` uppercase px-2 flex justify-center items-center text-white h-full w-full`}
            onClick={() => handleClick("certificados")}
          >
            Certificados
          </button>
        </ul>
      </li>
      <button className="md:hidden" onClick={() => setOpenMenu(!openMenu)}>
        <img width={50} height={50} src={"/image/hamburguesa.png"} />
      </button>
      {openMenu && (
        <div className="w-[96%] h-auto fixed z-10 mt-96 overflow-hidden">
          <li className="w-full h-full font-bold list-none">
            <ul className="h-16 w-full bg-[#a87dcc]">
              <button
                className="h-full w-full bg-[#a87dcc] border-2 border-black hover:translate-x-[-4px] hover:translate-y-[-4px]"
                onClick={() => handleClick("home")}
              >
                Inicio
              </button>
            </ul>
            <ul className="h-16 w-full bg-[#a87dcc]">
              <button
                className="h-full w-full bg-[#a87dcc] border-2 border-black hover:translate-x-[-4px] hover:translate-y-[-4px]"
                onClick={() => handleClick("about")}
              >
                sobre mi
              </button>
            </ul>
            <ul className="h-16 w-full bg-[#a87dcc]">
              <button
                className="h-full w-full bg-[#a87dcc] border-2 border-black hover:translate-x-[-4px] hover:translate-y-[-4px]"
                onClick={() => handleClick("skills")}
              >
                Skills
              </button>
            </ul>
            <ul className="h-16 w-full bg-[#a87dcc]">
              <button
                className="h-full w-full bg-[#a87dcc] border-2 border-black hover:translate-x-[-4px] hover:translate-y-[-4px]"
                onClick={() => handleClick("projects")}
              >
                Proyectos
              </button>
            </ul>
            <ul className="h-16 w-full bg-[#a87dcc]">
              <button
                className="h-full w-full bg-[#a87dcc] border-2 border-black p-1 hover:translate-x-[-5px] hover:translate-y-[-4px]"
                onClick={() => handleClick("certificados")}
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
