'use client'
import { useEffect } from 'react';
import Link from "next/link";
import './styles.css';
import { scriptAnimation } from '@/app/script';

export default function HomeCard(){

  const email = 'facundoaylan3@gmail.com';
  const subject = 'vi tu portafilio y me gustaria comunicarme contigo';
  const body = 'Hola, Facundo';

  const mailtoLink = `https://mail.google.com/mail/?view=cm&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  useEffect(() => {
    const animation = async()=>{
      await scriptAnimation('section1', 'animation 1s forwards');
      await scriptAnimation('section2', 'animation2 1s forwards');
    }
    animation()
  }, []);



  return(
    <div 
      className="home w-full h-full flex flex-col gap-4 sm:flex-row sm:justify-between sm:gap-0"
    >
      <div id='section1' className='w-screen sm:w-1/2 sm:h-full sm:flex'>
        <img
          src={'https://firebasestorage.googleapis.com/v0/b/portafolio-fac1a.appspot.com/o/profile.png?alt=media&token=45b6d63d-570b-40d7-b0c8-c5163fcdb070'}
        />
      </div>
      <div id='section2' className="w-screen sm:w-1/2 sm:h-screen flex flex-col justify-center items-center ">
        <h1 
          className="homeTitle text-xl sm:text-2xl lg:text-5xl 2xl:text-6xl font-black tracking-widest uppercase text-center text-[#a87dcc]"
        >
          Full Stack developer
        </h1>
        <h3 className="text-xl sm:text-2xl xl:text-4xl font-bold mt-2 text-center text-white">Buenos Aires(CABA)</h3>
        <div className="w-full grid grid-cols-4 mt-4 text-[#a87dcc] px-2">
          <Link
            href='https://github.com/FacundoAylan'
            target='_blank'
            rel="noopener noreferrer"
            className='w-full h-full hover:scale-110 flex flex-col justify-center items-center transition-transform duration-300 px-2'
          >
            <img
              src='https://firebasestorage.googleapis.com/v0/b/portafolio-fac1a.appspot.com/o/github.png?alt=media&token=6df2ab81-c6b8-474d-9533-d7d5a37f0210'
              alt='Github'
              className='w-12 h-12 md:w-24 md:h-24 lg:w-20 lg:h-20 object-contain'
            />
            <p className="font-bold text-center mt-2 text-xs sm:text-sm md:text-base lg:text-lg">Github</p>
          </Link>
          <Link 
            href='https://www.linkedin.com/in/facundo-aylan-582b52257/'
            target='_blank'
            rel="noopener noreferrer"
            className='hover:scale-110 flex flex-col justify-center items-center'
          >
            <img
              src={'https://firebasestorage.googleapis.com/v0/b/portafolio-fac1a.appspot.com/o/linkedin.png?alt=media&token=a046f4dd-62aa-4023-ba11-fcd4e9b3e8e2'}
              className='w-12 h-12 md:w-24 md:h-24 lg:w-20 lg:h-20 object-contain'
              />
              <p className="font-bold text-center mt-2 text-xs sm:text-sm md:text-base lg:text-lg">Linkedin</p>
          </Link>
          <a 
            href='/FacundoAylan.pdf'
            download
            className='hover:scale-110 flex flex-col justify-center items-center'
          >
            <img
              src={'https://firebasestorage.googleapis.com/v0/b/portafolio-fac1a.appspot.com/o/cv.png?alt=media&token=3c46b61b-1216-4057-b4b6-35c1d848aa81'}
              className='w-12 h-12 md:w-24 md:h-24 lg:w-20 lg:h-20 object-contain'
            />
            <p className="font-bold text-center mt-2 text-xs sm:text-sm md:text-base lg:text-lg">CV</p>
          </a>
          <Link 
            href={mailtoLink}
            target='_blank'
            rel="noopener noreferrer"
            className='hover:scale-110 flex flex-col justify-center items-center'
          >
            <img
              src={'https://firebasestorage.googleapis.com/v0/b/portafolio-fac1a.appspot.com/o/email.png?alt=media&token=44e17eb5-6623-4331-a629-8d8147d77015'}
              className='w-12 h-12 md:w-24 md:h-24 lg:w-20 lg:h-20 object-contain'
            />
            <p className="font-bold text-center mt-2 text-xs sm:text-sm md:text-base lg:text-lg">Email</p>
          </Link>
        </div>
      </div>

    </div>
  )
}