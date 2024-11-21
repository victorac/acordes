"use client";
import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { motion } from "framer-motion";

interface DraggableProps {
  id: string;
  state: {status:string, initialPosition: {x:number, y:number}};
  editMode: boolean;
  children?: React.ReactNode;
  className?: string;
}

const Draggable: React.FC<DraggableProps> = ({
  children,
  state,
  editMode,
  className,
  id,
}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const dragContraintsProps = !editMode ? {
    drag: true,
    dragConstraints: {left: 0, right: 0, top: 0, bottom: 0},
    dragElastic: 0.1,
    dragMomentum: false,
    dragTransition:{ bounceStiffness: 600, bounceDamping: 10 }
  } : {};

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
  if (state.status === "dragging") {
    transition = {
      type: "tween",
      ease: "easeOut",
      duration: 0.1,
      delay: -0.01,
    };
  }
  return (
    <>
      {!editMode && (
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[44px] h-[72px] sm:w-[72px] sm:h-[44px] the-container"
        />
      )}
      <motion.div
        className={`touch-none ${className}`}
        ref={setNodeRef}
        style={{ zIndex: style.zIndex }}
        {...listeners}
        {...attributes}
        initial={state.initialPosition}
        animate={{ x: transform?.x ?? 0, y: transform?.y ?? 0 }}
        transition={transition}
        {...dragContraintsProps}
      >
        {children}
      </motion.div>
    </>
  );
};

export default Draggable;
