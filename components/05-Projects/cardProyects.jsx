'use client';
import './styles.css';

export default function CardProjects({ image, title, subtitle, right, video, github, modal,setModal, setInfo}){

  const activateModal =()=>{
    setInfo(video),
    setModal(!modal)
  }

  return(
    <div className="w-full h-2/3 md:w-1/4 lg:w-1/3  relative font-sans">
      <h1 className=" titlecard uppercase text-2xl text-center text-[#a87dcc] font-black w-full tracking-wider pb-2">{title}</h1>
      <div className='containerCard absolute w-full h-2/3 z-5 rounded-2xl border-2 border-[#a87dcc] overflow-hidden'>
        <img src={image} key={title} className="w-full h-full"/>
      </div>
      <div className="flex justify-center absolute w-full bottom-0">
        <button 
          className="titlecard text-xl py-2 px-4 rounded-2xl text-36 font-black tracking-wider text-white bg-[#a87dcc]"
          onClick={activateModal}
        >
          ver mas
        </button>
      </div>
    </div>
  )
}