import { useEffect } from "react";
import CardImage from "./card";
import { scriptAnimation } from "@/app/script";

export default function Skill(){

  // useEffect(()=>{
  //   const animation = async()=>{
  //     await scriptAnimation('skillsCard', 'traslateCard 1s forwards')
  //   }
  //   animation()
  // },[]);

  return(
    <div id='skillsCard' className="w-full h-full lg:flex lg:justify-center lg:flex-col"> 
      <div >
        <h1 className="text-center text-3xl font-black text-[#a87dcc] mt-4 lg:text-5xl">Front End</h1>
        <div className="w-full h-2/4 flex gap-8 flex-wrap overflow-hidden justify-center mt-6 2xl:mt-8">
          <CardImage url='https://firebasestorage.googleapis.com/v0/b/portafolio-fac1a.appspot.com/o/skills%2Fcss.svg?alt=media&token=ae3564e5-4ae8-405d-b486-c9680255475b' name='css'/>
          <CardImage url='https://firebasestorage.googleapis.com/v0/b/portafolio-fac1a.appspot.com/o/skills%2Fchakraui.svg?alt=media&token=07e49431-c01c-46e1-b529-c279c5753060' name='chakra ui'/>
          <CardImage url='https://firebasestorage.googleapis.com/v0/b/portafolio-fac1a.appspot.com/o/skills%2Ftailwindcss.svg?alt=media&token=479c3929-5177-4b5c-9530-92b02616679e' name='Tailwind'/>
          <CardImage url='https://firebasestorage.googleapis.com/v0/b/portafolio-fac1a.appspot.com/o/skills%2Fnext.svg?alt=media&token=20f9ea69-db1b-43e8-bc8f-1f3a56cc89c5' name='Next js'/>
          <CardImage url='https://firebasestorage.googleapis.com/v0/b/portafolio-fac1a.appspot.com/o/skills%2Freact.svg?alt=media&token=176d01b0-b833-4e16-8e5f-0f0a7338440f' name='React'/>
          <CardImage url='https://firebasestorage.googleapis.com/v0/b/portafolio-fac1a.appspot.com/o/skills%2Fnative.svg?alt=media&token=b2e2ae69-ea94-460d-8c53-81794c60ea9c' name='React Native'/>
          <CardImage url='https://firebasestorage.googleapis.com/v0/b/portafolio-fac1a.appspot.com/o/skills%2Fhtml.svg?alt=media&token=937705fa-cbf9-4357-818b-047928b620d7' name='HTML'/>
          <CardImage url='https://firebasestorage.googleapis.com/v0/b/portafolio-fac1a.appspot.com/o/skills%2Fjavascript.svg?alt=media&token=f99f2219-61af-481a-b6df-101cdd32924c' name='Javascript'/>
        </div>
      </div>
      <div>
        <h1 className="text-center text-3xl font-black text-[#a87dcc] mt-4 2xl:mt-6 lg:text-5xl">Back End</h1>
        <div className="w-full h-2/4 flex gap-8 flex-wrap overflow-hidden justify-center mt-6 2xl:mt-8">
          <CardImage url='https://firebasestorage.googleapis.com/v0/b/portafolio-fac1a.appspot.com/o/skills%2Fpython.svg?alt=media&token=5be226a6-c95e-4b5c-9310-13529e650d2a' name='Python'/>
          <CardImage url='https://firebasestorage.googleapis.com/v0/b/portafolio-fac1a.appspot.com/o/skills%2Fexpress.svg?alt=media&token=0a4d18a6-0d5f-4750-8070-c48fb9629325' name='Express js'/>
          <CardImage url='https://firebasestorage.googleapis.com/v0/b/portafolio-fac1a.appspot.com/o/skills%2Fnode.svg?alt=media&token=9bfe8f82-ef8a-4147-9740-ba5ea6c1c45f' name='Node js'/>
          <CardImage url='https://firebasestorage.googleapis.com/v0/b/portafolio-fac1a.appspot.com/o/skills%2Fpostgres.svg?alt=media&token=ced689e6-3557-4e30-bedf-240c31b22bc5' name='PotgresSQL'/>
          <CardImage url='https://firebasestorage.googleapis.com/v0/b/portafolio-fac1a.appspot.com/o/skills%2Ffirebase.svg?alt=media&token=83c603cd-aef7-4a38-9f5b-e97492c9e700' name='Firebase'/>
        </div>
      </div>
      <div>
        <h1 className="text-center text-3xl font-black text-[#a87dcc] mt-4 2xl:mt-6 lg:text-5xl">Herramientas</h1>
        <div className="w-full h-2/4 flex gap-6 flex-wrap overflow-hidden justify-center mt-6 2xl:mt-8">
          <CardImage url='https://firebasestorage.googleapis.com/v0/b/portafolio-fac1a.appspot.com/o/skills%2Fwindows.svg?alt=media&token=2b9171e7-3e0f-42bf-b0e8-a73d6cb63ad4' name='Windows'/>
          <CardImage url='https://firebasestorage.googleapis.com/v0/b/portafolio-fac1a.appspot.com/o/skills%2Flinux.svg?alt=media&token=e6c8fe1e-46c1-4a16-908f-929ebfd6829e' name='Linux'/>
          <CardImage url='https://firebasestorage.googleapis.com/v0/b/portafolio-fac1a.appspot.com/o/skills%2Fgit.svg?alt=media&token=809895df-b36b-48a2-99c5-d0bae04ac077' name='Git'/>
          <CardImage url='https://firebasestorage.googleapis.com/v0/b/portafolio-fac1a.appspot.com/o/skills%2Fgithub.svg?alt=media&token=14f0093b-9985-47a2-af20-c019e3e0f5f4' name='GitHub'/>
        </div>
      </div>
    </div>
  )
}