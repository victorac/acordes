"use client";
import React, { useState, useLayoutEffect } from "react";
import Note from "./Note";
import GridCell from "./GridCell";
import { DragEndEvent, DragStartEvent } from "@dnd-kit/core";
import useScreenSize from "@/hooks/useScreenSize";
import { restrictToFirstScrollableAncestor } from "@dnd-kit/modifiers";
import { DndContext } from "@dnd-kit/core";
import Fret from "./Fret";

const CASES_WINDOW_SIZE = 24;
// 159px is the height of a cell
const MIN_SCROLL_THRESHOLD = 159;

type NeckState = {
  [key: string]: "idle" | "dragging";
};

function findNoteForCell(neck: NeckState, stringNum: number, caseNum: number) {
  return neck[`${stringNum}-${caseNum}`];
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
  const [neck, setNeck] = useState<NeckState>({});
  const [cases, setCases] = useState(
    Array.from(
      { length: CASES_WINDOW_SIZE * 3 },
      (_, i) => i % CASES_WINDOW_SIZE
    )
  );
  const [isClient, setIsClient] = useState(false);
  const isSmallScreen = useScreenSize();
  const strings = isSmallScreen ? [6, 5, 4, 3, 2, 1] : [1, 2, 3, 4, 5, 6];

  useLayoutEffect(() => {
    setIsClient(true);
  }, []);

  function handleAddNote(stringNum: number, caseNum: number) {
    setNeck((prev) => {
      // check if there is already a note in the cell
      if (prev[`${stringNum}-${caseNum}`]) return prev;
      const id = `${stringNum}-${caseNum}`;
      return {
        ...prev,
        [id]: "idle",
      };
    });
  }

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;
    const id = active.id as string;
    const [, stringNum, caseNum] = id.split("-");
    setNeck((prev) => {
      const cellId = `${stringNum}-${caseNum}`;
      const newCells = {
        ...prev,
        [cellId]: "dragging",
      } as NeckState;
      return newCells;
    });
  }

  function handleDragEnd(event: DragEndEvent) {
    const { over } = event;
    const [, prevStringNum, prevCaseNum] = (event.active.id as string).split(
      "-"
    );
    if (over?.id) {
      const parent = over.id as string;
      const [, stringNum, caseNum] = parent.split("-");

      // check if there is already a note in the cell
      if (neck[`${stringNum}-${caseNum}`]) {
        setNeck((prev) => ({
          ...prev,
          [`${prevStringNum}-${prevCaseNum}`]: "idle",
        }));
        return;
      }
      setNeck((prev) => {
        const newNeck = { ...prev };
        delete newNeck[`${prevStringNum}-${prevCaseNum}`];
        newNeck[`${stringNum}-${caseNum}`] = "idle";
        return newNeck;
      });
    } else {
      setNeck((prev) => ({
        ...prev,
        [`${prevStringNum}-${prevCaseNum}`]: "idle",
      }));
    }
  }

  function handleScroll(e: React.UIEvent<HTMLDivElement>) {
    const target = e.target as HTMLDivElement;

    const updateCasesArray = () => {
      setCases((prev) => [...prev.slice(12), ...prev.slice(0, 12)]);
    };
    const resetCasesArray = () => {
      setCases(
        Array.from(
          { length: CASES_WINDOW_SIZE * 3 },
          (_, i) => i % CASES_WINDOW_SIZE
        )
      );
    };

    if (isSmallScreen) {
      const isNearBottom =
        target.scrollTop + target.clientHeight >=
        target.scrollHeight - MIN_SCROLL_THRESHOLD;
      const isAtTop = target.scrollTop === 0;

      if (isNearBottom) {
        target.scrollTop =
          target.scrollTop - MIN_SCROLL_THRESHOLD * 12 - 11 * 8;
        updateCasesArray();
      }
      if (isAtTop) resetCasesArray();
    } else {
      const isNearRight =
        target.scrollLeft + target.clientWidth >=
        target.scrollWidth - MIN_SCROLL_THRESHOLD;
      const isAtLeft = target.scrollLeft === 0;
      if (isNearRight) {
        target.scrollTo({
          left: target.scrollLeft - MIN_SCROLL_THRESHOLD * 12 - 11 * 8,
        });
        updateCasesArray();
      }
      if (isAtLeft)
        // reset cases array
        resetCasesArray();
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

  const neckCases = cases.map((caseNum, index) => {
    const id = `case-${caseNum}-${index}`;
    return (
      <div id={id} key={id} className="flex sm:flex-col relative">
        {strings.map((stringNum) => (
          <GridCell
            id={`cell-${stringNum}-${caseNum}-${index}`}
            key={`${stringNum}-${caseNum}-${index}`}
            caseNumber={caseNum}
            string={stringNum}
            onAddNote={handleAddNote}
            noteState={neck[`${stringNum}-${caseNum}`]}
          >
            {(() => {
              const noteStatus = findNoteForCell(neck, stringNum, caseNum);
              if (!noteStatus) return null;
              // get interval and note name based on string and case number
              const { interval, noteName } = getNoteData(
                stringNum,
                caseNum,
                tunning,
                key
              );
              const noteId = `note-${stringNum}-${caseNum}-${index}`;
              return (
                <Note
                  key={noteId}
                  id={noteId}
                  interval={interval}
                  noteName={noteName}
                  state={noteStatus}
                />
              );
            })()}
          </GridCell>
        ))}
        <div className="absolute top-0 left-0 w-fit text-[#B3BDC7] text-xs">
          {caseNum + 1}
        </div>
      </div>
    );
  });

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToFirstScrollableAncestor]}
    >
      <div
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
          "
      >
        <Fret tunning={tunning} keyName={key} />
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
          {neckCases}
        </div>
      </div>
    </DndContext>
  );
};

export default Neck;
