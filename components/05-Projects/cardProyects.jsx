'use client';
import './styles.css';

export default function CardProjects({ image, title, subtitle, right, video, github, modal,setModal, setInfo}){

  const activateModal =()=>{
    setInfo(video),
    setModal(!modal)
  }

  return(
    <div className="containerCard w-1/2 h-2/3 md:w-1/4 lg:w-1/6 rounded-2xl relative border-2 border-[#a87dcc] overflow-hidden font-sans">
      <div className='absolute w-full h-2/3 z-5'>
        <img src={image} key={title} className="w-full h-full"/>
      </div>
      <div className="info absolute z-5 w-full bottom-0 border-t-2 border-[#a87dcc]">
        <h1 className="text-36 text-center text-[#a87dcc] font-black w-full tracking-wider">{title}</h1>
        <h3 className='text-center text-[#a87dcc] font-black'>{subtitle}</h3>
        <div className='flex justify-center gap-2 p-2'>
          {right.map((skill, index)=>{
            return(
              <div key={index} className='border-2 border-[#a87dcc] rounded-lg hover:scale-110'>
                <img src={skill.icon} width={30} height={30}/>
              </div>
            )
          })}
        </div>
        <button 
          className="w-full text-36 font-black tracking-wider text-[#a87dcc]"
          onClick={activateModal}
        >
          Ver mas
        </button>
      </div>
    </div>
  )
}