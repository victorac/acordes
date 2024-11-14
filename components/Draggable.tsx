import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { motion } from "framer-motion";

interface DraggableProps {
  id: string;
  state: string;
  children?: React.ReactNode;
  className?: string;
}

const Draggable: React.FC<DraggableProps> = ({
  children,
  state,
  className,
  id,
}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        zIndex: 3000,
      }
    : { zIndex: 1000 };

  let transition: {
    type: string;
    ease?: string;
    duration?: number;
    delay?: number;
  } = {
    type: "spring",
  };
  if (state === "dragging") {
    transition = {
      type: "tween",
      ease: "easeOut",
      duration: 0.1,
      delay: -0.01,
    };
  }
  return (
    <motion.div
      className={`touch-none ${className}`}
      ref={setNodeRef}
      style={{ zIndex: style.zIndex }}
      {...listeners}
      {...attributes}
      animate={{ x: transform?.x ?? 0, y: transform?.y ?? 0 }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default Draggable;
