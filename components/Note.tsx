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
  const { rive, RiveComponent } = useRive({
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
    <Draggable id={id} className="w-[48px] h-[80px] md:w-[80px] md:h-[48px] flex">
      <RiveComponent />
      <div
        className={`
      w-[44px] h-[72px] md:w-[80px] md:h-[48px] rounded-[200px] p-1 flex flex-col items-center justify-center
      ${interval === "R" ? "bg-[#E6FF81]" : "bg-[#E3EFF1]"}
      `}
      >
        <span className="text-[#141935] text-[24px] font-semibold leading-7">
          {interval}
        </span>
        <span className="text-[#535B86] text-[14px] font-semibold leading-4">
          {noteName}
        </span>
      </div>
    </Draggable>
  );
};

export default Note;
