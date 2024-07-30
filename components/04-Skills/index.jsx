import { useEffect } from "react";
import CardImage from "./card";
import { ScriptCard } from "./script";

export default function Skill(){

  useEffect(()=>{
    const animation = async()=>{
      await ScriptCard('titlesSkills', 'traslateCard 1s forwards');
      await ScriptCard('titlesSkills1', 'traslateCard 1s forwards');
      await ScriptCard('titlesSkills2', 'traslateCard 1s forwards')
    }
    animation()
  },[]);

  return(
    <div className="w-full h-full"> 
      <div>
        <h1 id='titlesSkills' className="text-center text-3xl font-black text-[#a87dcc] mt-4">Front End</h1>
        <div className="w-full h-2/4 flex gap-8 overflow-hidden justify-center mt-6">
          <CardImage url='/image/skillsImage/css.svg' name='css'/>
          <CardImage url='/image/skillsImage/chakraui.svg' name='chakra ui'/>
          <CardImage url='/image/skillsImage/tailwindcss.svg' name='Tailwind'/>
          <CardImage url='/image/skillsImage/next.svg' name='Next js'/>
          <CardImage url='/image/skillsImage/react.svg' name='React'/>
          <CardImage url='/image/skillsImage/native.svg' name='React Native'/>
          <CardImage url='/image/skillsImage/html.svg' name='HTML'/>
          <CardImage url='/image/skillsImage/javascript.svg' name='Javascript'/>
        </div>
      </div>
      <div>
        <h1 id='titlesSkills1' className="text-center text-3xl font-black text-[#a87dcc] mt-4">Back End</h1>
        <div className="w-full h-2/4 flex gap-8 overflow-hidden justify-center mt-6">
          <CardImage url='/image/skillsImage/python.svg' name='Python'/>
          <CardImage url='/image/skillsImage/express.svg' name='Express js'/>
          <CardImage url='/image/skillsImage/node.svg' name='Node js'/>
          <CardImage url='/image/skillsImage/postgres.svg' name='PotgresSQL'/>
          <CardImage url='/image/skillsImage/firebase.svg' name='Firebase'/>
        </div>
      </div>
      <div>
        <h1 id='titlesSkills2' className="text-center text-3xl font-black text-[#a87dcc] mt-4">Herramientas</h1>
        <div className="w-full h-2/4 flex gap-6 overflow-hidden justify-center mt-6">
          <CardImage url='/image/skillsImage/windows.svg' name='Windows'/>
          <CardImage url='/image/skillsImage/linux.svg' name='Linux'/>
          <CardImage url='/image/skillsImage/git.svg' name='Git'/>
          <CardImage url='/image/skillsImage/github.svg' name='GitHub'/>
        </div>
      </div>
    </div>
  )
}