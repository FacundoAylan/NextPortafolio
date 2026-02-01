const InterestCard = ({ name, icon }) => (
    <div 
    className="relative w-24 h-20 md:w-28 md:h-24 
    border-2 border-[#a87dcc] rounded-xl 
    p-2 backdrop-blur-sm 
    flex flex-col items-center justify-center 
    transition-transform duration-500 ease-out 
    hover:scale-110 hover:shadow-[0_0_20px_6px_rgba(168,125,204,0.6)] 
    hover:bg-gradient-to-br hover:from-[#2c1b47] hover:to-[#a87dcc]"
    >
        <div 
        className="absolute inset-0 rounded-xl -z-10 
        bg-gradient-to-br from-[#1a1a1a] to-[#2e2e2e] 
        group-hover:animate-pulse" 
        />

        <div className="text-2xl md:text-3xl text-white drop-shadow-md">{icon}</div>
        <p 
        className="mt-2 text-xs md:text-sm font-bold text-[#a87dcc] 
        text-center font-orbitron tracking-wide"
        >
            {name}
        </p>
    </div>
);

export default InterestCard;