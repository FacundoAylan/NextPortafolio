const css ='/image/skillsImage/css.svg';
const react ='/image/skillsImage/react.svg';
const redux ='/image/skillsImage/redux.svg';
const chakraui ='/image/skillsImage/chakraui.svg';
const node ='/image/skillsImage/node.svg';
const express ='/image/skillsImage/express.svg';
const postgres ='/image/skillsImage/postgres.svg';
const python ='/image/skillsImage/python.svg'
const firebase ='/image/skillsImage/firebase.svg';
const tailwind ='/image/skillsImage/tailwindcss.svg';
const next ='/image/skillsImage/next.svg';
const deepseek ='/image/skillsImage/deepseek.svg';
const mysql ='/image/skillsImage/mysql.svg';
const typescript = "/image/skillsImage/typescript.webp";

export const slides = [
  {
    title: "Invoice OCR",
    subtitle: "FullStack",
    icons: [
      { name: "React", icon: react },
      { name: "TypeScript", icon: typescript },
      { name: "Node.js", icon: node },
    ],
    video: "https://player.vimeo.com/video/1206283961?h=749f5b3c6a",
    description: `Aplicación web desarrollada junto a un compañero para automatizar la carga y procesamiento de facturas en una empresa.

  📄 Carga de una o múltiples imágenes de facturas.
  🤖 Extracción automática de datos mediante IA/OCR.
  💰 Identificación de productos, cantidades, precios unitarios y totales.
  📊 Exportación de la información procesada a Excel.
  ⚡ Interfaz rápida e intuitiva para agilizar tareas administrativas.

  🧩 Stack: React, TypeScript, Tailwind CSS, Node.js, Express y ExcelJS.`,
  },
  {
    title: "Fluiana",
    subtitle: "FullStack",
    icons: [
      { name: "React js", icon: react },
      { name: "Node js", icon: node },
    ],
    video: "https://player.vimeo.com/video/1098659637?h=c256e14450",
    description: `Fluiana es una plataforma web desarrollada con React y Node.js que conecta pacientes con psicólogos de forma segura y eficiente.

    🔐 Autenticación con JWT y validación en tiempo real.
    📅 Agenda de sesiones con React Calendar.
    💳 Pagos integrados vía Mercado Pago.
    🎥 Videollamadas en tiempo real con ZegoCloud.
    🧩 Stack: React, Tailwind, Node.js, Express, JWT, MongoDB / PostgreSQL.`,
  },
  {
    title: "Deepseek ai",
    subtitle: "FullStack",
    icons: [
      { name: "React js", icon: react },
      { name: "Express", icon: express },
      { name: "MYSQL", icon: mysql },
      { name: "Tailwind", icon: tailwind },
      { name: "Deepseek", icon: deepseek },
    ],
    video:
      "https://player.vimeo.com/video/1098661111?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    description: `Deepseek AI es una plataforma desarrollada con tecnologías FullStack que combina inteligencia artificial con una experiencia web moderna.
      En el frontend se emplea React JS junto a Tailwind CSS para construir una interfaz intuitiva, responsiva y elegante.
      El backend está impulsado por Node.js y Express, permitiendo procesamientos rápidos y seguros de los datos del usuario.
      Utiliza MySQL como base de datos para almacenar información de forma estructurada y eficiente.
      Además, integra Deepseek para potenciar las capacidades inteligentes del sistema y mejorar la interacción con el usuario.
    `,
  },
  {
    title: "Mind my emotion",
    subtitle: "FontEnd",
    icons: [
      { name: "React Native", icon: react },
      { name: "Python", icon: python },
      { name: "firebase", icon: firebase },
    ],
    video: "https://player.vimeo.com/video/918885871?h=f12eefdd28",
    description: `Mind my Emotion es una aplicación móvil creada con React Native para brindar apoyo psicológico a jóvenes.
      A través de actividades guiadas, ayuda a identificar emociones y afrontar conflictos personales de forma saludable.
      Python se utiliza para procesar datos y generar recomendaciones basadas en el progreso del usuario.
      Firebase permite gestionar el contenido y la autenticación de forma segura y en tiempo real.
      La app busca ser una herramienta accesible e intuitiva para fomentar el bienestar emocional en la juventud.
    `,
  },
  {
    title: "Cursort",
    subtitle: "FullStack",
    icons: [
      { name: "React", icon: react },
      { name: "Redux", icon: redux },
      { name: "Node js", icon: node },
      { name: "PostgresSQL", icon: postgres },
    ],
    video:
      "https://player.vimeo.com/video/791658238?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    description: `Cursort es una plataforma e-commerce para la venta de clases de programación, desarrollada como proyecto final FullStack.
      Utiliza React y Redux en el frontend para una navegación fluida y gestión eficiente del estado.
      El backend está construido con Node.js y una base de datos PostgresSQL, asegurando escalabilidad y estabilidad.
      Diseñé e implementé tanto la parte visual como la lógica del negocio, integrando funcionalidades clave de compra y gestión.
      Este proyecto refleja mi capacidad para construir soluciones completas y robustas, desde la interfaz hasta la base de datos.
    `,
  },
  {
    title: "Weather",
    subtitle: "FrontEnd",
    icons: [
      { name: "React js", icon: react },
      { name: "css", icon: css },
    ],
    video: "https://player.vimeo.com/video/918882766?h=66465acb78",
    description: `Weather es una aplicación web construida con React JS que permite consultar el clima actual de tu provincia.
      Utiliza APIs públicas para obtener datos meteorológicos en tiempo real con gran precisión.
      El diseño está elaborado con CSS, enfocado en una interfaz limpia, moderna y responsiva.
      Este proyecto demuestra mi habilidad para integrar servicios externos y manejar estados dinámicos en React.
      Es ideal para quienes buscan información rápida y visualmente atractiva sobre el clima local.
    `,
  },
  {
    title: "Portafolio",
    subtitle: "Font End",
    icons: [
      { name: "React js", icon: react },
      { name: "redux", icon: redux },
      { name: "Chakra ui", icon: chakraui },
      { name: "css", icon: css },
    ],
    video: "https://player.vimeo.com/video/997507512?h=dbf30480f7",
    description: `Este es mi portafolio personal construido con React JS, donde presento varios de mis proyectos frontend.
      Utiliza Redux para gestionar eficientemente el estado global en componentes clave.
      Tailwind CSS y estilos personalizados en CSS le dan una estética moderna, responsiva y coherente.
      A través de este portafolio demuestro cómo organizo interfaces, aplico buenas prácticas y diseño con intención.
      Es una vitrina funcional que refleja mi evolución como desarrollador y mi enfoque creativo en el desarrollo web.
    `,
  },
  {
    title: "Card model",
    subtitle: "FontEnd",
    icons: [
      { name: "Next js", icon: next },
      { name: "tailwind css", icon: tailwind },
    ],
    video: "https://player.vimeo.com/video/940176559?h=4325dfd2bc",
    description: `Este proyecto es una tarjeta interactiva diseñada para destacar mis habilidades en diseño FrontEnd.
      Utilicé Next.js para aprovechar la estructura moderna y dinámica del framework.
      La estilización fue realizada con Tailwind CSS, logrando un diseño responsivo y elegante.
      Cada elemento dentro de la tarjeta está pensado para resaltar la estética y accesibilidad del contenido.
      Incluye animaciones suaves al pasar el cursor, aportando una experiencia visual atractiva.`,
  },
];
