"use client";
import React, { useEffect, useState } from "react";

interface NutProps {
  interval: string;
  editMode: boolean;
  stringNum: number;
  onNutClick: (stringNum: number) => void;
}

const Nut: React.FC<NutProps> = ({
  interval,
  editMode,
  stringNum,
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

  let editModeContent = interval ? (
    <img src="remove_nut.svg" alt="remove nut" />
  ) : (
    <img src="add_nut.svg" alt="add nut" />
  );

  if (selected) {
    editModeContent = <img src="selected_nut.svg" alt="selected nut" />;
  }

  if (editMode) {
    return (
      <button
        onClick={handleNutClick}
        className="flex items-center justify-center w-[49px] sm:h-[49px] sm:w-[28px] p-1 text-[#D0D8FF] text-[16px] leading-5 font-semibold"
      >
        <div className="w-8 h-8 p-[6px]">
          <div className="w-[20px] h-[20px] rounded-full bg-[#192149] hover:bg-[#212C60] flex items-center justify-center">
            {editModeContent}
          </div>
        </div>
      </button>
    );
  }

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
      {interval ? (
        interval
      ) : (
        <div className="rounded-full h-1 w-1 bg-[#B3BDC7]"></div>
      )}
    </div>
  );
};

export default Nut;
