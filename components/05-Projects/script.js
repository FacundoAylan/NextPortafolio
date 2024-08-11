export const ScriptProyect = (sectionId, animationId)=>{

  const projets = document.getElementById(sectionId);

  if (!projets){
    console.error('Element with id "' + sectionId + '" not found');
    return null
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        projets.style.animation = animationId;
      } else {
        projets.style.animation = 'none'; 
      }
    });
  });

  observer.observe(projets);
  return () => {
    observer.disconnect();
  };
}