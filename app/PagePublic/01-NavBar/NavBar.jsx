"use client";
import { useState } from "react";
import "./styles.css";

const MENU = ["Inicio", "Sobre mí", "Skills", "Proyectos", "certificados"];

const NavBar = ({ setFace }) => {

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div 
            className="title 
            w-full h-full 
            flex justify-between items-center 
            lg:px-6
            border-b-2 border-[#a87dcc]"
        >
            <h1 
                className="nameTitle 
                text-2xl md:text-3xl lg:text-4xl font-black text-[#a87dcc] tracking-widest"
            >
                Facundo Aylan
            </h1>
            {/*Desktop */}
            <li className="hidden md:flex font-bold font-orbitron">
                {MENU.map((item, index) => (
                    <ul
                        className="relative h-10 w-auto"
                        key={index}
                    >
                        <button
                            className="
                            h-full w-full
                            px-2 
                            flex items-center justify-center 
                            text-[#a87dcc] uppercase
                            duration-300 ease-in-out
                            hover:text-white/90 hover:underline hover:scale-105"
                            onClick={() => setFace(index)}
                        >
                            {item}
                        </button>
                    </ul>
                ))}

            </li>

            {/*Mobile */}
            <button className="md:hidden" onClick={() => setOpenMenu(!openMenu)}>
                <img width={50} height={50} src={"/image/hamburguesa.webp"} alt="menu" />
            </button>
            {openMenu && (
                <div 
                className="fixed top-16 z-50 
                w-full h-screen 
                backdrop-blur-lg bg-black/90 
                overflow-hidden duration-300 ease-in-out"
                >
                    <ul className="w-full md:hidden flex flex-col gap-1 py-2">
                        {MENU.map((item, index) => (
                            <li key={index} className="relative h-10 w-full">
                                <button
                                    className="bg-[#1a1a1a] 
                                    px-4 py-2 
                                    w-full 
                                    text-left text-[#a87dcc] font-semibold uppercase"
                                    onClick={() => {
                                        setFace(index);
                                        setOpenMenu(false);
                                    }}
                                >
                                    {item}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default NavBar;