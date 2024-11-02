"use client";
import React, { useRef, useEffect, useState } from "react";
import Rive from "@rive-app/react-canvas";
import { basePath } from '../config'

const GRID_WIDTH = 50; // Width of each grid cell in pixels
const GRID_HEIGHT = 147; // Height of each grid cell in pixels
const CELL_WIDTH = 50;
const CELL_HEIGHT = 72;
const X_SCROLL_THRESHOLD = 50; // Distance from border to start scrolling
const Y_SCROLL_THRESHOLD = 147; // Distance from border to start scrolling
const SCROLL_SPEED = 10; // Pixels to scroll per frame

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
    y: initialY + GRID_HEIGHT / 2 - CELL_HEIGHT / 2,
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

      // Calculate new position relative to the container
      const newX = x - startPos.x;
      const newY = y - startPos.y + container.scrollTop;

      // Update position
      setPosition({ x: newX, y: newY });

      // Auto-scroll
      if (x < container.scrollLeft + X_SCROLL_THRESHOLD) {
        container.scrollLeft -= SCROLL_SPEED;
      } else if (x > containerRect.right - X_SCROLL_THRESHOLD) {
        container.scrollLeft += SCROLL_SPEED;
      }
      if (y < containerRect.top + Y_SCROLL_THRESHOLD) {
        container.scrollTop -= SCROLL_SPEED;
      } else if (y > containerRect.bottom - Y_SCROLL_THRESHOLD) {
        container.scrollTop += SCROLL_SPEED;
      }
    };

    const handleEnd = () => {
      setIsDragging(false);
      // Get center of the cell
      const centerX = position.x + CELL_WIDTH / 2;
      const centerY = position.y + CELL_HEIGHT / 2;
      // Snap cell to neares grid cell
      const newCellX =
        Math.max(Math.floor(centerX / GRID_WIDTH), 0) * GRID_WIDTH;
      const newCellY =
        Math.max(Math.floor(centerY / GRID_HEIGHT), 0) * GRID_HEIGHT +
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
      className="w-full h-full"
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${CELL_WIDTH}px`,
        height: `${CELL_HEIGHT}px`,
        cursor: "move",
        touchAction: "none", // Prevents scrolling on touch devices
      }}
    >
      <Rive
        src={`${basePath}/note-interaction-lab.riv`}
        stateMachines="State Machine 1"
        artboard="NoteComponentRive"
      />
    </div>
  );
};

export default DraggableComponent;
