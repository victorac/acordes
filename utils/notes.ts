const allNotes = [
  "C",
  "C#-Db",
  "D",
  "D#-Eb",
  "E",
  "F",
  "F#-Gb",
  "G",
  "G#-Ab",
  "A",
  "A#-Bb",
  "B",
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

export type NeckState = {
  [key: string]: {
    status: "idle" | "dragging";
    initialPosition: { x: number; y: number };
  };
};

export function findInitialIntervals(
  intervals: string[],
  key: string,
  tuning: { [key: number]: string }
) {
  let initialNeck: NeckState = {};

  for (let stringNum = 1; stringNum <= 6; stringNum++) {
    const startIndex = allNotes.findIndex(
      (note) => note === tuning[Number(stringNum)]
    );
    for (let fret = 0; fret <= 24; fret++) {
      const noteIndex = (startIndex + fret) % allNotes.length;
      const keyIndex = allNotes.findIndex((note) => note === key);
      const interval =
        (noteIndex - keyIndex + allNotes.length) % allNotes.length;
      if (intervals.includes(intervalToStringMap[interval])) {
        initialNeck[`${stringNum}-${fret}`] = {
          status: "idle",
          initialPosition: { x: 0, y: 0 },
        };
      }
    }
  }
  return initialNeck;
}

export function getNoteData(
  stringNum: number,
  caseNum: number,
  tuning: { [key: number]: string },
  key = "E"
) {
  const stringTunnig = tuning[stringNum];
  const startIndex = allNotes.findIndex((note) => note === stringTunnig);
  const noteIndex = (startIndex + caseNum) % allNotes.length;
  const keyIndex = allNotes.findIndex((note) => note === key);
  const interval = (noteIndex - keyIndex + allNotes.length) % allNotes.length;
  return {
    interval: intervalToStringMap[interval],
    noteName: allNotes[noteIndex],
  };
}

export function transposeNote(note: string, by: number) {
  const noteIndex = allNotes.findIndex((n) => n === note);
  const newNoteIndex = (noteIndex + by + allNotes.length) % allNotes.length;
  return allNotes[newNoteIndex];
}
