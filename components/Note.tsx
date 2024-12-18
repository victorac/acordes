"use client";

import React from "react";
import Draggable from "./Draggable";

interface NoteProps {
  id: string;
  interval: string;
  noteName: string;
  state: { status: string; initialPosition: { x: number; y: number } };
  stringNumber: number;
  fretNumber: number;
  editMode: boolean;
}

const Note: React.FC<NoteProps> = ({
  id,
  interval,
  noteName,
  state,
  editMode
}) => {

  return (
    <Draggable
      id={id}
      className="w-[44px] h-[72px] sm:w-[72px] sm:h-[44px] flex relative"
      state={state}
      editMode={editMode}
    >
      <div
        id={id}
        className={`
        select-none
        w-full h-full rounded-[200px] p-1
        flex flex-col items-center justify-center
        ${interval === "R" ? "bg-[#E6FF81]" : "bg-[#E3EFF1]"}
        ${state.status === "dragging" ? "" : ""}
      `}
      >
        <div className="text-[#141935] text-[24px] font-semibold leading-7">
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
      </div>
    </Draggable>
  );
};

export default Note;
