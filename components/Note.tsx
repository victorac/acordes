"use client";

import React from "react";
import Draggable from "./Draggable";

interface NoteProps {
  id: string;
  interval: string;
  noteName: string;
  state: string;
}

const Note: React.FC<NoteProps> = ({ id, interval, noteName, state }) => {
  return (
    <Draggable
      id={id}
      className="w-[44px] h-[72px] sm:w-[72px] sm:h-[44px] flex"
    >
      <div
        id={id}
        className={`
        select-none
        touch-none
        w-full h-full rounded-[200px] p-1
        flex flex-col items-center justify-center
        ${interval === "R" ? "bg-[#E6FF81]" : "bg-[#E3EFF1]"}
        ${state === "dragging" ? "animate-bounce" : ""}
      `}
      >
        <div className="text-[#141935] text-[24px] font-semibold leading-7">
          {interval}
        </div>
        <div className="text-[#535B86] text-[14px] font-semibold leading-4">
          {noteName}
        </div>
      </div>
    </Draggable>
  );
};

export default Note;
