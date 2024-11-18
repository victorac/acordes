"use client";
import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
import {
  DragEndEvent,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import useScreenSize from "@/hooks/useScreenSize";
import { restrictToFirstScrollableAncestor } from "@dnd-kit/modifiers";
import { FirstFret, Fret } from "./Fret";
import { NeckState } from "@/utils/notes";
import ConditionalDragContext from "./ConditionalDragContext";

const CASES_WINDOW_SIZE = 24;
// 159px is the height of a cell
const MIN_SCROLL_THRESHOLD = 159;

interface NeckProps {
  keyName: string;
  neckIntervals: NeckState;
  setNeckIntervals: React.Dispatch<React.SetStateAction<NeckState>>;
  tunning: { [key: number]: string };
  editMode: boolean;
}

const Neck: React.FC<NeckProps> = ({
  keyName,
  neckIntervals,
  setNeckIntervals,
  tunning,
  editMode,
}) => {
  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: {
      delay: 30,
      tolerance: 5,
    },
  });
  const sensors = useSensors(pointerSensor);

  const [frets, setFrets] = useState(
    Array.from(
      { length: CASES_WINDOW_SIZE * 3 },
      (_, i) => (i % CASES_WINDOW_SIZE) + 1
    )
  );
  const [isClient, setIsClient] = useState(false);
  const isSmallScreen = useScreenSize();

  const scrollPosRef = useRef({ x: 0, y: 0 });
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Restore scroll position after switching
  useEffect(() => {
    if (!scrollContainerRef.current) return;

    scrollContainerRef.current.scrollTo({
      left: scrollPosRef.current.x,
      top: scrollPosRef.current.y,
      behavior: "auto",
    });
  }, [editMode]);

  useLayoutEffect(() => {
    setIsClient(true);
  }, []);

  const strings = isSmallScreen ? [6, 5, 4, 3, 2, 1] : [1, 2, 3, 4, 5, 6];

  function handleAddNote(stringNum: number, caseNum: number) {
    setNeckIntervals((prev) => {
      // check if there is already a note in the cell
      if (prev[`${stringNum}-${caseNum}`]) return prev;
      const id = `${stringNum}-${caseNum}`;
      return {
        ...prev,
        [id]: {
          status: "idle",
          initialPosition: { x: 0, y: 0 },
        },
      };
    });
  }

  function handleRemoveNote(stringNum: number, caseNum: number) {
    setNeckIntervals((prev) => {
      const newNeck = { ...prev };
      delete newNeck[`${stringNum}-${caseNum}`];
      return newNeck;
    });
  }

  function handleNutClick(stringNum: number) {
    setNeckIntervals((prev) => {
      const newNeck = { ...prev };
      const id = `${stringNum}-0`;
      if (newNeck[id]) {
        delete newNeck[id];
      } else {
        newNeck[id] = {
          status: "idle",
          initialPosition: { x: 0, y: 0 },
        };
      }
      return newNeck;
    });
  }

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;
    const id = active.id as string;
    const [, stringNum, caseNum] = id.split("-");
    setNeckIntervals((prev) => {
      const cellId = `${stringNum}-${caseNum}`;
      const newCells: NeckState = {
        ...prev,
        [cellId]: { status: "dragging", initialPosition: { x: 0, y: 0 } },
      };
      return newCells;
    });
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
        setNeckIntervals((prev) => ({
          ...prev,
          [`${prevStringNum}-${prevFretNum}`]: {
            status: "idle",
            initialPosition: { x: 0, y: 0 },
          },
        }));
        return;
      }
      const width = isSmallScreen ? 49 : 159;
      const halfWidth = width / 2;
      const height = isSmallScreen ? 159 : 49;
      const halfHeight = height / 2;
      let deltaX = event.delta.x;
      let deltaY = event.delta.y;

      const xCellsMoved =
        deltaX > 0
          ? Math.floor((deltaX + halfWidth) / width)
          : Math.ceil((deltaX - halfWidth) / width);
      const yCellsMoved =
        deltaY > 0
          ? Math.floor((deltaY + halfHeight) / (height + 8))
          : Math.ceil((deltaY - halfHeight) / (height + 8));

      deltaX = deltaX - xCellsMoved * width;
      deltaY = deltaY - yCellsMoved * (height + 8);
      const initialPosition = { x: deltaX, y: deltaY };

      setNeckIntervals((prev) => {
        const newNeck = { ...prev };
        delete newNeck[`${prevStringNum}-${prevFretNum}`];
        newNeck[`${stringNum}-${fretNum}`] = {
          status: "idle",
          initialPosition: initialPosition,
        };
        return newNeck;
      });
    } else {
      setNeckIntervals((prev) => ({
        ...prev,
        [`${prevStringNum}-${prevFretNum}`]: {
          status: "idle",
          initialPosition: { x: 0, y: 0 },
        },
      }));
    }
  }

  function handleScroll(e: React.UIEvent<HTMLDivElement>) {
    const target = e.target as HTMLDivElement;

    const updateCasesArray = () => {
      setFrets((prev) => [...prev.slice(12), ...prev.slice(0, 12)]);
    };

    if (isSmallScreen) {
      const isNearBottom =
        target.scrollTop + target.clientHeight >=
        target.scrollHeight - MIN_SCROLL_THRESHOLD;
      if (isNearBottom) {
        console.log("is near bottom");
        target.scrollTop =
          target.scrollTop - MIN_SCROLL_THRESHOLD * 12 - 11 * 8;
        updateCasesArray();
      }
    } else {
      const isNearRight =
        target.scrollLeft + target.clientWidth >=
        target.scrollWidth - MIN_SCROLL_THRESHOLD;
      if (isNearRight) {
        target.scrollTo({
          left: target.scrollLeft - MIN_SCROLL_THRESHOLD * 12 - 11 * 8,
        });
        updateCasesArray();
      }
    }
    if (!scrollContainerRef.current) return;
    scrollPosRef.current = {
      x: scrollContainerRef.current.scrollLeft || 0,
      y: scrollContainerRef.current.scrollTop || 0,
    };
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
          container mx-auto my-2
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
          tunning={tunning}
          keyName={keyName}
          neckIntervals={neckIntervals}
          strings={strings}
          editMode={editMode}
          onNutClick={handleNutClick}
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
                tunning={tunning}
                strings={strings}
                editMode={editMode}
                onAddNote={handleAddNote}
                onRemoveNote={handleRemoveNote}
                neckIntervals={neckIntervals}
              />
            );
          })}
        </div>
      </div>
    </ConditionalDragContext>
  );
};

export default Neck;
