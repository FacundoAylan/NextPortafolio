"use client";
import { useState } from "react";
import { slides } from "./data";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [index, setIndex] = useState(0);
  const [showModal, SetShowModal] = useState(false);
  const handleCloseModal = () => {
    SetShowModal(false);
  };
  const handleOpenModal = () => {
    SetShowModal(true);
  };

  return (
    <div className="w-full h-[98%] flex flex-col md:flex-row overflow-hidden bg-white/5 backdrop-blur-lg">
      {/* Descripción */}
      <div className="md:w-[60%] w-full px-6 py-2 flex flex-col gap-2 justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-2"
          >
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#a87dcc] flex">
              {slides[index].title} ({slides[index].subtitle})
            </h1>

            <div className="flex flex-wrap gap-3">
              {slides[index].icons.map((icon, i) => (
                <span
                  key={i}
                  className="bg-[#1a1a1a] text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2 border border-[#a87dcc]"
                >
                  <img src={icon.icon} alt={icon.name} className="w-5 h-5" />
                  {icon.name}
                </span>
              ))}
            </div>

            <div className="flex-grow max-h-[250px] w-[85%] border border-[#a87dcc] rounded-xl px-2 py-2 bg-gradient-to-br from-[#1a1a1a] to-[#2e2e2e] shadow-lg backdrop-blur-sm transition-all duration-300 overflow-y-scroll">
              {slides[index].description.split("\n").map((line, i) => (
                <p
                  key={i}
                  className="text-gray-300 text-sm leading-relaxed mb-2"
                >
                  {line}
                </p>
              ))}
            </div>

            <button
              className="self-start mt-4 bg-[#a87dcc] hover:bg-[#925fb6] text-white font-bold py-2 px-5 rounded transition duration-300"
              onClick={handleOpenModal}
            >
              Ver Proyecto
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Imagen */}
      <div className="imageProfile md:w-[35%] w-full h-64 md:h-auto flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            src="/image/profile.png"
            alt={slides[index].title}
            className="w-full h-full object-cover rounded-lg"
          />
        </AnimatePresence>
      </div>

      {/* Paginación */}
      <div className="fixed bottom-1 left-1/2 transform -translate-x-1/2 z-50 flex justify-center items-center gap-8 bg-[#181818] px-6 py-3 rounded-full shadow-md border border-[#a87dcc] backdrop-blur-sm">
        <button
          onClick={() =>
            setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
          }
          className="text-[#a87dcc] hover:text-white transition-colors duration-300 text-2xl"
          aria-label="Anterior"
        >
          <HiChevronLeft />
        </button>

        <span className="text-sm font-mono text-white">
          {index + 1} <span className="text-gray-400">de</span> {slides.length}
        </span>

        <button
          onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
          className="text-[#a87dcc] hover:text-white transition-colors duration-300 text-2xl"
          aria-label="Siguiente"
        >
          <HiChevronRight />
        </button>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
          <div className="relative w-[90%] max-w-3xl bg-[#1a1a1a] rounded-lg p-4 shadow-lg border border-[#a87dcc] flex flex-col items-center">
            <iframe
              src={slides[index].video}
              width="100%"
              height="360"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="rounded-md"
              title="Vimeo Video"
            />
            <button
              className="absolute top-2 right-2 bg-[#a87dcc] hover:bg-[#925fb6] text-white font-bold py-1 px-3 rounded transition duration-300"
              onClick={handleCloseModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
