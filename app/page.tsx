"use client";
import ActionBar from "@/components/ActionBar";
import Header from "@/components/Header";
import Neck from "@/components/Neck";
import { useState } from "react";

export default function Home() {
  const [keyName, setKeyName] = useState("E");
  const [editMode, setEditMode] = useState(false);
  const [keyChangeMode, setKeyChangeMode] = useState(false);

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
      <Neck keyName={keyName} />
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
