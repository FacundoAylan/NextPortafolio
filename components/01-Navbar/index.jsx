"use client";
import { useState, useEffect } from "react";
import "./styles.css";

export default function NavBar({ setFace }) {
  
  const [openMenu, setOpenMenu] = useState(false);
  const menu = ['Inicio', 'Sobre mí' ,'Skills','Proyectos', 'certificados'];

  return (
    <div className="w-full h-full title flex justify-between px-2 lg:px-6 items-center">
      <h1 className="nameTitle text-2xl md:text-3xl lg:text-4xl font-black text-[#a87dcc] tracking-widest">
        Facundo Aylan
      </h1>
      <li className="hidden md:flex font-bold font-orbitron">
      {menu.map((item, index) => (
        <ul 
          className="relative h-10 w-auto"
          key={index}
        >
          <button
            className={` uppercase px-2 flex items-center justify-center text-[#a87dcc] h-full w-full`}
            onClick={() =>setFace(index)}
          >
            {item}
          </button>
        </ul>
      ))}

      </li>
      <button className="md:hidden" onClick={() => setOpenMenu(!openMenu)}>
        <img width={50} height={50} src={"/image/hamburguesa.png"} alt="menu"/>
      </button>
      {openMenu && (
        <div className="fixed top-16 z-50 w-[96%] backdrop-blur-sm bg-white/10 shadow-lg rounded-md overflow-hidden">
          <ul className="w-full md:hidden flex flex-col gap-2 py-2">
            {menu.map((item, index) => (
              <li key={index} className="relative h-10 w-full">
                <button
                  className="bg-[#1a1a1a] uppercase px-4 py-2 w-full text-left text-[#a87dcc] font-semibold"
                  onClick={() => {
                    setFace(index);
                    setOpenMenu(false); // opcional: cerrar menú al clickear
                  }}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="w-full h-[3px] lg:h-[5px] bg-red-200 absolute bottom-0 left-0">
        <div className="progressbar absolute z-10 rounded"/>
      </div>
    </div>
  );
}
