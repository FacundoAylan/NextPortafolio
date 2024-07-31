'use client'
import { useEffect } from 'react';
import Link from "next/link";
import { parent } from './script';
import './styles.css';

export default function HomeCard(){
  
  useEffect(() => {
    const animation = async()=>{
      await parent('section1', 'animation 1s forwards');
      await parent('section2', 'animation2 1s forwards');
      await parent('section3', 'animation 1s forwards');
    }
    animation()
  }, []);



  return(
    <div id='section' className="w-full h-full  flex flex-col justify-center md:justify-between md:flex-row overflow-hidden pb-1">
      <div id='section1' className=' w-3/4 md:hidden mx-14'>
        <img
          src={'image/profile.png'}
        />
      </div>
      <div id='section2' className="md:w-1/2">
        <h1 
          className="text-2xl md:text-3xl lg:text-5xl font-black tracking-wide mt-8 md:mt-28 lg:mt-44 ml-6 uppercase text-center text-[#a87dcc]"
        >
          Full Stack developer
        </h1>
        <h3 className="text-2xl font-bold mt-2 text-center text-white">Buenos Aires(CABA)</h3>
        <div className="flex gap-8 mt-6  ml-28 md:ml-32 lg:ml-60  text-[#a87dcc]">
          <Link 
            href=''
            className='hover:scale-110'
          >
            <img
              src={'image/github.png'}
              width={70}
              height={70}
            />
            <p className="font-bold ml-2">Github</p>
          </Link>
          <Link 
            href=''
            className='hover:scale-110'
          >
            <img
              src={'image/linkedin.png'}
              width={70}
              height={70}
            />
            <p className="font-bold ml-2">Linkedin</p>
          </Link>
        </div>
      </div>
      <div id='section3' className='w-1/2 hidden md:flex justify-end '>
        <img
          src={'image/profile.png'}
        />
      </div>
    </div>
  )
}