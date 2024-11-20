import { findInitialIntervals, NeckState } from "@/utils/notes";
import { useState, useEffect } from "react";

interface NeckStateMap {
  [key: string]: NeckState;
}

const STORAGE_KEY = "neck-intervals-map";
const DEFAULT_TUNNINGS: { [key: number]: string }[] = [
  {
    1: "E",
    2: "B",
    3: "G",
    4: "D",
    5: "A",
    6: "E",
  },
];

export function useNeckState(initialKey: string) {
  const [keyName, setKeyName] = useState(initialKey);
  const [editMode, setEditMode] = useState(false);
  const [keyChangeMode, setKeyChangeMode] = useState(false);
  const [intervals] = useState(["R", "3", "5"]);
  const [tunning] = useState(
    DEFAULT_TUNNINGS.at(0) as { [key: number]: string }
  );
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
        tunning
      );
      setNeckIntervalsMap((prev) => ({
        ...prev,
        [keyName]: initialIntervals,
      }));
    }
  }, [keyName, intervals, tunning]);

  useEffect(() => {
    if (typeof window === "undefined") return;
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
    setNeckIntervalsMap((prev) => {
      const newNeck = { ...prev };
      const id = `${stringNum}-0`;
      if (newNeck[keyName][id]) {
        delete newNeck[keyName][id];
      } else {
        newNeck[keyName][id] = {
          status: "idle",
          initialPosition: { x: 0, y: 0 },
        };
      }
      return newNeck;
    });
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

  return {
    keyName,
    editMode,
    keyChangeMode,
    intervals,
    tunning,
    neckIntervals: neckIntervalsMap[keyName] || {},
    handleAddNote,
    handleRemoveNote,
    handleNutClick,
    startNoteDragging,
    updateNotePosition,
    resetNoteDragging,
    handleEditModeChange,
    handleKeyChangeModeChange,
    handleKeyChange,
  };
}
