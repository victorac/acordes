import React from "react";
import DraggableComponent from "./DraggableComponent";

const Neck: React.FC = () => {
  return (
    <div
      className="grid grid-cols-[repeat(6,50px)] grid-rows-[repeat(24,147px)] md:grid-cols-[repeat(24,50px)] md:grid-rows-[repeat(6,147px)]
                 overflow-y-auto md:overflow-y-hidden md:overflow-x-auto
                 h-full w-full relative flex-grow"
    >
      <DraggableComponent id={1} initialX={0} initialY={0} />
      <div className="border-2 border-red-300 w-[50px] h-[147px]">6</div>
      <div className="border-2 border-red-300 w-[50px] h-[147px]">5</div>
      <div className="border-2 border-red-300 w-[50px] h-[147px]">4</div>
      <div className="border-2 border-red-300 w-[50px] h-[147px]">3</div>
      <div className="border-2 border-red-300 w-[50px] h-[147px]">2</div>
      <div className="border-2 border-red-300 w-[50px] h-[147px]">1</div>

      <div className="border-2 border-red-300 w-[50px] h-[147px]">6</div>
      <div className="border-2 border-red-300 w-[50px] h-[147px]">5</div>
      <div className="border-2 border-red-300 w-[50px] h-[147px]">4</div>
      <div className="border-2 border-red-300 w-[50px] h-[147px]">3</div>
      <div className="border-2 border-red-300 w-[50px] h-[147px]">2</div>
      <div className="border-2 border-red-300 w-[50px] h-[147px]">1</div>

      <div className="border-2 border-red-300 w-[50px] h-[147px]">6</div>
      <div className="border-2 border-red-300 w-[50px] h-[147px]">5</div>
      <div className="border-2 border-red-300 w-[50px] h-[147px]">4</div>
      <div className="border-2 border-red-300 w-[50px] h-[147px]">3</div>
      <div className="border-2 border-red-300 w-[50px] h-[147px]">2</div>
      <div className="border-2 border-red-300 w-[50px] h-[147px]">1</div>

      <div className="border-2 border-red-300 w-[50px] h-[147px]">6</div>
      <div className="border-2 border-red-300 w-[50px] h-[147px]">5</div>
      <div className="border-2 border-red-300 w-[50px] h-[147px]">4</div>
      <div className="border-2 border-red-300 w-[50px] h-[147px]">3</div>
      <div className="border-2 border-red-300 w-[50px] h-[147px]">2</div>
      <div className="border-2 border-red-300 w-[50px] h-[147px]">1</div>
    </div>
  );
};

export default Neck;
