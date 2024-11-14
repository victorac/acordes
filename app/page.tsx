"use client";
import ActionBar from "@/components/ActionBar";
import Header from "@/components/Header";
import Neck from "@/components/Neck";
import { findInitialIntervals } from "@/utils/notes";
import { useEffect, useState } from "react";

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
  const [keyChangeMode, setKeyChangeMode] = useState(false);
  const [intervals] = useState(["R", "3", "5"]);
  const [tunning] = useState(DEFAULT_TUNNINGS.at(-1) as {[key:number]:string});
  const [neckIntervals, setNeckIntervals] = useState({});

  useEffect(() => {
    const initialIntervals = findInitialIntervals(intervals, keyName, tunning);
    setNeckIntervals(initialIntervals);
  }, [keyName, intervals, tunning]);

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
  return (
    <div className="flex flex-col w-full h-dvh items-center bg-[#101013]">
      <Header />
      <Neck
        keyName={keyName}
        neckIntervals={neckIntervals}
        setNeckIntervals={setNeckIntervals}
        tunning={tunning}
        editMode={editMode}
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
