'use client'
import { useEffect } from 'react';
import Link from "next/link";
import { parent } from './script';
import './styles.css';

export default function HomeCard(){

  const email = 'facundoaylan3@gmail.com';
  const subject = 'vi tu portafilio y me gustaria comunicarme contigo';
  const body = 'Hola, Facundo';

  const mailtoLink = `https://mail.google.com/mail/?view=cm&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  useEffect(() => {
    const animation = async()=>{
      await parent('section1', 'animation 1s forwards');
      await parent('section2', 'animation2 1s forwards');
      await parent('section3', 'animation 1s forwards');
    }
    animation()
  }, []);



  return(
    <div  className="w-full h-full flex flex-col justify-center md:justify-between md:flex-row overflow-hidden">
      <div id='section1' className=' w-full md:hidden flex justify-center'>
        <img
          src={'image/profile.png'}
          className='w-3/4'
        />
      </div>
      <div id='section2' className="w-full md:w-1/2 md:h-full flex flex-col justify-center items-center md:pt-16">
        <h1 
          className="text-2xl md:text-3xl lg:text-5xl font-black tracking-wide uppercase text-center text-[#a87dcc]"
        >
          Full Stack developer
        </h1>
        <h3 className="text-2xl xl:text-4xl font-bold mt-2 text-center text-white">Buenos Aires(CABA)</h3>
        <div className="w-full flex justify-center gap-8 mt-4 text-[#a87dcc]">
          <Link 
            href='https://github.com/FacundoAylan'
            target='_blank'
            rel="noopener noreferrer"
            className='hover:scale-110 flex flex-col justify-center items-center'
            
          >
            <img
              src={'image/github.png'}
              width={70}
              height={70}
            />
            <p className="font-bold">Github</p>
          </Link>
          <Link 
            href='https://www.linkedin.com/in/facundo-aylan-582b52257/'
            target='_blank'
            rel="noopener noreferrer"
            className='hover:scale-110 flex flex-col justify-center items-center'
          >
            <img
              src={'image/linkedin.png'}
              width={70}
              height={70}
            />
            <p className="font-bold">Linkedin</p>
          </Link>
          <Link 
            href='https://www.linkedin.com/in/facundo-aylan-582b52257/'
            target='_blank'
            rel="noopener noreferrer"
            className='hover:scale-110 flex flex-col justify-center items-center'
          >
            <img
              src={'image/cv.png'}
              width={70}
              height={70}
            />
            <p className="font-bold">CV</p>
          </Link>
          <Link 
            href={mailtoLink}
            target='_blank'
            rel="noopener noreferrer"
            className='hover:scale-110 flex flex-col justify-center items-center'
          >
            <img
              src={'image/email.png'}
              width={70}
              height={70}
            />
            <p className="font-bold">Email</p>
          </Link>
        </div>
      </div>
      <div id='section3' className='md:w-1/2 hidden md:flex justify-end '>
        <img
          src={'image/profile.png'}
        />
      </div>
    </div>
  )
}