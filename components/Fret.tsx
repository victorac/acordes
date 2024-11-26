/* eslint-disable @next/next/no-img-element */
"use client";

import { getNoteData, NeckState } from "@/utils/notes";
import React from "react";
import Nut from "./Nut";
import GridCell from "./GridCell";
import Note from "./Note";
import { AnimatePresence, motion } from "framer-motion";
import { useIsVisible } from "@/hooks/useIsVisible";

interface CloseNoteButtonProps {
  onClick: () => void;
}

// Animation variants
const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const CloseNoteButton: React.FC<CloseNoteButtonProps> = ({ onClick }) => {
  return (
    <motion.button
      key="remove"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      layout
      className="absolute top-8 -left-2 sm:-top-2 sm:left-8 w-8 h-8 flex items-center justify-center z-[1000]"
      onClick={onClick}
    >
      <div className="w-5 h-5 rounded-full bg-[#1D1F2C] ring-[1px] ring-[#79747E] flex items-center justify-center">
        <img src="/remove_nut.svg" alt="close" />
      </div>
    </motion.button>
  );
};

interface FirstFretProps {
  keyName: string;
  neckIntervals: NeckState;
  tuning: { [key: number]: string };
  strings: number[];
  editMode: boolean;
  isScrolledDown: boolean;
  isScrolledUp: boolean;
  cellDimensions: { height: number; width: number };
  onNutClick: (stringNum: number) => void;
}

const FirstFret: React.FC<FirstFretProps> = ({
  keyName,
  neckIntervals,
  tuning,
  strings,
  editMode,
  isScrolledDown,
  isScrolledUp,
  cellDimensions,
  onNutClick,
}) => {
  return (
    <motion.div
      className="
    bg-[#192149] 
    rounded-full
    px-4 sm:px-0 sm:py-4 w-[326px] sm:w-[28px] h-[28px] sm:h-[326px]
    flex
    sm:flex-col
    items-center 
    justify-center
    sticky
    top-0
    sm:top-auto
    sm:left-0
    z-[2000]
    "
      layout
      transition={{ duration: 0.05, ease: "easeInOut" }}
    >
      {strings.map((s, i) => {
        let { interval } = getNoteData(s, 0, tuning, keyName);
        if (!neckIntervals[`${s}-0`]) {
          interval = "";
        }
        return (
          <Nut
            key={i}
            interval={interval}
            stringNum={s}
            onNutClick={onNutClick}
            editMode={editMode}
            isScrolledDown={isScrolledDown}
            isScrolledUp={isScrolledUp}
            cellDimensions={cellDimensions}
          />
        );
      })}
    </motion.div>
  );
};

interface FretProps {
  keyName: string;
  neckIntervals: NeckState;
  tuning: { [key: number]: string };
  fretNumber: number;
  strings: number[];
  index: number;
  editMode: boolean;
  cellDimensions: { height: number; width: number };
  onAddNote: (stringNum: number, fretNum: number) => void;
  onRemoveNote: (stringNum: number, fretNum: number) => void;
}

const Fret: React.FC<FretProps> = ({
  keyName,
  neckIntervals,
  tuning,
  fretNumber,
  index,
  strings,
  editMode,
  cellDimensions,
  onAddNote,
  onRemoveNote,
}) => {
  const id = `fret-${fretNumber}-${index}`;
  const [fretRef, isVisible] = useIsVisible<HTMLDivElement>();
  let hasDraggingNoteInFret = false;
  for (let i = 0; i < strings.length; i++) {
    if (neckIntervals[`${strings[i]}-${fretNumber}`]?.status === "dragging") {
      hasDraggingNoteInFret = true;
      break;
    }
  }

  return (
    <div
      id={id}
      ref={fretRef}
      className="flex sm:flex-col relative 
      h-[159px] 
      w-[calc(49px*6)]
      sm:w-[159px] 
      sm:h-[calc(49px*6)]
      items-center justify-center
      "
    >
      {(isVisible || hasDraggingNoteInFret) &&
        strings.map((stringNum) => (
          <GridCell
            id={`cell-${stringNum}-${fretNumber}-${index}`}
            key={`${stringNum}-${fretNumber}-${index}`}
            fretNumber={fretNumber}
            string={stringNum}
            noteState={neckIntervals[`${stringNum}-${fretNumber}`]?.status}
            editMode={editMode}
            onAddNote={onAddNote}
            cellDimensions={cellDimensions}
          >
            {(() => {
              const noteState = neckIntervals[`${stringNum}-${fretNumber}`];
              if (!noteState) return null;
              // get interval and note name based on string and fret number
              const { interval, noteName } = getNoteData(
                stringNum,
                fretNumber,
                tuning,
                keyName
              );
              const noteId = `note-${stringNum}-${fretNumber}-${index}`;
              function handleCloseNote() {
                onRemoveNote(stringNum, fretNumber);
              }
              return (
                <>
                  <Note
                    key={noteId}
                    id={noteId}
                    interval={interval}
                    noteName={noteName}
                    state={noteState}
                    stringNumber={stringNum}
                    fretNumber={fretNumber}
                    editMode={editMode}
                  />
                  <AnimatePresence mode="wait">
                    {editMode && noteState.status !== "dragging" && (
                      <CloseNoteButton
                        key={`${noteId}-close`}
                        onClick={handleCloseNote}
                      />
                    )}
                  </AnimatePresence>
                </>
              );
            })()}
          </GridCell>
        ))}
      {isVisible && (
        <div className="absolute top-0 left-0 w-fit text-[#B3BDC7] text-xs">
          {fretNumber}
        </div>
      )}
    </div>
  );
};

export { FirstFret, Fret };
