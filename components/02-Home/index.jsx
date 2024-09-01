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
    <div  className=" home w-full h-full flex items-center justify-center flex-col md:flex-row md:justify-between overflow-hidden">
      <div id='section1' className='w-screen lg:w-1/2 flex justify-center lg:justify-start'>
        <img
          src={'https://firebasestorage.googleapis.com/v0/b/portafolio-fac1a.appspot.com/o/profile.png?alt=media&token=45b6d63d-570b-40d7-b0c8-c5163fcdb070'}
        />
      </div>
      <div id='section2' className="w-screen md:w-1/2 lg:h-full flex flex-col justify-center items-center lg:mt-6">
        <h1 
          className="homeTitle text-2xl lg:text-5xl 2xl:text-6xl font-black tracking-widest uppercase text-center text-[#a87dcc]"
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
              src={'https://firebasestorage.googleapis.com/v0/b/portafolio-fac1a.appspot.com/o/github.png?alt=media&token=6df2ab81-c6b8-474d-9533-d7d5a37f0210'}
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
              src={'https://firebasestorage.googleapis.com/v0/b/portafolio-fac1a.appspot.com/o/linkedin.png?alt=media&token=a046f4dd-62aa-4023-ba11-fcd4e9b3e8e2'}
              width={70}
              height={70}
            />
            <p className="font-bold">Linkedin</p>
          </Link>
          <a 
            href='/FacundoAylan.pdf'
            download
            className='hover:scale-110 flex flex-col justify-center items-center'
          >
            <img
              src={'https://firebasestorage.googleapis.com/v0/b/portafolio-fac1a.appspot.com/o/cv.png?alt=media&token=3c46b61b-1216-4057-b4b6-35c1d848aa81'}
              width={70}
              height={70}
            />
            <p className="font-bold">CV</p>
          </a>
          <Link 
            href={mailtoLink}
            target='_blank'
            rel="noopener noreferrer"
            className='hover:scale-110 flex flex-col justify-center items-center'
          >
            <img
              src={'https://firebasestorage.googleapis.com/v0/b/portafolio-fac1a.appspot.com/o/email.png?alt=media&token=44e17eb5-6623-4331-a629-8d8147d77015'}
              width={70}
              height={70}
            />
            <p className="font-bold">Email</p>
          </Link>
        </div>
      </div>

    </div>
  )
}