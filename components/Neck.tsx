"use client";
import React, { useState, useLayoutEffect } from "react";
import Note from "./Note";
import GridCell from "./GridCell";
import { DragOverEvent } from "@dnd-kit/core";
import useScreenSize from "@/hooks/useScreenSize";
import { restrictToFirstScrollableAncestor } from "@dnd-kit/modifiers";
import { DndContext } from "@dnd-kit/core";
import Fret from "./Fret";

const CASES_WINDOW_SIZE = 24;
// 159px is the height of a cell
const MIN_SCROLL_THRESHOLD = 159;

type NotePin = {
  id: string;
  parent: string | number | null;
  string: number;
  caseNumber: number;
};

function findNoteForCell(
  notes: Record<string, NotePin>,
  stringNum: number,
  caseNum: number
) {
  return Object.values(notes).find(
    (note) => note.string === stringNum && note.caseNumber === caseNum
  );
}

function getNoteData(
  stringNum: number,
  caseNum: number,
  tunning: { [key: number]: string },
  key = "E"
) {
  const allNotes = [
    "A",
    "A#",
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
  ];
  const intervalToStringMap: { [key: number]: string } = {
    0: "R",
    1: "m2",
    2: "2",
    3: "m3",
    4: "3",
    5: "P4",
    6: "Aug4",
    7: "5",
    8: "m6",
    9: "6",
    10: "7",
    11: "M7",
  };

  const stringTunnig = tunning[stringNum];
  const startIndex = allNotes.findIndex((note) => note === stringTunnig);
  const noteIndex = (startIndex + caseNum + 1) % allNotes.length;
  const keyIndex = allNotes.findIndex((note) => note === key);
  const interval = (noteIndex - keyIndex + allNotes.length) % allNotes.length;
  return {
    interval: intervalToStringMap[interval],
    noteName: allNotes[noteIndex],
  };
}

const Neck: React.FC = () => {
  const key = "E";
  const tunning: { [key: number]: string } = {
    1: "E",
    2: "B",
    3: "G",
    4: "D",
    5: "A",
    6: "E",
  };
  const [notes, setNotes] = useState<Record<string, NotePin>>({});
  // const [parent, setParent] = useState<string | number | null>("cell-6-0");
  const [casesArray, setCasesArray] = useState(
    Array.from({ length: CASES_WINDOW_SIZE }, (_, i) => i)
  );
  const [isClient, setIsClient] = useState(false);
  const isSmallScreen = useScreenSize();
  const strings = isSmallScreen ? [6, 5, 4, 3, 2, 1] : [1, 2, 3, 4, 5, 6];

  useLayoutEffect(() => {
    setIsClient(true);
  }, []);

  function handleAddNote(string: number, caseNumber: number) {
    setNotes((prev) => {
      const id = `${Object.values(prev).length}`;
      return {
        ...prev,
        [id]: {
          id,
          parent: `cell-${string}-${caseNumber}`,
          string,
          caseNumber,
        },
      };
    });
  }

  function handleScroll(e: React.UIEvent<HTMLDivElement>) {
    const target = e.target as HTMLDivElement;

    const updateCasesArray = () => {
      setCasesArray((prev) => [...prev.slice(6), ...prev.slice(0, 6)]);
    };

    if (isSmallScreen) {
      const isNearBottom =
        target.scrollTop + target.clientHeight >=
        target.scrollHeight - MIN_SCROLL_THRESHOLD;
      const isAtTop = target.scrollTop === 0;

      if (isNearBottom) {
        // remove first 6 cells and add them to the end
        updateCasesArray();
        // scroll up 6 cells + five gaps between cells
        target.scrollTo({
          top: target.scrollTop - MIN_SCROLL_THRESHOLD * 6 - 5 * 8,
        });
      }
      if (isAtTop)
        setCasesArray(Array.from({ length: CASES_WINDOW_SIZE }, (_, i) => i));
    } else {
      const isNearRight =
        target.scrollLeft + target.clientWidth >=
        target.scrollWidth - MIN_SCROLL_THRESHOLD;
      const isAtLeft = target.scrollLeft === 0;

      if (isNearRight) {
        // remove first 6 cells and add them to the end
        target.scrollTo({
          left: target.scrollLeft - MIN_SCROLL_THRESHOLD * 6 - 5 * 8,
        });
        // scroll left 6 cells + five gaps between cells
        updateCasesArray();
      }
      if (isAtLeft)
        setCasesArray(Array.from({ length: CASES_WINDOW_SIZE }, (_, i) => i));
    }
  }

  function handleDragEnd(event: DragOverEvent) {
    const { over } = event;
    if (over?.id) {
      const parent = over.id;
      const notePinId = event.active.id;
      const [, stringNum, caseNum] = (parent as string).split("-");
      const string = parseInt(stringNum);
      const caseNumber = parseInt(caseNum);
      setNotes((prev) => ({
        ...prev,
        [notePinId]: {
          ...prev[notePinId],
          parent,
          string,
          caseNumber,
        },
      }));
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

  const neckCases = casesArray.map((caseNum, index) => {
    const id = `case-${caseNum}-${index}`;
    return (
      <div id={id} key={id} className="flex md:flex-col">
        {strings.map((stringNum) => (
          <GridCell
            id={`cell-${stringNum}-${caseNum}-${index}`}
            key={`${stringNum}-${caseNum}-${index}`}
            caseNumber={caseNum}
            string={stringNum}
            onAddNote={handleAddNote}
          >
            {(() => {
              const note = findNoteForCell(notes, stringNum, caseNum);
              // get interval and note name based on string and case number
              const { interval, noteName } = getNoteData(
                stringNum,
                caseNum,
                tunning,
                key
              );
              return note?.id ? (
                <Note
                  key={note.id}
                  id={note.id}
                  interval={interval}
                  noteName={noteName}
                />
              ) : null;
            })()}
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
          h-full relative flex-grow gap-2"
      >
        <Fret />
        {neckCases}
      </div>
    </DndContext>
  );
};

export default Neck;
