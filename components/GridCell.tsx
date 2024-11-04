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
    <Droppable id={id} className="border border-red-300 w-[52px] h-[149px] md:w-[149px] md:h-[48px]">
      {children}
    </Droppable>
  );
};
export default GridCell;
