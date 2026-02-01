import Link from "next/link";

const LinkCard = ({ href, icon, text, download = false }) => (
    <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        download={download}
        className="relative 
        w-full h-full 
        flex flex-col items-center justify-center 
        p-2 rounded-xl border-2 border-[#a87dcc] text-white 
        transition-all duration-500 ease-out hover:scale-110 
        hover:bg-gradient-to-br hover:from-[#2c1b47] hover:to-[#a87dcc] 
        hover:shadow-[0_0_20px_6px_rgba(168,125,204,0.6)]"
    >
        <div 
        className="absolute inset-0 rounded-xl -z-10 
        bg-gradient-to-br from-[#1a1a1a] to-[#2e2e2e]" 
        />

        <div className="text-3xl drop-shadow-md mb-1">{icon}</div>

        <p 
        className="font-bold text-xs 
        md:text-sm text-[#a87dcc] 
        group-hover:text-white font-orbitron tracking-wide text-center"
        >
            {text}
        </p>
    </Link>
);

export default LinkCard;