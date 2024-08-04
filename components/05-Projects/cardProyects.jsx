'use client';
import './styles.css';

export default function CardProjects({ image, title, content, subtitle, right, video, github}){

  return(
    <div className="containerCard w-1/2 h-2/3 md:w-1/4 lg:w-1/6 rounded-2xl relative border-2 border-[#a87dcc] overflow-hidden">
      <img src={image} key={title} className="w-full h-full rounded-2xl absolute "/>
      <div className="info absolute z-10 w-full bottom-0 border-t-2 border-[#a87dcc]">
        <h1 className=" text-36 text-center text-white font-black w-full tracking-wider">{title}</h1>
        <button className="w-full text-36 font-black tracking-wider text-[#a87dcc]">Ver mas</button>
      </div>
    </div>
  )
}