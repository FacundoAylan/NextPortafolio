import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

interface NavBarProps {
  setFace: (newFace: number) => void;
}

const MENU: readonly string[] = [
  "Inicio",
  "Sobre mí",
  "Skills",
  "Proyectos",
  "Certificados",
];

export const NavBar = ({ setFace }: NavBarProps) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <header className="w-full h-16 md:h-18 flex justify-between items-center px-4 md:px-8 bg-slate-950/40 backdrop-blur-md border-b border-[#a87dcc]/30 fixed top-0 left-0 z-50">
      {/* Título / Nombre */}
      <h1
        className="text-xl md:text-3xl font-black font-orbitron text-[#a87dcc] tracking-widest hover:opacity-90 transition-opacity cursor-pointer"
        onClick={() => setFace(0)}
      >
        Facundo Aylan
      </h1>

      {/* Navegación Desktop */}
      <nav className="hidden md:flex">
        <ul className="flex items-center gap-2 font-bold font-orbitron">
          {MENU.map((item, index) => (
            <li key={item} className="relative">
              <button
                type="button"
                className="px-3 py-1.5 text-sm md:text-base text-[#a87dcc] uppercase tracking-wider transition-all duration-300 hover:text-white cursor-pointer hover:scale-105 rounded-lg hover:bg-white/5"
                onClick={() => setFace(index)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Botón Menú Mobile */}
      <button
        type="button"
        className="md:hidden p-2 text-[#a87dcc] hover:text-white bg-slate-900/60 border border-white/10 rounded-xl backdrop-blur-md transition-colors"
        onClick={() => setOpenMenu(!openMenu)}
        aria-label="Toggle Menu"
      >
        {openMenu ? (
          <HiX className="text-2xl" />
        ) : (
          <HiMenu className="text-2xl" />
        )}
      </button>

      {/* Menú Desplegable Mobile */}
      {openMenu && (
        <div className="fixed top-16 left-0 right-0 z-50 w-full h-auto bg-slate-950/95 backdrop-blur-xl border-b border-[#a87dcc]/30 flex flex-col p-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-300 md:hidden shadow-2xl">
          <ul className="flex flex-col gap-3 w-full">
            {MENU.map((item, index) => (
              <li key={item} className="w-full">
                <button
                  type="button"
                  className="w-full py-3 px-4 rounded-xl bg-slate-900/50 border border-white/10 text-left text-[#a87dcc] hover:text-white font-semibold font-orbitron uppercase text-sm tracking-wider transition-all active:scale-95"
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
    </header>
  );
};

export default NavBar;
