import './styles.css'

export default function CardImage({url,name}){

  return(
    <div className="card flex flex-col items-center border-4 w-32  p-1 rounded-2xl border-x-[#a87dcc] border-y-transparent hover:border-y-[#a87dcc] hover:transition  hover:duration-700">
      <img src={url} height={50} width={50}/>
      <p className="font-black text-[#a87dcc] tracking-wider">{name}</p>
    </div>
  )
}