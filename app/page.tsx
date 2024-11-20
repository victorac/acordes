"use client";
import ActionBar from "@/components/ActionBar";
import Header from "@/components/Header";
import Neck from "@/components/Neck";
import { useNeckState } from "@/hooks/useNeckState";

export default function Home() {
  const {
    keyName,
    editMode,
    keyChangeMode,
    tunning,
    neckIntervals,
    handleAddNote,
    handleRemoveNote,
    handleNutClick,
    startNoteDragging,
    updateNotePosition,
    resetNoteDragging,
    handleEditModeChange,
    handleKeyChangeModeChange,
    handleKeyChange,
  } = useNeckState("E");
  return (
    <div className="flex flex-col w-full h-dvh items-center bg-[#101013]">
      <Header />
      <Neck
        keyName={keyName}
        neckIntervals={neckIntervals}
        tunning={tunning}
        editMode={editMode}
        handleAddNote={handleAddNote}
        handleRemoveNote={handleRemoveNote}
        handleNutClick={handleNutClick}
        startNoteDragging={startNoteDragging}
        updateNotePosition={updateNotePosition}
        resetNoteDragging={resetNoteDragging}
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
