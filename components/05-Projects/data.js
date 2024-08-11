import css from '@/public/image/skillsImage/css.svg';
import react from '@/public/image/skillsImage/react.svg';
import redux from '@/public/image/skillsImage/redux.svg';
import chakraui from '@/public/image/skillsImage/chakraui.svg';
import node from '@/public/image/skillsImage/node.svg';
import express from '@/public/image/skillsImage/express.svg';
import postgres from '@/public/image/skillsImage/postgres.svg';
import python from '@/public/image/skillsImage/python.svg'
import firebase from '@/public/image/skillsImage/firebase.svg';
import tailwind from '@/public/image/skillsImage/tailwindcss.svg';
import next from '@/public/image/skillsImage/next.svg';

export const slides = [
  {
    image: '/image/ProyectsImg/image1.png',
    title: 'Card model',
    subtitle: 'FontEnd',
    content: `Es un diseño de una card interactiva.`,
    rightSubtitle: [
      {name:'Next js',icon:next},
      {name:'tailwind css', icon:{tailwind}},
    ],
    github:'https://github.com/FacundoAylan/CurSort',
    video:'https://player.vimeo.com/video/940176559?h=4325dfd2bc'
  },
  {
    image: '/image/ProyectsImg/image2.png',
    title: 'Harmoni wisch',
    subtitle: 'Fullstack',
    content: `Aplición web para el manejo de reserva de lavaderos de auto`,
    rightSubtitle: [
      {name:'React js',icon:react}, 
      {name:'chakra ui', icon:chakraui},
      {name:'Python',icon:python},
      {name:'firebase', icon:firebase}
    ],
    github:'https://github.com/FacundoAylan/lavadero',
    video:'https://player.vimeo.com/video/919405266?h=c46cdc3062'
  },
  {
    image: '/image/ProyectsImg/image3.png',
    title: 'Mind my emotion',
    subtitle: 'FontEnd',
    content: `Aplición movil de ayuda psicológica pensado para niños y jovenes`,
    rightSubtitle: [
      {name:'React Native',icon:react}, 
      {name:'Python',icon:python},
      {name:'firebase', icon:firebase}
    ],
    github:'https://github.com/FacundoAylan/mindMyEmotions',
    video:'https://player.vimeo.com/video/918885871?h=f12eefdd28'
  },
  {
    image: '/image/ProyectsImg/image4.png',
    title: 'Weather',
    subtitle: 'FrontEnd',
    content: `Aplición web  en las cual vas a poder consultar el clima de tu cuidad`,
    rightSubtitle: [{name:'React js',icon:react},{name:'css', icon:css}],
    github:'https://github.com/FacundoAylan/weather',
    video:'https://player.vimeo.com/video/918882766?h=66465acb78'
  },
  {
    image: '/image/ProyectsImg/image5.png', 
    title: 'Portafolio',
    subtitle: 'Font End',
    content: `Portafolio personal`,
    rightSubtitle: [{name:'React js',icon:react},{name:'redux',icon:redux}, {name:'node js',icon:node},{name:'postgres', icon:postgres}],
    github:'https://github.com/FacundoAylan/Portafolio',
    video:'https://player.vimeo.com/video/997507512?h=dbf30480f7'
  },

];
