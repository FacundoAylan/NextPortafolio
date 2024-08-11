export const scriptAnimation = (sectionId, animation) => {

  const image = document.getElementById(sectionId);

  if (!image) {
    console.error('Element with id "section" or "section1" not found');
    return null;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        image.style.animation = animation;
      } else {
        image.style.animation = "none";
      }
    });
  });

  observer.observe(image);

  return () => {
    observer.disconnect();
  };
};
