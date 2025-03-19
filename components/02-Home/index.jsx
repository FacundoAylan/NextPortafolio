'use client'
import { useEffect } from 'react';
import Link from "next/link";
import './styles.css';
import { scriptAnimation } from '@/app/script';
import { FaGithub, FaLinkedin, FaFilePdf, FaEnvelope } from 'react-icons/fa';

const LinkCard = ({ href, icon, text, download = false }) => (
  <Link
    href={href}
    target='_blank'
    rel="noopener noreferrer"
    className='w-full h-full hover:scale-110 flex flex-col justify-center items-center transition-transform duration-300 ml-0 p-1'
    download={download}
  >
    {icon}
    <p className="font-bold text-center mt-2 text-xs md:text-md">{text}</p>
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
    <div className="home w-full h-full flex flex-col gap-4 sm:flex-row sm:justify-between sm:gap-0">
      <div id='section1' className='w-screen sm:w-1/3 sm:h-full sm:flex'>
        <img
          src={'https://firebasestorage.googleapis.com/v0/b/portafolio-fac1a.appspot.com/o/profile.png?alt=media&token=45b6d63d-570b-40d7-b0c8-c5163fcdb070'}
        />
      </div>
      <div id='section2' className="relative w-screen sm:w-2/3 sm:h-screen flex flex-col items-center ">
        <h1 className="mt-[15%] text-xl sm:text-2xl lg:text-6xl 2xl:text-6xl font-black uppercase text-center text-[#a87dcc]">
          Full Stack developer
        </h1>
        <h3 className="text-xl sm:text-2xl xl:text-4xl font-bold mt-2 text-center text-white">Buenos Aires(CABA)</h3>
        <div className="absolute w-[52%] grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 text-[#a87dcc] bottom-20 font-mono">
          <LinkCard
            href='https://github.com/FacundoAylan'
            icon={<FaGithub size={50} color="#fff" />}
            text='Github'
          />
          <LinkCard
            href='https://www.linkedin.com/in/facundo-aylan-582b52257/'
            icon={<FaLinkedin size={50} color="#0A66C2" />}
            text='Linkedin'
          />
          <LinkCard
            href='/FacundoAylan.pdf'
            icon={<FaFilePdf size={50} color="#FF0000" />}
            text='CV'
            download
          />
          <LinkCard
            href={mailtoLink}
            icon={<FaEnvelope size={50} color="#EA4335" />}
            text='Email'
          />
        </div>
      </div>
    </div>
  )
}