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
  onNutClick: (stringNum: number) => void;
}

const Nut: React.FC<NutProps> = ({
  interval,
  editMode,
  stringNum,
  isScrolledDown,
  isScrolledUp,
  onNutClick,
}) => {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (selected) {
      const timeout = setTimeout(() => {
        setSelected(false);
      }, 1000);
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
        <motion.img
          key="remove"
          src="remove_nut.svg"
          alt="remove nut"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={imageVariants}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          layout
        />
      ) : (
        <motion.img
          key="add"
          src="add_nut.svg"
          alt="add nut"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={imageVariants}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          layout
        />
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
        className="flex items-center justify-center w-[49px] h-[28px] sm:h-[49px] sm:w-[28px] p-1 text-[#D0D8FF] text-[16px] leading-5 font-semibold"
      >
        <div className=" p-[6px] flex items-center justify-center">
          <div className="w-[20px] h-[20px] rounded-full bg-[#192149] hover:bg-[#212C60] flex items-center justify-center">
            {editModeContent}
          </div>
        </div>
      </button>
    );
  }

  const isHidden = isScrolledDown && !isScrolledUp;

  return (
    <div
      className={`
      flex items-center justify-center
      w-[49px]
      sm:h-[49px] 
      ${isHidden ? "sm:w-fit" : "sm:w-[28px]"}
      p-1
      text-[#D0D8FF] 
      text-[16px] 
      leading-5 
      font-semibold    
      `}
    >
      {isHidden && interval ? (
        <div className={`rounded-full h-1 w-1 bg-[#B3BDC7]`}></div>
      ) : (
        interval
      )}
    </div>
  );
};

export default Nut;
