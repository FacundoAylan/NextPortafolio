export const ScriptCard = (sectionId, animationId) => {
  const card = document.getElementById(sectionId);
  if (!card) {
    console.error('Element with id "' + sectionId + '" not found');
    return null;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        card.style.animation = animationId;
      } else {
        card.style.animation = 'none'; 
      }
    });
  });

  observer.observe(card);
  return () => {
    observer.disconnect();
  };
};