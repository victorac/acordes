"use client";

import React, { useEffect } from "react";
import Draggable from "./Draggable";
import { basePath } from "../config";
import { useRive } from "@rive-app/react-canvas";

interface NoteProps {
  id: string;
  interval: string;
  noteName: string;
}

const Note: React.FC<NoteProps> = ({ id, interval, noteName }) => {
  const { rive, } = useRive({
    src: `${basePath}/note-interaction-lab.riv`,
    artboard: "NoteComponentRive",
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  useEffect(() => {
    if (rive) {
      // console.log("Rive text was initially: ", rive.getTextRunValue("Run 1"));
      // rive.setTextRunValue("Run 1", "New Text!!");
      // console.log("Rive text is now: ", rive.getTextRunValue("Run 1"));
    }
  }, [rive]);

  return (
    <Draggable
      id={id}
      className="w-[44px] h-[72px] md:w-[72px] md:h-[44px] flex"
    >
      {/* <RiveComponent /> */}
      <div
        onTouchStart={(e) => {
          e.preventDefault(); // Prevent default touch behavior
          e.stopPropagation(); // Stop event from bubbling up
        }}
        className={`
        select-none
        touch-none
        w-full h-full rounded-[200px] p-1
        flex flex-col items-center justify-center
        ${interval === "R" ? "bg-[#E6FF81]" : "bg-[#E3EFF1]"}
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
