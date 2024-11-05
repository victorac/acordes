"use client";

import React, { useEffect } from "react";
import Draggable from "./Draggable";
import { basePath } from "../config";
import { useRive } from "@rive-app/react-canvas";

interface NoteProps {
  id: string;
}

const Note: React.FC<NoteProps> = ({ id }) => {
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
    <Draggable id={id} className="w-[48px] h-[80px] md:w-[80px] md:h-[48px]">
      <RiveComponent />
    </Draggable>
  );
};

export default Note;
