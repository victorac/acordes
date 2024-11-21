"use client";
import ActionBar from "@/components/ActionBar";
import Header from "@/components/Header";
import Neck from "@/components/Neck";
import SettingsMenu from "@/components/SettingsMenu";
import { useNeckState } from "@/hooks/useNeckState";

export default function Home() {
  const {
    keyName,
    editMode,
    keyChangeMode,
    tuning,
    neckIntervals,
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
  } = useNeckState("E");
  return (
    <div className="flex flex-col w-full h-dvh items-center bg-[#101013]">
      <Header
        settingsMode={settingsMode}
        toggleSettingsMode={toggleSettingsMode}
      />
      <SettingsMenu
        settingsMode={settingsMode}
        tuning={tuning}
        numberOfStrings={Object.keys(tuning).length}
        setNumberOfStrings={setNumberOfStrings}
        transposePlus={transposePlus}
        transposeMinus={transposeMinus}
        stringOrientation={stringOrientation}
        toggleStringOrientation={toggleStringOrientation}
      />
      <Neck
        keyName={keyName}
        neckIntervals={neckIntervals}
        tuning={tuning}
        editMode={editMode}
        stringOrientation={stringOrientation}
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
