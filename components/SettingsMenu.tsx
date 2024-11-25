"use client";
import useScreenSize from "@/hooks/useScreenSize";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const upwardsCaret = (
  <svg
    width="7"
    height="6"
    viewBox="0 0 7 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.52 0.820547L6.556 3.85655V5.16455L3.52 2.12855L0.483999 5.16455V3.85655L3.52 0.820547Z"
      fill="#D0D8FF"
    />
  </svg>
);

const downwardsCaret = (
  <svg
    width="7"
    height="6"
    viewBox="0 0 7 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.52 5.17945L6.556 2.14345V0.835453L3.52 3.87145L0.483999 0.835453V2.14345L3.52 5.17945Z"
      fill="#D0D8FF"
    />
  </svg>
);

const TransposeMenu: React.FC<{
  tuning: { [key: number]: string };
  numberOfStrings: number;
  transposePlus: (stringNum: number) => void;
  transposeMinus: (stringNum: number) => void;
}> = ({ tuning, numberOfStrings, transposePlus, transposeMinus }) => {
  const [customTuning] = useState(tuning);
  let strings = Array.from(
    { length: Object.keys(tuning).length },
    (_, i) => i + 1
  );
  function transposeNeckPlus() {
    // transpose all notes up a half step
    for (let i = 1; i <= numberOfStrings; i++) {
      transposePlus(i);
    }
  }
  function transposeNeckMinus() {
    // transpose all notes down a half step
    for (let i = 1; i <= numberOfStrings; i++) {
      transposeMinus(i);
    }
  }
  return (
    <div className="w-full flex flex-col gap-2">
      <span className="">Transpose</span>
      <div className="flex gap-2 leading-5 text-[#D0D8FF]">
        <button
          className="w-8 h-10 rounded-3xl bg-[#192149] text-[14px]"
          onClick={transposeNeckMinus}
        >
          -
        </button>
        <div className="flex flex-1 px-1 items-center justify-evenly text-[12px]">
          {strings.map((stringNumber) => {
            const note = tuning[stringNumber];
            return (
              <div
                key={stringNumber}
                className="flex flex-col items-center justify-center w-full h-full"
              >
                {customTuning && (
                  <button onClick={() => transposeMinus(Number(stringNumber))}>
                    {upwardsCaret}
                  </button>
                )}
                <span
                  className="h-full 
                    flex items-center justify-center 
                    text-center"
                >
                  {note}
                </span>
                {customTuning && (
                  <button onClick={() => transposePlus(Number(stringNumber))}>
                    {downwardsCaret}
                  </button>
                )}
              </div>
            );
          })}
        </div>
        <button
          className="w-8 h-10 rounded-3xl bg-[#192149] text-[14px]"
          onClick={transposeNeckPlus}
        >
          +
        </button>
      </div>
      <button>Custom tuning</button>
    </div>
  );
};

interface SettingsMenuProps {
  tuning: { [key: number]: string };
  numberOfStrings: number;
  stringOrientation: "right" | "left";
  settingsMode: boolean;
  transposePlus: (stringNum: number) => void;
  transposeMinus: (stringNum: number) => void;
  toggleStringOrientation: () => void;
  setNumberOfStrings: (num: number) => void;
}

const SettingsMenu: React.FC<SettingsMenuProps> = ({
  tuning,
  numberOfStrings,
  stringOrientation,
  settingsMode,
  transposePlus,
  transposeMinus,
  //   toggleStringOrientation,
  //   setNumberOfStrings,
}) => {
  const isSmallScreen = useScreenSize();

  let strings = Array.from(
    { length: Object.keys(tuning).length },
    (_, i) => i + 1
  );
  if (stringOrientation === "right") {
    strings = strings.reverse();
  }
  if (!isSmallScreen) {
    strings = strings.reverse();
  }
  return (
    <AnimatePresence>
      {settingsMode && (
        <motion.div
          initial={{ height: 0 }}
          animate={
            settingsMode
              ? { height: 280, paddingTop: 24 }
              : { height: 0, paddingTop: 0 }
          }
          exit={{ height: 0, paddingTop: 0 }}
          className="text-[#B3BDC7] text-[11px] leading-3 px-4 overflow-hidden w-full bg-[#181A24]"
        >
          <div className="flex flex-col items-center justify-center max-w-[328px] mx-auto">
            <TransposeMenu
              tuning={tuning}
              numberOfStrings={numberOfStrings}
              transposeMinus={transposeMinus}
              transposePlus={transposePlus}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SettingsMenu;
