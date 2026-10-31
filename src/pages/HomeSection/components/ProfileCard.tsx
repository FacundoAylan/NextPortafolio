interface ProfileCardProps {
  isReady: boolean;
}

const ProfileCard = ({ isReady }: ProfileCardProps) => {
  return (
    <div
      className={`w-full md:w-[40%] flex items-center md:justify-end justify-center shrink-0 [perspective:1000px] pt-2 transition-all duration-1000 ease-out ${
        isReady
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-20 pointer-events-none"
      }`}
    >
      <div className="relative w-36 h-36 sm:w-56 sm:h-56 md:w-80 md:h-[380px] 2xl:w-[700px] 2xl:h-[680px] aspect-square md:aspect-auto rounded-full md:rounded-3xl border-2 border-[#a87dcc]/40 shadow-[0_0_30px_rgba(168,125,204,0.25)] transition-transform duration-700 [transform-style:preserve-3d] [.group:hover_&]:[transform:rotateY(180deg)] cursor-pointer">
        {/* Cara Frontal */}
        <div
          className="absolute inset-0 w-full h-full rounded-full md:rounded-3xl overflow-hidden bg-slate-950"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <img
            src="/image/profile.webp"
            alt="Facundo Aylan profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Cara Trasera */}
        <div
          className="absolute inset-0 w-full h-full rounded-full md:rounded-3xl overflow-hidden bg-slate-950 [transform:rotateY(180deg)]"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <img
            src="/image/profile2.webp"
            alt="Facundo Aylan presenting"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
