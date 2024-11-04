import React from "react";
import Droppable from "./Droppable";

interface GridCellProps {
  id: string;
  noteName?: string;
  interval?: string;
  caseNumber?: number;
  string?: number;
  children?: React.ReactNode;
}

const GridCell: React.FC<GridCellProps> = ({ id, children }) => {
  return (
    <Droppable id={id} className="border border-red-300 w-[50px] h-[147px] md:w-[147px] md:h-[50px]">
      {children}
    </Droppable>
  );
};
export default GridCell;
