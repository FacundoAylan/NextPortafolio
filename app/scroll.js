'use client'
export const scrollSection= (id)=>{

  const section = document.getElementById(id);

  if(section){
    const offset = section.getBoundingClientRect().top + window.pageYOffset;

    // Ajusta el desplazamiento teniendo en cuenta el margen superior
    const offsetWithMargin = offset - 64; // Reemplaza 16 con el valor de tu margen superior

    window.scrollTo({
      top: offsetWithMargin,
      behavior: 'smooth',
    });
  }
}