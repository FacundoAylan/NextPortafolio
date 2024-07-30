export default function CardImage({url,name}){
  return(
    <div className="flex flex-col items-center border-x-4 w-32 p-1 rounded-2xl border-[#a87dcc]">
      <img src={url} height={50} width={50}/>
      <p className="font-black text-[#a87dcc] tracking-wider">{name}</p>
    </div>
  )
}