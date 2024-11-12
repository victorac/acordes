"use client";
import ActionBar from "@/components/ActionBar";
import Header from "@/components/Header";
import Neck from "@/components/Neck";
import { findInitialIntervals } from "@/utils/notes";
import { useEffect, useState } from "react";

export default function Home() {
  const [keyName, setKeyName] = useState("E");
  const [editMode, setEditMode] = useState(false);
  const [keyChangeMode, setKeyChangeMode] = useState(false);
  const [intervals, ] = useState(["R", "3", "5"]);
  const [tunning, ] = useState({
    1: "E",
    2: "B",
    3: "G",
    4: "D",
    5: "A",
    6: "E",
  });
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
