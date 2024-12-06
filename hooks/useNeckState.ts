import { findInitialIntervals, NeckState, transposeNote } from "@/utils/notes";
import { useState, useEffect } from "react";
import useScreenSize from "./useScreenSize";

interface NeckStateMap {
  [key: string]: NeckState;
}

const STORAGE_KEY = "neck-intervals-map";

type Tuning = { [key: number]: string };

export const DEFAULT_TUNINGS: { [key: string]: Tuning } = {
  guitar: {
    6: "E",
    5: "A",
    4: "D",
    3: "G",
    2: "B",
    1: "E",
  },
  bass: {
    6: "B",
    5: "E",
    4: "A",
    3: "D",
    2: "G",
    1: "C",
  },
  ukulele: {
    4: "G",
    3: "C",
    2: "E",
    1: "A",
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
  const [neckIntervalsMap, setNeckIntervalsMap] = useState<NeckStateMap>(() => {
    if (typeof window === "undefined") return {};
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  });
  const [selectedPreset, setSelectedPreset] = useState("guitar");
  const [tuning, setTuning] = useState(DEFAULT_TUNINGS[selectedPreset]);
  const [stringCount, setStringCount] = useState(6);
  const presets = Object.keys(DEFAULT_TUNINGS);
  const isSmallScreen = useScreenSize();

  const cellDimensions = {
    height: 159,
    width: 49,
  };

  if (stringCount === 5) {
    cellDimensions.width = (49 * 6) / 5;
  } else if (stringCount === 4) {
    cellDimensions.width = (49 * 6) / 4;
  }

  if (!isSmallScreen) {
    cellDimensions.width = 159;
    cellDimensions.height = 49;
    if (stringCount === 5) {
      cellDimensions.height = (49 * 6) / 5;
    } else if (stringCount === 4) {
      cellDimensions.height = (49 * 6) / 4;
    }
  }

  useEffect(() => {
    if (!neckIntervalsMap[keyName]) {
      const initialIntervals = findInitialIntervals(intervals, keyName, tuning);
      setNeckIntervalsMap((prev) => ({
        ...prev,
        [keyName]: initialIntervals,
      }));
    }
  }, [keyName, intervals, tuning]);

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
      const newNeck = { ...prev, [keyName]: { ...prev[keyName] } };
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

  function toggleSettingsMode() {
    setSettingsMode((prev) => !prev);
  }

  function handleSelectPreset(preset: string) {
    setSelectedPreset(preset);
    if (preset === "guitar") {
      setStringCount(6);
      setTuning(DEFAULT_TUNINGS.guitar);
    }
    if (preset === "bass") {
      setStringCount(5);
      setTuning(DEFAULT_TUNINGS.bass);
    }
    if (preset === "ukulele") {
      setStringCount(4);
      setTuning(DEFAULT_TUNINGS.ukulele);
    }
    const initialIntervals = findInitialIntervals(
      intervals,
      keyName,
      DEFAULT_TUNINGS[preset]
    );
    setNeckIntervalsMap({
      [keyName]: initialIntervals,
    });
  }

  function handleChangeStringCount(num: number) {
    if (Object.keys(tuning).length < num) {
      setTuning((prev) => {
        const newTuning = { ...prev };
        for (let i = Object.keys(prev).length + 1; i <= num; i++) {
          newTuning[i] = "E";
        }
        return newTuning;
      });
    }
    setStringCount(num);
  }

  let strings = [1, 2, 3, 4, 5, 6];
  const maxTuningIndex = Object.keys(tuning).length;
  // remove strings from the end for ukulele
  if (selectedPreset === "ukulele") {
    strings = strings.slice(0, maxTuningIndex).slice(0, stringCount);
  } else {
    strings = strings.slice(0, maxTuningIndex).slice(-stringCount);
  }
  if (selectedPreset === "bass" && stringCount === 4) {
    strings = [2, 3, 4, 5];
  }
  if (stringOrientation === "right") {
    strings.reverse();
  }
  if (!isSmallScreen) {
    strings.reverse();
  }

  function handleResetApp() {
    setNeckIntervalsMap({});
    setKeyName("E");
    setEditMode(false);
    setKeyChangeMode(false);
    setStringOrientation("right");
    setSettingsMode(false);
    setSelectedPreset("guitar");
    setTuning(DEFAULT_TUNINGS.guitar);
    setStringCount(6);
    const initialIntervals = findInitialIntervals(
      intervals,
      keyName,
      DEFAULT_TUNINGS.guitar
    );
    setNeckIntervalsMap((prev) => ({
      ...prev,
      [keyName]: initialIntervals,
    }));
    if (typeof window === "undefined") return;
    localStorage.removeItem(STORAGE_KEY);
  }

  return {
    keyName,
    editMode,
    keyChangeMode,
    intervals,
    tuning,
    neckIntervals: neckIntervalsMap[keyName] || {},
    settingsMode,
    selectedPreset,
    presets,
    stringCount,
    strings,
    isSmallScreen,
    handleSelectPreset,
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
    handleChangeStringCount,
    transposePlus,
    transposeMinus,
    toggleStringOrientation,
    stringOrientation,
    handleResetApp,
    cellDimensions,
  };
}
