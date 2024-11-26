"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const PresetsMenu: React.FC<{
  selectedPreset: string;
  handleSelectPreset: (preset: string) => void;
  presets: string[];
}> = ({ selectedPreset, handleSelectPreset, presets }) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <span className="">Presets</span>
      <div className="flex h-[40px] leading-5 text-[#D0D8FF]">
        {presets.map((preset) => (
          <button
            key={preset}
            onClick={() => handleSelectPreset(preset)}
            className="w-full h-full rounded-3xl bg-[#192149] text-[14px] flex items-center justify-center"
          >
            <div className="flex flex-col items-center justify-center">
              <span
                className={`${
                  selectedPreset === preset ? "text-[#E3EFF1] font-bold" : ""
                }`}
              >
                {preset[0].toLocaleUpperCase() + preset.slice(1)}
              </span>
              {selectedPreset === preset && (
                <div className="w-1 h-1 bg-[#E3EFF1] rounded-full"></div>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

const replay = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_825_5301"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="18"
      height="18"
    >
      <rect width="18" height="18" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_825_5301)">
      <path
        d="M9 16.5C8.0625 16.5 7.18438 16.3219 6.36563 15.9656C5.54688 15.6094 4.83438 15.1281 4.22813 14.5219C3.62188 13.9156 3.14062 13.2031 2.78438 12.3844C2.42813 11.5656 2.25 10.6875 2.25 9.75H3.75C3.75 11.2125 4.25937 12.4531 5.27812 13.4719C6.29688 14.4906 7.5375 15 9 15C10.4625 15 11.7031 14.4906 12.7219 13.4719C13.7406 12.4531 14.25 11.2125 14.25 9.75C14.25 8.2875 13.7406 7.04688 12.7219 6.02812C11.7031 5.00938 10.4625 4.5 9 4.5H8.8875L10.05 5.6625L9 6.75L6 3.75L9 0.75L10.05 1.8375L8.8875 3H9C9.9375 3 10.8156 3.17813 11.6344 3.53438C12.4531 3.89062 13.1656 4.37188 13.7719 4.97813C14.3781 5.58438 14.8594 6.29688 15.2156 7.11563C15.5719 7.93438 15.75 8.8125 15.75 9.75C15.75 10.6875 15.5719 11.5656 15.2156 12.3844C14.8594 13.2031 14.3781 13.9156 13.7719 14.5219C13.1656 15.1281 12.4531 15.6094 11.6344 15.9656C10.8156 16.3219 9.9375 16.5 9 16.5Z"
        fill="#D0D8FF"
      />
    </g>
  </svg>
);

const add = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_825_5429"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="18"
      height="18"
    >
      <rect width="18" height="18" fill="#D0D8FF" />
    </mask>
    <g mask="url(#mask0_825_5429)">
      <path
        d="M8.25 9.75H3.75V8.25H8.25V3.75H9.75V8.25H14.25V9.75H9.75V14.25H8.25V9.75Z"
        fill="#D0D8FF"
      />
    </g>
  </svg>
);

const remove = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_825_5433"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="18"
      height="18"
    >
      <rect width="18" height="18" fill="#D0D8FF" />
    </mask>
    <g mask="url(#mask0_825_5433)">
      <path d="M3.75 9.75V8.25H14.25V9.75H3.75Z" fill="#D0D8FF" />
    </g>
  </svg>
);

const close = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_825_5383"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="18"
      height="18"
    >
      <rect width="18" height="18" fill="#D0D8FF" />
    </mask>
    <g mask="url(#mask0_825_5383)">
      <path
        d="M4.8 14.25L3.75 13.2L7.95 9L3.75 4.8L4.8 3.75L9 7.95L13.2 3.75L14.25 4.8L10.05 9L14.25 13.2L13.2 14.25L9 10.05L4.8 14.25Z"
        fill="#D0D8FF"
      />
    </g>
  </svg>
);

const caretUp = (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.332 11.3251L8.88203 14.7751L7.83203 13.7251L12.332 9.2251L16.832 13.7251L15.782 14.7751L12.332 11.3251Z"
      fill="#D0D8FF"
    />
  </svg>
);

const caretDown = (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.332 12.6749L8.88203 9.2249L7.83203 10.2749L12.332 14.7749L16.832 10.2749L15.782 9.2249L12.332 12.6749Z"
      fill="#D0D8FF"
    />
  </svg>
);

const TransposeMenu: React.FC<{
  tuning: { [key: number]: string };
  strings: number[];
  transposePlus: (stringNum: number) => void;
  transposeMinus: (stringNum: number) => void;
}> = ({ tuning, strings, transposePlus, transposeMinus }) => {
  const [isCustomTuning, setIsCustomTuning] = useState(false);
  function transposeNeckPlus() {
    // transpose all notes up a half step
    for (let i = 1; i <= strings.length; i++) {
      transposePlus(i);
    }
  }
  function transposeNeckMinus() {
    // transpose all notes down a half step
    for (let i = 1; i <= strings.length; i++) {
      transposeMinus(i);
    }
  }
  function toggleCustomTuning() {
    setIsCustomTuning(!isCustomTuning);
  }
  function resetTuning() {
    // reset tuning to standard
  }
  return (
    <div className="w-full h-[102px] flex flex-col gap-2">
      <span className="">Transpose</span>
      <div className="flex flex-1 h-full leading-5 text-[#D0D8FF]">
        <button
          className="w-8 h-full rounded-3xl bg-[#192149] text-[14px] flex items-center justify-center"
          onClick={!isCustomTuning ? transposeNeckMinus : resetTuning}
        >
          {!isCustomTuning ? remove : replay}
        </button>
        <div className="flex flex-1 px-1 items-center justify-evenly text-[12px] bg-[#192149] rounded-3xl">
          {strings.map((stringNumber) => {
            const note = tuning[stringNumber];
            return (
              <div
                key={stringNumber}
                className="flex flex-col items-center justify-center w-full h-full"
              >
                {isCustomTuning && (
                  <button onClick={() => transposeMinus(Number(stringNumber))}>
                    {caretUp}
                  </button>
                )}
                <span
                  className="h-full 
                    flex items-center justify-center 
                    text-center"
                >
                  {note.split("-")[0]}
                </span>
                {isCustomTuning && (
                  <button onClick={() => transposePlus(Number(stringNumber))}>
                    {caretDown}
                  </button>
                )}
              </div>
            );
          })}
        </div>
        <button
          className="w-8 h-full rounded-3xl bg-[#192149] text-[14px] flex items-center justify-center"
          onClick={!isCustomTuning ? transposeNeckPlus : toggleCustomTuning}
        >
          {!isCustomTuning ? add : close}
        </button>
      </div>
      {!isCustomTuning && (
        <button
          onClick={toggleCustomTuning}
          className="h-[32px] rounded-3xl w-full border border-[#D0D8FF] text-[#D0D8FF]"
        >
          Custom tuning
        </button>
      )}
    </div>
  );
};

const NumberOfStringsMenu: React.FC<{
  stringCount: number;
  handleChangeStringCount: (num: number) => void;
}> = ({ stringCount, handleChangeStringCount }) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <span className="">Number of strings</span>
      <div className="flex h-[40px] leading-5 text-[14px] text-[#D0D8FF] rounded-3xl bg-[#192149]">
        <button
          onClick={() => handleChangeStringCount(6)}
          className="w-full h-full pl-6 pr-4 pt-1 pb-[6px] flex flex-col items-center justify-center"
        >
          <span
            className={`${stringCount === 6 ? "text-[#E3EFF1] font-bold" : ""}`}
          >
            6
          </span>
          {stringCount === 6 && (
            <div className="w-1 h-1 bg-[#E3EFF1] rounded-full"></div>
          )}
        </button>

        <button
          onClick={() => handleChangeStringCount(5)}
          className="w-full h-full pl-6 pr-4 pt-1 pb-[6px] flex flex-col items-center justify-center"
        >
          <span
            className={`${stringCount === 5 ? "text-[#E3EFF1] font-bold" : ""}`}
          >
            5
          </span>
          {stringCount === 5 && (
            <div className="w-1 h-1 bg-[#E3EFF1] rounded-full"></div>
          )}
        </button>

        <button
          onClick={() => handleChangeStringCount(4)}
          className="w-full h-full pl-6 pr-4 pt-1 pb-[6px] flex flex-col items-center justify-center"
        >
          <span
            className={`${stringCount === 4 ? "text-[#E3EFF1] font-bold" : ""}`}
          >
            4
          </span>
          {stringCount === 4 && (
            <div className="w-1 h-1 bg-[#E3EFF1] rounded-full"></div>
          )}
        </button>
      </div>
    </div>
  );
};

const StringOrientationMenu: React.FC<{
  stringOrientation: string;
  toggleStringOrientation: () => void;
}> = ({ stringOrientation, toggleStringOrientation }) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <span className="">String orientation</span>
      <div className="flex h-[40px] text-[14px] leading-5 text-[#D0D8FF] rounded-3xl bg-[#192149]">
        <button
          onClick={toggleStringOrientation}
          className="w-full h-full pl-6 pr-4 pt-1 pb-[6px] flex flex-col items-center justify-center"
        >
          <span
            className={`${
              stringOrientation === "right" ? "text-[#E3EFF1] font-bold" : ""
            }`}
          >
            Right
          </span>
          {stringOrientation === "right" && (
            <div className="w-1 h-1 bg-[#E3EFF1] rounded-full"></div>
          )}
        </button>
        <button
          onClick={toggleStringOrientation}
          className="w-full h-full pl-6 pr-4 pt-1 pb-[6px] flex flex-col items-center justify-center"
        >
          <span
            className={`${
              stringOrientation === "left" ? "text-[#E3EFF1] font-bold" : ""
            }`}
          >
            Left
          </span>
          {stringOrientation === "left" && (
            <div className="w-1 h-1 bg-[#E3EFF1] rounded-full"></div>
          )}
        </button>
      </div>
    </div>
  );
};

interface SettingsMenuProps {
  tuning: { [key: number]: string };
  stringCount: number;
  stringOrientation: "right" | "left";
  settingsMode: boolean;
  selectedPreset: string;
  presets: string[];
  strings: number[];
  handleSelectPreset: (preset: string) => void;
  transposePlus: (stringNum: number) => void;
  transposeMinus: (stringNum: number) => void;
  toggleStringOrientation: () => void;
  handleChangeStringCount: (num: number) => void;
}

const SettingsMenu: React.FC<SettingsMenuProps> = ({
  tuning,
  stringCount,
  stringOrientation,
  settingsMode,
  selectedPreset,
  presets,
  strings,
  handleSelectPreset,
  transposePlus,
  transposeMinus,
  toggleStringOrientation,
  handleChangeStringCount,
}) => {
  const localStrings = [...strings].sort((a, b) => a - b);
  if (stringOrientation === "right") {
    localStrings.reverse();
  }
  return (
    <AnimatePresence>
      {settingsMode && (
        <motion.div
          initial={{ height: 0 }}
          animate={
            settingsMode
              ? { height: 350, paddingTop: 24 }
              : { height: 0, paddingTop: 0 }
          }
          exit={{ height: 0, paddingTop: 0 }}
          className="text-[#B3BDC7] text-[11px] leading-3 px-4 overflow-hidden w-full bg-[#181A24] rounded-b-3xl"
        >
          <div className="flex flex-col items-center justify-center max-w-[328px] mx-auto gap-4">
            <PresetsMenu
              selectedPreset={selectedPreset}
              presets={presets}
              handleSelectPreset={handleSelectPreset}
            />
            <TransposeMenu
              tuning={tuning}
              strings={localStrings}
              transposeMinus={transposeMinus}
              transposePlus={transposePlus}
            />
            <div className="flex items-center w-full gap-4 justify-between">
              <NumberOfStringsMenu
                stringCount={stringCount}
                handleChangeStringCount={handleChangeStringCount}
              />
              <StringOrientationMenu
                stringOrientation={stringOrientation}
                toggleStringOrientation={toggleStringOrientation}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SettingsMenu;
