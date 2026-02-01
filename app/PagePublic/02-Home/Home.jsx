"use client";
import { useEffect } from "react";
import "./styles.css";
import { scriptAnimation } from "@/app/script";
import { FaGithub, FaLinkedin, FaFilePdf, FaEnvelope } from "react-icons/fa";
import LinkCard from "./components/LinkCard";
import mailtoLink from "./utils/sendEmail";


export default function HomeCard() {

  useEffect(() => {
    const animation = async () => {
      await scriptAnimation("section1", "animation 1s forwards");
      await scriptAnimation("section2", "animation2 1s forwards");
    };
    animation();
  }, []);

  return (
    <div 
    className="home 
    w-full h-full 
    flex flex-col gap-4 sm:flex-row sm:justify-between sm:gap-0 
    overflow-hidden"
    >
      <div className="imageProfile w-full sm:w-1/3 h-1/2 sm:h-screen sm:flex p-6">
        <img
          style={{
            maskImage: "linear-gradient(to bottom, black 95%, transparent)",
          }}
          src={"/image/profile.webp"}
          alt="profile"
          className="rounded-full w-full h-full md:rounded-none"
        />
      </div>

      {/*Presentation */}
      <div
        id="section2"
        className="w-screen min-h-screen sm:w-2/3 
        flex flex-col md:items-center md:justify-center 
        px-4 sm:px-0"
      >
        <h1 
        className="border-neon font-black uppercase text-center text-white/90
        text-3xl sm:text-4xl lg:text-6xl "
        >
          Full Stack Developer
        </h1>
        <h3 
        className="hidden md:block 
        sm:text-2xl xl:text-3xl font-semibold mt-4 text-center text-[#a87dcc]"
        >
          Experiencia en React y Node.js
        </h3>
        <h3 
        className="hidden md:block 
        sm:text-2xl xl:text-3xl font-semibold text-center text-[#a87dcc] 
        mb-8"
        >
          Buenos Aires (CABA)
        </h3>

        <div 
        className="grid grid-cols-4 items-center gap-2 md:gap-4
        w-full max-w-md 
        text-[#a87dcc] font-mono
        mt-6 md:mt-0"
        >
          <LinkCard
            href="https://github.com/FacundoAylan"
            icon={<FaGithub className="w-8 h-8 sm:w-10 sm:h-10" color="#fff" />}
            text="GitHub"
          />
          <LinkCard
            href="https://www.linkedin.com/in/facundo-aylan-582b52257/"
            icon={
              <FaLinkedin className="w-8 h-8 sm:w-10 sm:h-10" color="#0A66C2" />
            }
            text="LinkedIn"
          />
          <LinkCard
            href="/FacundoAylan.pdf"
            icon={
              <FaFilePdf className="w-8 h-8 sm:w-10 sm:h-10" color="#FF0000" />
            }
            text="CV"
            download
          />
          <LinkCard
            href={mailtoLink}
            icon={
              <FaEnvelope className="w-8 h-8 sm:w-10 sm:h-10" color="#EA4335" />
            }
            text="Email"
          />
        </div>
      </div>
    </div>
  );
}
