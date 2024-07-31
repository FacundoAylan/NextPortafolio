export default function CardProjects({ image, title, content, subtitle, right, video, github}){

  return(
    <div className="bg-red-200 h-1/2 rounded-2xl">
      <img src={image} key={title} height={400} width={200}/>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{content}</p>
    </div>
  )
}