"use client";
import React, { useState, useEffect } from "react";
import Note from "./Note";
import GridCell from "./GridCell";
import dynamic from "next/dynamic";
import { DragEndEvent } from "@dnd-kit/core";
import useScreenSize from "@/hooks/useScreenSize";
import { restrictToFirstScrollableAncestor } from "@dnd-kit/modifiers";

// Create client-only DndContext
const DndContext = dynamic(
  () => import("@dnd-kit/core").then((mod) => mod.DndContext),
  { ssr: false }
);

const Neck: React.FC = () => {
  const strings = [6, 5, 4, 3, 2, 1];
  const casesWindowSize = 24;

  const [parent, setParent] = useState<string | number | null>("cell-6-0");
  const [casesArray, setCasesArray] = useState(
    Array.from({ length: casesWindowSize }, (_, i) => i)
  );
  const [isClient, setIsClient] = useState(false);
  const isSmallScreen = useScreenSize();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const draggableNote = <Note id="draggable" />;

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    function updateCasesArray() {
      setCasesArray((prev) => [
        ...prev,
        ...Array.from({ length: casesWindowSize }, (_, i) => prev.length + i),
      ]);
    }

    if (isSmallScreen) {
      if (target.scrollTop + target.clientHeight >= target.scrollHeight - 100) {
        // Add more cases to the bottom
        updateCasesArray();
      }
      if (target.scrollTop === 0) {
        // Reset to the first cases
        setCasesArray(Array.from({ length: casesWindowSize }, (_, i) => i));
      }
    } else {
      if (target.scrollLeft + target.clientWidth >= target.scrollWidth - 100) {
        // Add more cases to the right
        updateCasesArray();
      }
      if (target.scrollLeft === 0) {
        // Reset to the first cases
        setCasesArray(Array.from({ length: casesWindowSize }, (_, i) => i));
      }
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
    return <div className="h-full w-full">Loading...</div>;
  }

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
