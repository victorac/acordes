import React from "react";
import { useDroppable } from "@dnd-kit/core";

interface DroppableProps {
  id: string;
  children?: React.ReactNode;
  className?: string;
}

const Droppable: React.FC<DroppableProps> = ({ id, className, children }) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });
  const style = {
    color: isOver ? "green" : undefined,
  };
  return (
    <div className={className} ref={setNodeRef} style={{ ...style }}>
      {children}
    </div>
  );
};
export default Droppable;
