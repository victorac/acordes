import React from "react";

interface FretItemProps {
  interval: string;
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
      {interval}
    </div>
  );
};

function getNoteData(
  stringNum: number,
  tunning: { [key: number]: string },
  key = "E"
) {
  const allNotes = [
    "A",
    "A#",
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
  ];
  const intervalToStringMap: { [key: number]: string } = {
    0: "R",
    1: "m2",
    2: "2",
    3: "m3",
    4: "3",
    5: "P4",
    6: "Aug4",
    7: "5",
    8: "m6",
    9: "6",
    10: "7",
    11: "M7",
  };

  const stringTunnig = tunning[stringNum];
  const startIndex = allNotes.findIndex((note) => note === stringTunnig);
  const noteIndex = (startIndex) % allNotes.length;
  const keyIndex = allNotes.findIndex((note) => note === key);
  const interval = (noteIndex - keyIndex + allNotes.length) % allNotes.length;
  return {
    interval: intervalToStringMap[interval],
  };
}

interface FretProps {
  keyName: string;
  tunning: { [key: number]: string };
}

const Fret: React.FC<FretProps> = ({ keyName, tunning }) => {
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
        const { interval } = getNoteData(6 - i, tunning, keyName);
        return <FretItem key={i} interval={interval} />;
      })}
    </div>
  );
};

export default Fret;
