import LinkCard from "./LinkCard";
import { FaEnvelope, FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import mailtoLink from "../utils/sendEmail";

const SocialLinksGrid = () => {
  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3 2xl:gap-6 min-[2500px]:gap-8 w-full max-w-md 2xl:max-w-2xl min-[2500px]:max-w-4xl mt-2 md:mt-4 2xl:mt-8 items-center">
      {" "}
      <LinkCard
        href="https://github.com/FacundoAylan"
        icon={<FaGithub className="text-base sm:text-xl shrink-0" />}
        text="GitHub"
      />
      <LinkCard
        href="https://www.linkedin.com/in/facundo-aylan-582b52257/"
        icon={
          <FaLinkedin className="text-[#0A66C2] text-base sm:text-xl shrink-0" />
        }
        text="LinkedIn"
      />
      <LinkCard
        href="/FacundoAylan.pdf"
        icon={
          <FaFilePdf className="text-[#FF0000] text-base sm:text-xl shrink-0" />
        }
        text="CV"
        download
      />
      <LinkCard
        href={mailtoLink}
        icon={
          <FaEnvelope className="text-[#EA4335] text-base sm:text-xl shrink-0" />
        }
        text="Email"
      />
    </div>
  );
};

export default SocialLinksGrid;
