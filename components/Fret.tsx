import { getNoteData, NeckState } from "@/utils/notes";
import React from "react";
import Nut from "./Nut";
import GridCell from "./GridCell";
import Note from "./Note";

interface FirstFretProps {
  keyName: string;
  neckIntervals: NeckState;
  tunning: { [key: number]: string };
  strings: number[];
  editMode: boolean;
  onNutClick: (stringNum: number) => void;
}

const FirstFret: React.FC<FirstFretProps> = ({
  keyName,
  neckIntervals,
  tunning,
  strings,
  editMode,
  onNutClick,
}) => {
  return (
    <div
      className="
    bg-[#192149] 
    px-4 
    rounded-full 
    flex 
    sm:flex-col sm:h-auto sm:px-0 
    items-center 
    justify-center
    sticky
    top-0
    sm:top-auto
    sm:left-0
    z-[2000]
    "
    >
      {strings.map((s, i) => {
        let { interval } = getNoteData(s, 0, tunning, keyName);
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
          />
        );
      })}
    </div>
  );
};

interface FretProps {
  keyName: string;
  neckIntervals: NeckState;
  tunning: { [key: number]: string };
  fretNumber: number;
  strings: number[];
  index: number;
  onAddNote: (stringNum: number, caseNum: number) => void;
}

const Fret: React.FC<FretProps> = ({
  keyName,
  neckIntervals,
  tunning,
  fretNumber,
  index,
  strings,
  onAddNote,
}) => {
  const id = `fret-${fretNumber}-${index}`;
  return (
    <div id={id} className="flex sm:flex-col relative">
      {strings.map((stringNum) => (
        <GridCell
          id={`cell-${stringNum}-${fretNumber}-${index}`}
          key={`${stringNum}-${fretNumber}-${index}`}
          fretNumber={fretNumber}
          string={stringNum}
          onAddNote={onAddNote}
          noteState={neckIntervals[`${stringNum}-${fretNumber}`]}
        >
          {(() => {
            const noteStatus = neckIntervals[`${stringNum}-${fretNumber}`];
            if (!noteStatus) return null;
            // get interval and note name based on string and fret number
            const { interval, noteName } = getNoteData(
              stringNum,
              fretNumber,
              tunning,
              keyName
            );
            const noteId = `note-${stringNum}-${fretNumber}-${index}`;
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
        {fretNumber}
      </div>
    </div>
  );
};

export { FirstFret, Fret };
