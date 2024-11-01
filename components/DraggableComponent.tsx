"use client";
import React, { useRef, useEffect, useState } from "react";

const GRID_WIDTH = 50; // Width of each grid cell in pixels
const GRID_HEIGHT = 147; // Height of each grid cell in pixels
const CELL_WIDTH = 50;
const CELL_HEIGHT = 72;
const SCROLL_THRESHOLD = 50; // Distance from border to start scrolling

interface Position {
  x: number;
  y: number;
}

interface DraggableComponentProps {
  id: string | number;
  initialX: number;
  initialY: number;
}

const DraggableComponent: React.FC<DraggableComponentProps> = ({
  id,
  initialX,
  initialY,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<Position>({
    x: initialX,
    y: initialY + GRID_HEIGHT/2 - CELL_HEIGHT/2,
  });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startPos, setStartPos] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const container = element.parentElement;
    if (!container) return;

    const getEventPosition = (e: MouseEvent | TouchEvent): Position => {
      if ("touches" in e && e.touches.length) {
        return { x: e.touches[0].clientX, y: e.touches[0].clientY };
      } else if ("clientX" in e) {
        return { x: e.clientX, y: e.clientY };
      }
      return { x: 0, y: 0 }; // Fallback, should never happen
    };

    const handleStart = (e: MouseEvent | TouchEvent) => {
      setIsDragging(true);
      const { x, y } = getEventPosition(e);
      setStartPos({ x: x - position.x, y: y - position.y });
      e.preventDefault(); // Prevent text selection
    };

    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;

      const { x, y } = getEventPosition(e);
      const containerRect = container.getBoundingClientRect();

      // Calculate new position
      const newX = x - startPos.x;
      const newY = y - startPos.y;

      // Update position
      setPosition({ x: newX, y: newY });

      // Auto-scroll
      if (newX < SCROLL_THRESHOLD) {
        container.scrollLeft -= GRID_WIDTH;
      } else if (newX > containerRect.width - SCROLL_THRESHOLD) {
        container.scrollLeft += GRID_WIDTH;
      }

      if (newY < SCROLL_THRESHOLD) {
        container.scrollTop -= GRID_HEIGHT;
      } else if (newY > containerRect.height - SCROLL_THRESHOLD) {
        container.scrollTop += GRID_HEIGHT;
      }
    };

    const handleEnd = () => {
      setIsDragging(false);
      // Get center of the cell
      const centerX = position.x + CELL_WIDTH / 2;
      const centerY = position.y + CELL_HEIGHT / 2;
      console.log("centerX", centerX);
      console.log("centerY", centerY);
      console.log(position.x, position.y);
      // Snap cell to neares grid cell
      const newCellX = Math.floor(centerX / GRID_WIDTH) * GRID_WIDTH;
      const newCellY =
        Math.floor(centerY / GRID_HEIGHT) * GRID_HEIGHT +
        GRID_HEIGHT / 2 -
        CELL_HEIGHT / 2;
      // Update position
      setPosition({ x: newCellX, y: newCellY });
    };

    // Mouse events
    element.addEventListener("mousedown", handleStart as EventListener);
    window.addEventListener("mousemove", handleMove as EventListener);
    window.addEventListener("mouseup", handleEnd);

    // Touch events
    element.addEventListener("touchstart", handleStart as EventListener);
    window.addEventListener("touchmove", handleMove as EventListener);
    window.addEventListener("touchend", handleEnd);

    return () => {
      // Cleanup
      element.removeEventListener("mousedown", handleStart as EventListener);
      window.removeEventListener("mousemove", handleMove as EventListener);
      window.removeEventListener("mouseup", handleEnd);
      element.removeEventListener("touchstart", handleStart as EventListener);
      window.removeEventListener("touchmove", handleMove as EventListener);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, position, startPos]);

  return (
    <div
      ref={ref}
      className="rounded-[200px]"
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${CELL_WIDTH}px`,
        height: `${CELL_HEIGHT}px`,
        backgroundColor: isDragging ? "lightblue" : "lightgray",
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
        touchAction: "none", // Prevents scrolling on touch devices
      }}
    >
      Drag me {id}
    </div>
  );
};

export default DraggableComponent;
