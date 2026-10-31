import { useState, useEffect } from "react";
import HomeIntroSplash from "./components/HomeIntroSplash";
import ProfileCard from "./components/ProfileCard";
import ProfileInfo from "./components/ProfileInfo";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const HomeSection = () => {
  const [showContent, setShowContent] = useState(false);
  const [isIntroMounted, setIsIntroMounted] = useState(true);
  
  const { ref, isVisible } = useScrollAnimation(0.1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1800);

    const unmountTimer = setTimeout(() => {
      setIsIntroMounted(false);
    }, 2800);

    return () => {
      clearTimeout(timer);
      clearTimeout(unmountTimer);
    };
  }, []);

  const isReady = showContent && isVisible;

  return (
    <section className="group relative w-full min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-12 py-6 text-white overflow-hidden">
      {/* Splash Intro */}
      {isIntroMounted && <HomeIntroSplash showContent={showContent} />}

      {/* Contenedor Principal */}
      <div
        ref={ref}
        className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12"
      >
        <ProfileCard isReady={isReady} />
        <ProfileInfo isReady={isReady} />
      </div>
    </section>
  );
};

export default HomeSection;