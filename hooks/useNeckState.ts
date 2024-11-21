import { findInitialIntervals, NeckState, transposeNote } from "@/utils/notes";
import { useState, useEffect } from "react";

interface NeckStateMap {
  [key: string]: NeckState;
}

const STORAGE_KEY = "neck-intervals-map";

type Tuning = { [key: number]: string };

const DEFAULT_TUNINGS: { [key: string]: Tuning } = {
  four: {
    4: "E",
    3: "A",
    2: "D",
    1: "G",
  },
  five: {
    5: "B",
    4: "E",
    3: "A",
    2: "D",
    1: "G",
  },
  six: {
    6: "E",
    5: "A",
    4: "D",
    3: "G",
    2: "B",
    1: "E",
  },
};

export function useNeckState(initialKey: string) {
  const [keyName, setKeyName] = useState(initialKey);
  const [editMode, setEditMode] = useState(false);
  const [keyChangeMode, setKeyChangeMode] = useState(false);
  const [intervals] = useState(["R", "3", "5"]);
  const [stringOrientation, setStringOrientation] = useState<"right" | "left">(
    "right"
  );
  const [settingsMode, setSettingsMode] = useState(false);
  const [tuning, setTuning] = useState(DEFAULT_TUNINGS.six);
  const [neckIntervalsMap, setNeckIntervalsMap] = useState<NeckStateMap>(() => {
    if (typeof window === "undefined") return {};
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    if (!neckIntervalsMap[keyName]) {
      const initialIntervals = findInitialIntervals(
        intervals,
        keyName,
        tuning
      );
      setNeckIntervalsMap((prev) => ({
        ...prev,
        [keyName]: initialIntervals,
      }));
    }
  }, [keyName, intervals, tuning]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    console.log("saving to local storage", neckIntervalsMap);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(neckIntervalsMap));
  }, [neckIntervalsMap]);

  function handleEditModeChange() {
    if (editMode) setKeyChangeMode(false);
    setEditMode(!editMode);
  }

  function handleKeyChangeModeChange() {
    setKeyChangeMode(!keyChangeMode);
  }

  function handleKeyChange(key: string) {
    setKeyName(key);
  }

  function toggleStringOrientation() {
    setStringOrientation((prev) => (prev === "right" ? "left" : "right"));
  }

  function transposeMinus(stringNum: number) {
    setTuning((prev) => {
      const newTuning = { ...prev };
      const note = prev[stringNum];
      const newNote = transposeNote(note, -1);
      newTuning[stringNum] = newNote;
      return newTuning;
    });
  }

  function transposePlus(stringNum: number) {
    setTuning((prev) => {
      const newTuning = { ...prev };
      const note = prev[stringNum];
      const newNote = transposeNote(note, 1);
      newTuning[stringNum] = newNote;
      return newTuning;
    });
  }

  function setNumberOfStrings(num: number) {
    if (num === 4) setTuning(DEFAULT_TUNINGS.four);
    if (num === 5) setTuning(DEFAULT_TUNINGS.five);
    if (num === 6) setTuning(DEFAULT_TUNINGS.six);
  }

  function handleAddNote(stringNum: number, fretNum: number) {
    setNeckIntervalsMap((prev) => {
      // check if there is already a note in the cell
      if (prev[keyName][`${stringNum}-${fretNum}`]) return prev;
      const id = `${stringNum}-${fretNum}`;
      const newIntervals: NeckState = {
        ...prev[keyName],
        [id]: {
          status: "idle",
          initialPosition: { x: 0, y: 0 },
        },
      };
      return { ...prev, [keyName]: newIntervals };
    });
  }

  function handleRemoveNote(stringNum: number, fretNum: number) {
    setNeckIntervalsMap((prev) => {
      const newNeck = { ...prev };
      delete newNeck[keyName][`${stringNum}-${fretNum}`];
      return newNeck;
    });
  }

  function handleNutClick(stringNum: number) {
    console.log("handleNutClick in useNeckState");
    setNeckIntervalsMap((prev) => {
      const newNeck = { ...prev, [keyName]: { ...prev[keyName] } };
      const id = `${stringNum}-0`;
      if (newNeck[keyName][id]) {
        console.log("deleting", id);
        delete newNeck[keyName][id];
      } else {
        console.log("adding", id);
        newNeck[keyName][id] = {
          status: "idle",
          initialPosition: { x: 0, y: 0 },
        };
      }
      console.log("concluded with",newNeck[keyName][id]);
      return newNeck;
    });
    console.log("handleNutClick in useNeckState concluded");
  }

  function startNoteDragging(stringNum: number, fretNum: number) {
    setNeckIntervalsMap((prev) => {
      const newNeck = { ...prev };
      newNeck[keyName][`${stringNum}-${fretNum}`] = {
        status: "dragging",
        initialPosition: { x: 0, y: 0 },
      };
      return newNeck;
    });
  }

  function updateNotePosition(
    prevStringNum: number,
    prevFretNum: number,
    stringNum: number,
    fretNum: number,
    x: number,
    y: number
  ) {
    setNeckIntervalsMap((prev) => {
      const newNeck = { ...prev };
      delete newNeck[keyName][`${prevStringNum}-${prevFretNum}`];
      newNeck[keyName][`${stringNum}-${fretNum}`] = {
        ...newNeck[keyName][`${stringNum}-${fretNum}`],
        initialPosition: { x, y },
        status: "idle",
      };
      return newNeck;
    });
  }

  function resetNoteDragging(stringNum: number, fretNum: number) {
    setNeckIntervalsMap((prev) => {
      const newNeck = { ...prev };
      newNeck[keyName][`${stringNum}-${fretNum}`] = {
        status: "idle",
        initialPosition: { x: 0, y: 0 },
      };
      return newNeck;
    });
  }

  function toggleSettingsMode() {
    setSettingsMode((prev) => !prev);
  }


  return {
    keyName,
    editMode,
    keyChangeMode,
    intervals,
    tuning,
    neckIntervals: neckIntervalsMap[keyName] || {},
    settingsMode,
    toggleSettingsMode,
    handleAddNote,
    handleRemoveNote,
    handleNutClick,
    startNoteDragging,
    updateNotePosition,
    resetNoteDragging,
    handleEditModeChange,
    handleKeyChangeModeChange,
    handleKeyChange,
    setNumberOfStrings,
    transposePlus,
    transposeMinus,
    toggleStringOrientation,
    stringOrientation,
  };
}
