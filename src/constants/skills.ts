import type{ ComponentType } from "react";
import {
  FaCss3Alt,
  FaReact,
  FaHtml5,
  FaJs,
  FaPython,
  FaNodeJs,
  FaDatabase,
  FaFire,
  FaWindows,
  FaLinux,
  FaGit,
  FaGithub,
} from "react-icons/fa";

import {
  SiTypescript,
  SiChakraui,
  SiTailwindcss,
  SiNextdotjs,
  SiPostgresql,
  SiCplusplus,
} from "react-icons/si";

export interface Skill {
  name: string;
  icon: ComponentType<{ color?: string; className?: string }>;
  color: string;
  status?: string;
}

export const frontendSkills: Skill[] = [
  {
    name: "HTML",
    icon: FaHtml5,
    color: "#E34F26",
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
    color: "#1572B6",
  },
  {
    name: "JavaScript",
    icon: FaJs,
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "React",
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#FFFFFF",
  },
  {
    name: "React Native",
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "Chakra UI",
    icon: SiChakraui,
    color: "#1BB2A9",
  },
];

export const backendSkills: Skill[] = [
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "#5FA04E",
  },
  {
    name: "Express.js",
    icon: FaNodeJs,
    color: "#FFFFFF",
  },
  {
    name: "Python",
    icon: FaPython,
    color: "#3776AB",
    status: "Básico",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
  },
  {
    name: "Firebase",
    icon: FaFire,
    color: "#DD2C00",
  },
  {
    name: "C++",
    icon: SiCplusplus,
    color: "#00599C",
    status: "Básico",
  },
  {
    name: "C#",
    icon: FaDatabase,
    color: "#239120",
    status: "Aprendiendo",
  },
];

export const toolsSkills: Skill[] = [
  {
    name: "Git",
    icon: FaGit,
    color: "#F05032",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    color: "#FFFFFF",
  },
  {
    name: "VS Code",
    icon: FaGithub,
    color: "#007ACC",
  },
  {
    name: "Linux",
    icon: FaLinux,
    color: "#FCC624",
  },
  {
    name: "Windows",
    icon: FaWindows,
    color: "#0078D6",
  },
];
