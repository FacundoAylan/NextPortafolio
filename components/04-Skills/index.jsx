'use client'
import './styles.css';
import { FaCss3Alt, FaReact, FaHtml5, FaJs, FaPython, FaNodeJs, FaDatabase, FaFire, FaWindows, FaLinux, FaGit, FaGithub } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

const SkillCard = ({ name, icon }) => (
  <div className="w-24 h-24 md:w-28 md:h-28 border-2 border-[#a87dcc] p-1 rounded-xl flex flex-col items-center justify-center">
    <div className="text-white">{icon}</div>
    <p 
      className="text-[#a87dcc] text-sm md:text-md mt-2 font-bold text-center font-mono"
    >
      {name}
    </p>
  </div>
);

export default function Skill() {
  return (
    <div id='skillsCard' className="skills w-full h-full flex flex-col items-center justify-center pt-2"> 
      <div className="w-full">
        <h1 className="text-center text-3xl font-black text-[#a87dcc] mt-4 lg:text-5xl">Front End</h1>
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