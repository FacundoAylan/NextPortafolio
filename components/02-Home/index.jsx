'use client'
import { useEffect } from 'react';
import Link from "next/link";
import './styles.css';
import { scriptAnimation } from '@/app/script';
import { FaGithub, FaLinkedin, FaFilePdf, FaEnvelope } from 'react-icons/fa';

const LinkCard = ({ href, icon, text, download = false }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    download={download}
    className="relative w-full h-full flex flex-col items-center justify-center p-2 rounded-xl border-2 border-[#a87dcc] text-white transition-all duration-500 ease-out hover:scale-110 hover:bg-gradient-to-br hover:from-[#2c1b47] hover:to-[#a87dcc] hover:shadow-[0_0_20px_6px_rgba(168,125,204,0.6)]"
  >
    {/* Fondo animado decorativo */}
    <div className="absolute inset-0 rounded-xl -z-10 bg-gradient-to-br from-[#1a1a1a] to-[#2e2e2e]" />

    {/* Ícono */}
    <div className="text-3xl drop-shadow-md mb-1">{icon}</div>

    {/* Texto */}
    <p className="font-bold text-xs md:text-sm text-[#a87dcc] group-hover:text-white font-orbitron tracking-wide text-center">
      {text}
    </p>
  </Link>
);


export default function HomeCard() {
  const email = 'facundoaylan3@gmail.com';
  const subject = 'vi tu portafilio y me gustaria comunicarme contigo';
  const body = 'Hola, Facundo';

  const mailtoLink = `https://mail.google.com/mail/?view=cm&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  useEffect(() => {
    const animation = async () => {
      await scriptAnimation('section1', 'animation 1s forwards');
      await scriptAnimation('section2', 'animation2 1s forwards');
    }
    animation()
  }, []);

  return (
    <div className="home w-full h-full flex flex-col gap-4 sm:flex-row sm:justify-between sm:gap-0 overflow-hidden">
      <div className='imageProfile w-screen sm:w-1/3 sm:h-full sm:flex'>
        <img
        style={{
          maskImage: 'linear-gradient(black 80%, transparent)',
        }}
          src={'/image/profile.png'}
          alt="profile"
        />
      </div>
      <div id="section2" className="relative w-screen min-h-screen sm:w-2/3 flex flex-col items-center justify-center px-4 sm:px-0">
        <h1 className="border-neon text-3xl sm:text-4xl lg:text-6xl font-black uppercase text-center text-white/90">
          Full Stack Developer
        </h1>
        <h3 className="text-lg sm:text-2xl xl:text-3xl font-semibold mt-4 text-center text-[#a87dcc]">
          Experiencia en React y Node.js
        </h3>
        <h3 className="text-lg sm:text-2xl xl:text-3xl font-semibold text-center text-[#a87dcc] mb-8">
          Buenos Aires (CABA)
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 w-full max-w-md text-[#a87dcc] font-mono gap-4">
          <LinkCard
            href="https://github.com/FacundoAylan"
            icon={<FaGithub size={40} color="#fff" />}
            text="GitHub"
          />
          <LinkCard
            href="https://www.linkedin.com/in/facundo-aylan-582b52257/"
            icon={<FaLinkedin size={40} color="#0A66C2" />}
            text="LinkedIn"
          />
          <LinkCard
            href="/FacundoAylan.pdf"
            icon={<FaFilePdf size={40} color="#FF0000" />}
            text="CV"
            download
          />
          <LinkCard
            href={mailtoLink}
            icon={<FaEnvelope size={40} color="#EA4335" />}
            text="Email"
          />
        </div>
      </div>
    </div>
  )
}