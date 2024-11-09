'use client';
import { useState } from 'react';
import './styles.css'

export default function CardImage({ url, name }){

  const [isHovered, setIsHovered] = useState(false);

  return(
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative card flex flex-col justify-center items-center border-4 w-32 rounded-2xl border-x-[#a87dcc] border-y-transparent hover:border-y-[#a87dcc] transition duration-700 "
    >
      <img 
        src={ url } 
        height={50}
        width={50}
        className={ isHovered ? '' : 'lg:absolute z-10  w-full h-full flex justify-center items-center p-1' } 
      />
      <p className={ isHovered ? 'font-black text-[#a87dcc] tracking-wider': 'font-black text-[#a87dcc] tracking-wider lg:hidden'  }>{ name }</p>
    </div>
  )
}