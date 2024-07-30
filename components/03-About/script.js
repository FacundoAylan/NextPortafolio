export const animationScript = (animationId, animation) =>{

  const element1 = document.getElementById(animationId);

  if(!element1){
    console.error('Element not found');
    return null
  }

  const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{
      if(entry.isIntersecting){
        element1.style.animation = animation;
      }else {
        element1.style.animation = 'none';
      }
    })
  })

  observer.observe(element1);

  return ()=>{
    observer.disconnect();
  }
}