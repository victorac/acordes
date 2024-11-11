import React from "react";
import Droppable from "./Droppable";

interface GridCellProps {
  id: string;
  noteName?: string;
  interval?: string;
  caseNumber: number;
  string: number;
  onAddNote: (string: number, caseNumber: number) => void;
  noteState?: string;
  children?: React.ReactNode;
}

const GridCell: React.FC<GridCellProps> = ({
  id,
  children,
  string,
  caseNumber,
  noteState,
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
      w-[49px] 
      h-[159px] 
      sm:w-[159px] 
      sm:h-[49px] 
      flex 
      items-center 
      justify-center 
      relative
      before:absolute
      before:content-['']
      before:h-full
      before:bg-[#E3EFF1]
      before:left-1/2
      before:-translate-x-1/2
      sm:before:w-full
      sm:before:top-1/2
      sm:before:-translate-y-1/2
      sm:before:left-0
      sm:before:translate-x-0
      ${thicknessMap[string]}
      `}
    >
      {children}
      {!noteState && (
        <button
          onClick={() => onAddNote(string, caseNumber)}
          className="w-6 h-8 rounded-full bg-[#3E4648] px-1 py-2 flex items-center justify-center z-10 text-[#E3EFF1] select-none"
        >
          +
        </button>
      )}
      <div className="absolute top-0 left-0 w-fit text-white">
        {caseNumber + 1}
      </div>
    </Droppable>
  );
};
export default GridCell;
