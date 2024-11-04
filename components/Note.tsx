import React from "react";
import Draggable from "./Draggable";
import Rive from "@rive-app/react-canvas";
import { basePath } from "../config";

interface NoteProps {
  id: string;
}

const Note: React.FC<NoteProps> = ({ id }) => {
  return (
    <Draggable id={id}>
      <Rive
        src={`${basePath}/note-interaction-lab.riv`}
        stateMachines="State Machine 1"
        artboard="NoteComponentRive"
        className="w-[50px] h-[147px] md:w-[147px] md:h-[46px]"
      />
    </Draggable>
  );
};

export default Note;
