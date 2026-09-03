import type { ComponentType } from "react";
import {
  SiReact,
  SiRedux,
  SiChakraui,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiFirebase,
  SiTailwindcss,
  SiMysql,
  SiTypescript,
  SiCsswizardry,
} from "react-icons/si";
import { FaServer, FaBrain } from "react-icons/fa6";

// Interface para cada tecnología individual
export interface ProjectIcon {
  name: string;
  icon: ComponentType<{ className?: string }>;
  color?: string;
}

// Interface para la estructura de cada Slide / Proyecto
export interface ProjectSlide {
  title: string;
  subtitle: string;
  icons: ProjectIcon[];
  video: string;
  description: string;
}

export const slides: ProjectSlide[] = [
  {
    title: "StockBar",
    subtitle: "FullStack",
    icons: [
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
    ],
    video: "https://player.vimeo.com/video/1219051820?h=785077b102",
    description: `Aplicación web orientada a la automatización del control y análisis de inventarios.

• Carga y procesamiento dinámico de archivos CSV.
• Análisis visual con filtros avanzados y edición directa de stock.
• Conversión automática de unidades de medida y gestión de productos.
• Generación de reportes resumidos en PDF y formato directo para Gmail.
• Stack: React, TypeScript, Tailwind CSS, Zustand.`,
  },
  {
    title: "Invoice OCR",
    subtitle: "FullStack",
    icons: [
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
      { name: "Express", icon: FaServer, color: "text-[#a87dcc]" },
    ],
    video: "https://player.vimeo.com/video/1206283961?h=749f5b3c6a",
    description: `Plataforma administrativa para la extracción automatizada de datos contables mediante IA.

• Carga masiva de comprobantes e imágenes de facturas.
• Reconocimiento de texto (OCR) para extraer precios, montos y productos.
• Exportación directa de planillas de cálculo a formato Excel.
• Agilización de flujos de trabajo administrativos.
• Stack: React, TypeScript, Tailwind CSS, Node.js, Express, ExcelJS.`,
  },
  {
    title: "Fluiana",
    subtitle: "FullStack",
    icons: [
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
      { name: "Express", icon: FaServer, color: "text-[#a87dcc]" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
    ],
    video: "https://player.vimeo.com/video/1098659637?h=c256e14450",
    description: `Plataforma de salud mental que conecta pacientes con profesionales de la psicología.

• Autenticación segura vía tokens JWT y gestión de perfiles.
• Sistema interactivo para agendamiento de turnos.
• Pasarela de pagos online integrada con Mercado Pago.
• Infraestructura para videollamadas en tiempo real a través de ZegoCloud.
• Stack: React, Node.js, Express, PostgreSQL / MongoDB.`,
  },
  {
    title: "DeepSeek AI",
    subtitle: "FullStack",
    icons: [
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Express", icon: FaServer, color: "text-[#a87dcc]" },
      { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "DeepSeek", icon: FaBrain, color: "text-[#a87dcc]" },
    ],
    video:
      "https://player.vimeo.com/video/1098661111?badge=0&autopause=0&player_id=0&app_id=58479",
    description: `Interfaz web conversacional e interactiva impulsada por modelos de lenguaje de última generación.

• Integración directa con la API de DeepSeek para respuestas avanzadas.
• Backend optimizado para el procesamiento asíncrono de consultas.
• Almacenamiento estructurado de historial y usuarios en base de datos.
• Stack: React, Node.js, Express, MySQL, Tailwind CSS.`,
  },
  {
    title: "Mind My Emotion",
    subtitle: "Mobile / FrontEnd",
    icons: [
      { name: "React Native", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
      { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
    ],
    video: "https://player.vimeo.com/video/918885871?h=f12eefdd28",
    description: `Aplicación móvil para la gestión de la salud emocional y seguimiento personal en jóvenes.

• Dinámicas interactivas para identificación de estados de ánimo.
• Algoritmo en Python para generación de recomendaciones personalizadas.
• Sincronización de datos en tiempo real mediante Firebase.
• Stack: React Native, Python, Firebase.`,
  },
  {
    title: "Weather App",
    subtitle: "FrontEnd",
    icons: [
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "CSS3", icon: SiCsswizardry, color: "text-[#1572B6]" },
    ],
    video: "https://player.vimeo.com/video/918882766?h=66465acb78",
    description: `Dashboard meteorológico en tiempo real con geolocalización por provincias.

• Consumo de API climatológica externa con manejo dinámico de estado.
• Interfaz limpia enfocada en legibilidad y datos precisos.
• Stack: React, CSS3.`,
  },
  {
    title: "Portafolio Personal",
    subtitle: "FrontEnd",
    icons: [
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Redux", icon: SiRedux, color: "text-[#764ABC]" },
      { name: "Chakra UI", icon: SiChakraui, color: "text-[#319795]" },
      { name: "CSS3", icon: SiCsswizardry, color: "text-[#1572B6]" },
    ],
    video: "https://player.vimeo.com/video/997507512?h=dbf30480f7",
    description: `Vitrina personal de proyectos con arquitectura limpia y diseño interactivo.

• Manejo de estado global con Redux.
• Componentes modulares con diseño adaptativo.
• Stack: React, Redux, Chakra UI, Tailwind CSS.`,
  },
];
