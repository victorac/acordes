import React from "react";

const FretItem: React.FC = () => {
  return (
    <div
      className="
      flex items-center justify-center
      w-[49px]
      md:h-[49px] 
      md:w-[28px]
      p-1
      text-[#D0D8FF] 
      text-[16px] 
      leading-5 
      font-semibold"
    >
      R
    </div>
  );
};

const Fret: React.FC = () => {
  return (
    <div
      className="
    bg-[#192149] 
    px-4 
    rounded-full 
    flex 
    md:flex-col md:h-auto md:px-0 
    items-center 
    justify-center
    sticky
    top-0
    md:top-auto
    md:left-0
    z-[2000]
    "
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <FretItem key={i} />
      ))}
    </div>
  );
};

export default Fret;
