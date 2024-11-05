"use client";
import React, { useState, useLayoutEffect } from "react";
import Note from "./Note";
import GridCell from "./GridCell";
import { DragEndEvent } from "@dnd-kit/core";
import useScreenSize from "@/hooks/useScreenSize";
import { restrictToFirstScrollableAncestor } from "@dnd-kit/modifiers";
import { DndContext } from "@dnd-kit/core";

const INITIAL_CASES = 24;
const CASES_WINDOW_SIZE = 24;
const MIN_SCROLL_THRESHOLD = 100;

const Neck: React.FC = () => {
  const strings = [6, 5, 4, 3, 2, 1];

  const [parent, setParent] = useState<string | number | null>("cell-6-0");
  const [casesArray, setCasesArray] = useState(
    Array.from({ length: CASES_WINDOW_SIZE }, (_, i) => i)
  );
  const [isClient, setIsClient] = useState(false);
  const isSmallScreen = useScreenSize();

  useLayoutEffect(() => {
    setIsClient(true);
  }, []);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    const updateCasesArray = () => {
      setCasesArray((prev) => [
        ...prev,
        ...Array.from({ length: CASES_WINDOW_SIZE }, (_, i) => prev.length + i),
      ]);
    };

    if (isSmallScreen) {
      const isNearBottom =
        target.scrollTop + target.clientHeight >=
        target.scrollHeight - MIN_SCROLL_THRESHOLD;
      const isAtTop = target.scrollTop === 0;

      if (isNearBottom) updateCasesArray();
      if (isAtTop)
        setCasesArray(Array.from({ length: INITIAL_CASES }, (_, i) => i));
    } else {
      const isNearRight =
        target.scrollLeft + target.clientWidth >=
        target.scrollWidth - MIN_SCROLL_THRESHOLD;
      const isAtLeft = target.scrollLeft === 0;

      if (isNearRight) updateCasesArray();
      if (isAtLeft)
        setCasesArray(Array.from({ length: INITIAL_CASES }, (_, i) => i));
    }
  };

  function handleDragEnd(event: DragEndEvent) {
    const { over } = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    if (over?.id) {
      setParent(over.id);
    }
  }

  // Show loading or placeholder until client-side
  if (!isClient) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <div className="animate-pulse text-[#B3BDC7]">Loading...</div>
      </div>
    );
  }

  const draggableNote = <Note id="draggable" />;
  const neckCases = Array.from({ length: casesArray.length }, (_, caseNum) => {
    const id = `case-${caseNum}`;
    return (
      <div id={id} key={id} className="flex md:flex-col">
        {strings.map((stringNum) => (
          <GridCell
            id={`cell-${stringNum}-${caseNum}`}
            key={`${stringNum}-${caseNum}`}
            caseNumber={caseNum}
            string={stringNum}
          >
            {parent === `cell-${stringNum}-${caseNum}` ? draggableNote : null}
          </GridCell>
        ))}
      </div>
    );
  });

  return (
    <DndContext
      onDragEnd={handleDragEnd}
      modifiers={[restrictToFirstScrollableAncestor]}
    >
      <div
        onScroll={handleScroll}
        className="
        container mx-auto
        flex flex-col items-center
        overflow-y-auto
        md:overflow-x-auto
        md:flex-row
        md:justify-start
        md:overflow-y-hidden
        my-2
        h-full relative flex-grow"
      >
        {neckCases}
      </div>
    </DndContext>
  );
};

export default Neck;
