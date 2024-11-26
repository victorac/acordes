"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Animation variants
const imageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

interface NutProps {
  interval: string;
  editMode: boolean;
  stringNum: number;
  isScrolledDown: boolean;
  isScrolledUp: boolean;
  cellDimensions: { height: number; width: number };
  onNutClick: (stringNum: number) => void;
  noteName: string;
}

const Nut: React.FC<NutProps> = ({
  interval,
  editMode,
  stringNum,
  isScrolledDown,
  isScrolledUp,
  cellDimensions,
  onNutClick,
  noteName,
}) => {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (selected) {
      const timeout = setTimeout(() => {
        setSelected(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [selected]);

  function handleNutClick() {
    if (!interval) {
      setSelected(true);
    }
    onNutClick(stringNum);
  }

  let editModeContent = (
    <AnimatePresence mode="wait">
      {interval ? (
        <motion.div
          className={`
        select-none
        rounded-[200px] p-1
        w-[41px] h-[72px] sm:w-[72px] sm:h-[41px]
        flex flex-col items-center justify-center
        bg-[#212C60]
      `}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={imageVariants}
          transition={{ duration: 0.15, ease: "easeInOut" }}
          layout="size"
        >
          <div className="text-[#E3EFF1] text-[24px] font-semibold leading-7">
            {interval}
          </div>
          <div className="text-[#535B86] flex flex-col sm:flex-row sm:gap-[2px] justify-center items-center text-[14px] font-semibold leading-4">
            {noteName.includes("-") ? (
              <>
                <div>{noteName.split("-")[0]}</div>
                <div className="hidden sm:block rounded-full h-1 w-1 bg-[#535B86]"></div>
                <div>{noteName.split("-")[1]}</div>
              </>
            ) : (
              noteName
            )}
          </div>
        </motion.div>
      ) : (
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          key="add"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={imageVariants}
          transition={{ duration: 0.15, ease: "easeInOut" }}
          className="fill-[#192149] hover:fill-[#212C60] stroke-none"
          layout
        >
          <rect width="20" height="20" rx="10" />
          <path d="M10 16V4" stroke="#E3EFF1" strokeWidth="2" />
          <path d="M4 10H16" stroke="#E3EFF1" strokeWidth="2" />
        </motion.svg>
      )}
    </AnimatePresence>
  );

  if (selected) {
    editModeContent = (
      <AnimatePresence mode="wait">
        <motion.img
          key="selected"
          src="selected_nut.svg"
          alt="selected nut"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={imageVariants}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          layout
        />
      </AnimatePresence>
    );
  }

  if (editMode) {
    return (
      <button
        onClick={handleNutClick}
        style={{
          width:
            cellDimensions.width === 159 ? "fit-content" : cellDimensions.width,
          height:
            cellDimensions.height === 159
              ? "fit-content"
              : cellDimensions.height,
        }}
        className="flex items-center justify-center p-1 text-[#D0D8FF] text-[16px] leading-5 font-semibold"
      >
        {editModeContent}
      </button>
    );
  }

  const isHidden = isScrolledDown && !isScrolledUp;

  return (
    <motion.div
      style={{
        width:
          cellDimensions.width === 159 ? "fit-content" : cellDimensions.width,
        height:
          cellDimensions.height === 159 ? "fit-content" : cellDimensions.height,
      }}
      className={`
      flex items-center justify-center
      p-1
      text-[#D0D8FF] 
      text-[16px] 
      leading-5 
      font-semibold    
      `}
      transition={{ duration: 0.05, ease: "easeInOut" }}
      layout="size"
    >
      {isHidden && interval ? (
        <div className={`rounded-full h-1 w-1 bg-[#B3BDC7]`}></div>
      ) : (
        interval
      )}
    </motion.div>
  );
};

export default Nut;
