'use client';
import './styles.css';

export default function CardProjects({ image, title, subtitle, icons, video, github, modal,setModal, setInfo }){

  const activateModal =()=>{
    setInfo(video),
    setModal(!modal)
  }

  return(
    <div className="w-full h-[300px] md:w-1/4 lg:w-1/3 relative font-sans">

      <div className='containerCard w-full h-full rounded-t-2xl border-2 border-[#a87dcc] absolute'>
        <img 
          key={ title } 
          src={ image }  
          className="w-full h-full"
        />
      </div>

      <div className="flex flex-col justify-center absolute w-full h-full gap-60 z-5">
        <h1 
          className=" titlecard uppercase text-2xl text-center text-[#a87dcc] font-black w-full tracking-wider pb-2"
        >
          { title }
        </h1>
        <div className='flex flex-col gap-2'>
          <div className='flex gap-2 justify-center'>
            {
              icons?.map( (icon, index) => {
                return(
                  <img 
                    key={index}
                    src={icon.icon}
                    className='w-12 h-12 rounded-lg backdrop-blur-lg p-1 hover:scale-110 bg-[#6c2f9e] border- border-2'  
                  />
                )
              })
            }
          </div>

          <button 
            className="titlecard text-xl py-2 px-4 rounded-b-2xl font-black tracking-wider text-white bg-[#a87dcc] hover:text-2x"
            onClick={activateModal}
          >
            View
          </button>
        </div>
      </div>
    </div>
  )
}