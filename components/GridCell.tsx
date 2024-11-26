import React from "react";
import Droppable from "./Droppable";

interface GridCellProps {
  id: string;
  noteName?: string;
  interval?: string;
  fretNumber: number;
  string: number;
  onAddNote: (string: number, caseNumber: number) => void;
  noteState?: string;
  editMode: boolean;
  cellDimensions: { height: number; width: number };
  children?: React.ReactNode;
}

const GridCell: React.FC<GridCellProps> = ({
  id,
  children,
  string,
  fretNumber,
  noteState,
  editMode,
  cellDimensions,
  onAddNote,
}) => {
  const thicknessMap: { [key: number]: string } = {
    1: "before:w-[1px] sm:before:h-[1px]",
    2: "before:w-[2px] sm:before:h-[2px]",
    3: "before:w-[3px] sm:before:h-[3px]",
    4: "before:w-[4px] sm:before:h-[4px]",
    5: "before:w-[5px] sm:before:h-[5px]",
    6: "before:w-[6px] sm:before:h-[6px]",
  };
  return (
    <Droppable
      id={id}
      className={`
      flex 
      items-center 
      justify-center 
      relative
      before:absolute
      before:content-['']
      before:h-full
      ${noteState ? "before:bg-[#E3EFF1]" : "before:bg-[#3E4648]"}
      before:left-1/2
      before:-translate-x-1/2
      sm:before:w-full
      sm:before:top-1/2
      sm:before:-translate-y-1/2
      sm:before:left-0
      sm:before:translate-x-0
      ${thicknessMap[string]}
      `}
      style={{width: cellDimensions.width, height: cellDimensions.height}}
    >
      {children}
      {!noteState && editMode && (
        <button
          onClick={() => onAddNote(string, fretNumber)}
          className="w-6 h-8 rounded-full bg-[#3E4648] px-1 py-2 flex items-center justify-center z-10 text-[#E3EFF1] select-none"
        >
          +
        </button>
      )}
    </Droppable>
  );
};
export default GridCell;
