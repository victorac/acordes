import React from "react";
import Droppable from "./Droppable";

interface GridCellProps {
  id: string;
  noteName?: string;
  interval?: string;
  caseNumber?: number;
  string: number;
  children?: React.ReactNode;
}

const GridCell: React.FC<GridCellProps> = ({ id, children, string }) => {
  const thicknessMap: { [key: number]: string } = {
    1: 'before:w-[1px] md:before:h-[1px]',
    2: 'before:w-[2px] md:before:h-[2px]',
    3: 'before:w-[3px] md:before:h-[3px]',
    4: 'before:w-[4px] md:before:h-[4px]',
    5: 'before:w-[5px] md:before:h-[5px]',
    6: 'before:w-[6px] md:before:h-[6px]',
  };
  return (
    <Droppable
      id={id}
      className={`
        w-[49px] 
        h-[159px] 
        md:w-[159px] 
        md:h-[49px] 
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
        md:before:w-full
        md:before:top-1/2
        md:before:-translate-y-1/2
        md:before:left-0
        md:before:translate-x-0
        ${thicknessMap[string]}
        `}
    >
      {children}
    </Droppable>
  );
};
export default GridCell;
