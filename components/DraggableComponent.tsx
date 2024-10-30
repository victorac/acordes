import React, { useRef, useEffect, useState } from 'react';

const GRID_SIZE = 50; // Size of each grid cell in pixels
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

const DraggableComponent: React.FC<DraggableComponentProps> = ({ id, initialX, initialY }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<Position>({ x: initialX, y: initialY });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startPos, setStartPos] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const container = element.parentElement;
    if (!container) return;

    const getEventPosition = (e: MouseEvent | TouchEvent): Position => {
      if ('touches' in e && e.touches.length) {
        return { x: e.touches[0].clientX, y: e.touches[0].clientY };
      } else if ('clientX' in e) {
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
      let newX = x - startPos.x - containerRect.left;
      let newY = y - startPos.y - containerRect.top;

      // Snap to grid
      newX = Math.round(newX / GRID_SIZE) * GRID_SIZE;
      newY = Math.round(newY / GRID_SIZE) * GRID_SIZE;

      // Update position
      setPosition({ x: newX, y: newY });

      // Auto-scroll
      if (newX < SCROLL_THRESHOLD) {
        container.scrollLeft -= GRID_SIZE;
      } else if (newX > containerRect.width - SCROLL_THRESHOLD) {
        container.scrollLeft += GRID_SIZE;
      }

      if (newY < SCROLL_THRESHOLD) {
        container.scrollTop -= GRID_SIZE;
      } else if (newY > containerRect.height - SCROLL_THRESHOLD) {
        container.scrollTop += GRID_SIZE;
      }
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    // Mouse events
    element.addEventListener('mousedown', handleStart as EventListener);
    window.addEventListener('mousemove', handleMove as EventListener);
    window.addEventListener('mouseup', handleEnd);

    // Touch events
    element.addEventListener('touchstart', handleStart as EventListener);
    window.addEventListener('touchmove', handleMove as EventListener);
    window.addEventListener('touchend', handleEnd);

    return () => {
      // Cleanup
      element.removeEventListener('mousedown', handleStart as EventListener);
      window.removeEventListener('mousemove', handleMove as EventListener);
      window.removeEventListener('mouseup', handleEnd);
      element.removeEventListener('touchstart', handleStart as EventListener);
      window.removeEventListener('touchmove', handleMove as EventListener);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, position, startPos]);

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${GRID_SIZE}px`,
        height: `${GRID_SIZE}px`,
        backgroundColor: isDragging ? 'lightblue' : 'lightgray',
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        touchAction: 'none', // Prevents scrolling on touch devices
      }}
    >
      Drag me {id}
    </div>
  );
};

export default DraggableComponent;
