import React from "react";
import { useDroppable } from "@dnd-kit/core";

interface DroppableProps {
  id: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Droppable: React.FC<DroppableProps> = ({
  id,
  className,
  style,
  children,
}) => {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <div style={style} className={className} ref={setNodeRef}>
      {children}
    </div>
  );
};
export default Droppable;
