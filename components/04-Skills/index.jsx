'use client'
import './styles.css';
import { FaCss3Alt, FaReact, FaHtml5, FaJs, FaPython, FaNodeJs, FaDatabase, FaFire, FaWindows, FaLinux, FaGit, FaGithub } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

const SkillCard = ({ name, icon }) => (
  <div className="relative group w-24 h-24 md:w-28 md:h-28 border-2 border-[#a87dcc] backdrop-blur-sm text-white p-1 rounded-xl flex flex-col items-center justify-center transition-all duration-700 ease-out hover:scale-110 hover:text-white hover:shadow-[0_0_30px_8px_rgba(168,125,204,0.7)] hover:bg-gradient-to-tr hover:from-[#a87dcc] hover:to-[#7e5cc9] overflow-hidden">
    
    {/* Fondo animado */}
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#1a1a1a] to-[#2e2e2e] group-hover:animate-pulse rounded-xl blur-sm"></div>

    {/* Efecto de resplandor */}
    <div className="absolute inset-0 -z-10 rounded-xl group-hover:bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15),_transparent)] transition-all duration-700"></div>

    <div className="text-4xl drop-shadow-md">{icon}</div>
    <p className="text-xs md:text-sm mt-2 font-bold text-center font-orbitron tracking-wide">
      {name}
    </p>
  </div>
);


export default function Skill() {
  return (
    <div className="skills w-full h-full flex flex-col items-center justify-center overflow-y-scroll"> 
      <div className="w-full mt-48 xl:mt-4">
        <h1 className="text-center text-3xl font-black text-[#a87dcc] mt-4 lg:text-5xl ">Front End</h1>
        <div className="w-full flex gap-4 flex-wrap justify-center mt-6">
          <SkillCard name='CSS' icon={<FaCss3Alt size={30} />} />
          <SkillCard name='Typescript' icon={<SiTypescript size={30} />} />
          <SkillCard name='Tailwind' icon={<FaCss3Alt size={30} />} />
          <SkillCard name='Next.js' icon={<FaReact size={30} />} />
          <SkillCard name='React' icon={<FaReact size={30} />} />
          <SkillCard name='React Native' icon={<FaReact size={30} />} />
          <SkillCard name='HTML' icon={<FaHtml5 size={30} />} />
          <SkillCard name='JavaScript' icon={<FaJs size={30} />} />
        </div>
      </div>
      <div className="w-full mt-8">
        <h1 className="text-center text-3xl font-black text-[#a87dcc] mt-4 lg:text-5xl">Back End</h1>
        <div className="w-full flex gap-4 flex-wrap justify-center mt-6">
          <SkillCard name='Python' icon={<FaPython size={30} />} />
          <SkillCard name='Express.js' icon={<FaNodeJs size={30} />} />
          <SkillCard name='Node.js' icon={<FaNodeJs size={30} />} />
          <SkillCard name='PostgreSQL' icon={<FaDatabase size={30} />} />
          <SkillCard name='Firebase' icon={<FaFire size={30} />} />
        </div>
      </div>
      <div className="w-full mt-8">
        <h1 className="text-center text-3xl font-black text-[#a87dcc] mt-4 lg:text-5xl">Herramientas</h1>
        <div className="w-full flex gap-4 flex-wrap justify-center mt-6">
          <SkillCard name='Windows' icon={<FaWindows size={30} />} />
          <SkillCard name='Linux' icon={<FaLinux size={30} />} />
          <SkillCard name='Git' icon={<FaGit size={30} />} />
          <SkillCard name='GitHub' icon={<FaGithub size={30} />} />
        </div>
      </div>
    </div>
  )
}