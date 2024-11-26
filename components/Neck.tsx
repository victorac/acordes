"use client";
import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
import {
  DragEndEvent,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToFirstScrollableAncestor } from "@dnd-kit/modifiers";
import { FirstFret, Fret } from "./Fret";
import { NeckState } from "@/utils/notes";
import ConditionalDragContext from "./ConditionalDragContext";

const NUMBER_OF_FRETS = 24;
const GAP = 8;
const SCROLL_DOWN_THRESHOLD = 150; // pixels
const SCROLL_UP_THRESHOLD = 20; // pixels

interface NeckProps {
  keyName: string;
  neckIntervals: NeckState;
  handleAddNote: (stringNum: number, fretNum: number) => void;
  handleRemoveNote: (stringNum: number, fretNum: number) => void;
  handleNutClick: (stringNum: number) => void;
  startNoteDragging: (stringNum: number, fretNum: number) => void;
  updateNotePosition: (
    prevStringNum: number,
    prevFretNum: number,
    stringNum: number,
    fretNum: number,
    x: number,
    y: number
  ) => void;
  resetNoteDragging: (stringNum: number, fretNum: number) => void;
  tuning: { [key: number]: string };
  editMode: boolean;
  strings: number[];
  isSmallScreen: boolean;
  cellDimensions: { height: number; width: number };
}

const Neck: React.FC<NeckProps> = ({
  keyName,
  neckIntervals,
  handleAddNote,
  handleRemoveNote,
  handleNutClick,
  startNoteDragging,
  updateNotePosition,
  resetNoteDragging,
  tuning,
  editMode,
  strings,
  isSmallScreen,
  cellDimensions,
}) => {
  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: {
      delay: 30,
      tolerance: 5,
    },
  });
  const sensors = useSensors(pointerSensor);

  const frets = Array.from(
    { length: NUMBER_OF_FRETS * 3 },
    (_, i) => (i % NUMBER_OF_FRETS) + 1
  );

  const [isClient, setIsClient] = useState(false);
  const prevScrollPosRef = useRef({ x: 0, y: 0 });
  const scrollPosRef = useRef({ x: 0, y: 0 });
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [isScrolledUp, setIsScrolledUp] = useState(false);

  // Restore scroll position after switching
  useEffect(() => {
    if (!scrollContainerRef.current) return;

    scrollContainerRef.current.scrollTo({
      left: scrollPosRef.current.x,
      top: scrollPosRef.current.y,
      behavior: "auto",
    });
    setIsScrolledDown(false);
    setIsScrolledUp(false);
  }, [editMode]);

  useLayoutEffect(() => {
    setIsClient(true);
  }, []);

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;
    const id = active.id as string;
    const [, stringNum, fretNum] = id.split("-");
    startNoteDragging(Number(stringNum), Number(fretNum));
  }

  function handleDragEnd(event: DragEndEvent) {
    const { over } = event;
    const [, prevStringNum, prevFretNum] = (event.active.id as string).split(
      "-"
    );
    if (over?.id) {
      const parent = over.id as string;
      const [, stringNum, fretNum] = parent.split("-");

      // check if there is already a note in the cell
      if (neckIntervals[`${stringNum}-${fretNum}`]) {
        resetNoteDragging(Number(prevStringNum), Number(prevFretNum));
        return;
      }

      let deltaX = event.delta.x;
      let deltaY = event.delta.y;

      const xCellsMoved =
        deltaX > 0
          ? Math.floor(
              (deltaX + cellDimensions.width / 2) / cellDimensions.width
            )
          : Math.ceil(
              (deltaX - cellDimensions.width / 2) / cellDimensions.width
            );
      const yCellsMoved =
        deltaY > 0
          ? Math.floor(
              (deltaY + cellDimensions.height / 2) /
                (cellDimensions.height + GAP)
            )
          : Math.ceil(
              (deltaY - cellDimensions.height / 2) /
                (cellDimensions.height + GAP)
            );

      deltaX = deltaX - xCellsMoved * cellDimensions.width;
      deltaY = deltaY - yCellsMoved * (cellDimensions.height + GAP);

      updateNotePosition(
        Number(prevStringNum),
        Number(prevFretNum),
        Number(stringNum),
        Number(fretNum),
        deltaX,
        deltaY
      );
    } else {
      resetNoteDragging(Number(prevStringNum), Number(prevFretNum));
    }
  }

  function handleScroll(e: React.UIEvent<HTMLDivElement>) {
    const target = e.target as HTMLDivElement;

    scrollPosRef.current = {
      x: target.scrollLeft || 0,
      y: target.scrollTop || 0,
    };

    const deltaY = target.scrollTop - prevScrollPosRef.current.y;
    const deltaX = target.scrollLeft - prevScrollPosRef.current.x;

    if (deltaY < 0 && Math.abs(deltaY) > SCROLL_UP_THRESHOLD) {
      setIsScrolledUp(true);
      setIsScrolledDown(false);
      prevScrollPosRef.current.y = target.scrollTop;
    } else if (deltaY > 0 && Math.abs(deltaY) > SCROLL_DOWN_THRESHOLD) {
      setIsScrolledDown(true);
      setIsScrolledUp(false);
      prevScrollPosRef.current.y = target.scrollTop;
    }

    if (deltaX < 0 && Math.abs(deltaX) > SCROLL_UP_THRESHOLD) {
      setIsScrolledUp(true);
      setIsScrolledDown(false);
      prevScrollPosRef.current.x = target.scrollLeft;
    } else if (deltaX > 0 && Math.abs(deltaX) > SCROLL_DOWN_THRESHOLD) {
      setIsScrolledDown(true);
      setIsScrolledUp(false);
      prevScrollPosRef.current.x = target.scrollLeft;
    }

    if (isSmallScreen) {
      const isNearBottom =
        target.scrollTop + target.clientHeight >=
        target.scrollHeight - cellDimensions.height;
      if (isNearBottom) {
        target.scrollTop =
          target.scrollTop -
          cellDimensions.height * NUMBER_OF_FRETS -
          (NUMBER_OF_FRETS - 1) * GAP;
      }
    } else {
      const isNearRight =
        target.scrollLeft + target.clientWidth >=
        target.scrollWidth - cellDimensions.width;
      if (isNearRight) {
        target.scrollLeft =
          target.scrollLeft -
          cellDimensions.width * NUMBER_OF_FRETS -
          (NUMBER_OF_FRETS - 1) * GAP;
      }
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

  return (
    <ConditionalDragContext
      handleDragStart={handleDragStart}
      handleDragEnd={handleDragEnd}
      modifiers={[restrictToFirstScrollableAncestor]}
      sensors={sensors}
      enabled={editMode}
    >
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="
          container mx-auto mt-2
          sm:my-0
          flex flex-col items-center
          sm:flex-row
          h-full relative flex-1
          overflow-y-auto
          sm:overflow-x-auto
          sm:overflow-y-hidden
          custom-scrollbar
          "
      >
        <FirstFret
          tuning={tuning}
          keyName={keyName}
          neckIntervals={neckIntervals}
          strings={strings}
          editMode={editMode}
          isScrolledDown={isScrolledDown}
          isScrolledUp={isScrolledUp}
          onNutClick={handleNutClick}
          cellDimensions={cellDimensions}
        />
        <div
          className="
          flex flex-col items-center
          sm:flex-row
          sm:justify-start
          mt-[8px]
          sm:mt-0
          sm:ml-[8px]
          gap-2
        "
        >
          {frets.map((fretNumber, index) => {
            return (
              <Fret
                key={`${fretNumber}-${index}`}
                fretNumber={fretNumber}
                index={index}
                keyName={keyName}
                tuning={tuning}
                strings={strings}
                editMode={editMode}
                onAddNote={handleAddNote}
                onRemoveNote={handleRemoveNote}
                neckIntervals={neckIntervals}
                cellDimensions={cellDimensions}
              />
            );
          })}
        </div>
      </div>
    </ConditionalDragContext>
  );
};

export default Neck;
