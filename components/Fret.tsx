import { getNoteData, NeckState } from "@/utils/notes";
import React from "react";

interface FretItemProps {
  interval?: string;
}

const FretItem: React.FC<FretItemProps> = ({ interval }) => {
  return (
    <div
      className="
      flex items-center justify-center
      w-[49px]
      sm:h-[49px] 
      sm:w-[28px]
      p-1
      text-[#D0D8FF] 
      text-[16px] 
      leading-5 
      font-semibold"
    >
      {interval ? interval : (<div className="rounded-full h-1 w-1 bg-[#B3BDC7]"></div>)}
    </div>
  );
};

interface FretProps {
  keyName: string;
  neckIntervals: NeckState;
  tunning: { [key: number]: string };
}

const Fret: React.FC<FretProps> = ({ keyName, neckIntervals, tunning }) => {
  return (
    <div
      className="
    bg-[#192149] 
    px-4 
    rounded-full 
    flex 
    sm:flex-col sm:h-auto sm:px-0 
    items-center 
    justify-center
    sticky
    top-0
    sm:top-auto
    sm:left-0
    z-[2000]
    "
    >
      {Array.from({ length: 6 }).map((_, i) => {
        if (neckIntervals[`${6-i}-0`]) {
          const { interval } = getNoteData(6 - i, 0, tunning, keyName);
          return <FretItem key={i} interval={interval} />;
        }
        return <FretItem key={i} />;
      })}
    </div>
  );
};

export default Fret;
