import React from "react";
import DraggableComponent from "./DraggableComponent";

const GridContainer: React.FC = () => {
  return (
    <div
      className="grid grid-cols-6 grid-rows-24 sm:grid-cols-24 sm:grid-rows-6 
                 overflow-y-auto sm:overflow-y-hidden sm:overflow-x-auto 
                 h-full w-full relative"
    >
      <DraggableComponent id={1} initialX={0} initialY={0} />
    </div>
  );
};

export default GridContainer;
