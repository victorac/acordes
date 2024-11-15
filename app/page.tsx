"use client";
import ActionBar from "@/components/ActionBar";
import Header from "@/components/Header";
import Neck from "@/components/Neck";
import { findInitialIntervals, NeckState } from "@/utils/notes";
import { useEffect, useRef, useState } from "react";

const DEFAULT_TUNNINGS: { [key: number]: string }[] = [
  {
    1: "A",
    2: "E",
    3: "C",
    4: "G",
    5: "D",
    6: "A",
  },
  {
    1: "D",
    2: "A",
    3: "F",
    4: "C",
    5: "G",
    6: "D",
  },
  {
    1: "E",
    2: "B",
    3: "G",
    4: "D",
    5: "A",
    6: "E",
  },
];

export default function Home() {
  const [keyName, setKeyName] = useState("E");
  const [editMode, setEditMode] = useState(false);
  const changeRef = useRef<string[]>([]);
  const [keyChangeMode, setKeyChangeMode] = useState(false);
  const [intervals] = useState(["R", "3", "5"]);
  const [tunning] = useState(
    DEFAULT_TUNNINGS.at(-1) as { [key: number]: string }
  );
  const [neckIntervals, setNeckIntervals] = useState({});

  useEffect(() => {
    const initialIntervals = findInitialIntervals(intervals, keyName, tunning);
    setNeckIntervals(initialIntervals);
  }, [keyName, intervals, tunning]);

  function addNoteChange(key: string) {
    changeRef.current.push(key);
  }

  function handleEditModeChange() {
    if (editMode) setKeyChangeMode(false);
    setEditMode(!editMode);
    console.log(changeRef.current);
    if (changeRef.current.length === 0) return;
    setNeckIntervals((prev: NeckState) => {
      const newIntervals = { ...prev };
      // reset all initial positions
      for (const key of changeRef.current) {
        console.log(key);
        if (!newIntervals[key]) continue;
        console.log(newIntervals[key]);
        newIntervals[key] = {
          status: newIntervals[key].status,
          initialPosition: { x: 0, y: 0 },
        };
        console.log(newIntervals[key]);
      }
      changeRef.current = [];
      return newIntervals;
    });
  }
  function handleKeyChangeModeChange() {
    setKeyChangeMode(!keyChangeMode);
  }
  function handleKeyChange(key: string) {
    setKeyName(key);
  }
  return (
    <div className="flex flex-col w-full h-dvh items-center bg-[#101013]">
      <Header />
      <Neck
        keyName={keyName}
        neckIntervals={neckIntervals}
        setNeckIntervals={setNeckIntervals}
        tunning={tunning}
        editMode={editMode}
        onChangeNote={addNoteChange}
      />
      <ActionBar
        keyName={keyName}
        editMode={editMode}
        keyChangeMode={keyChangeMode}
        onEditModeChange={handleEditModeChange}
        onKeyChangeModeChange={handleKeyChangeModeChange}
        onKeyChange={handleKeyChange}
      />
    </div>
  );
}
