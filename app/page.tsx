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
    stringCount,
    presets,
    selectedPreset,
    strings,
    isSmallScreen,
    handleSelectPreset,
    handleChangeStringCount,
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
    transposePlus,
    transposeMinus,
    toggleStringOrientation,
    stringOrientation,
    handleResetApp,
    cellDimensions,
  } = useNeckState("E");
  return (
    <div className="flex flex-col w-full h-dvh items-center bg-[#101013]">
      <Header
        settingsMode={settingsMode}
        toggleSettingsMode={toggleSettingsMode}
      />
      <SettingsMenu
        tuning={tuning}
        stringCount={stringCount}
        stringOrientation={stringOrientation}
        settingsMode={settingsMode}
        selectedPreset={selectedPreset}
        presets={presets}
        strings={strings}
        handleSelectPreset={handleSelectPreset}
        transposePlus={transposePlus}
        transposeMinus={transposeMinus}
        toggleStringOrientation={toggleStringOrientation}
        handleChangeStringCount={handleChangeStringCount}
        handleResetApp={handleResetApp}
        toggleSettingsMode={toggleSettingsMode}
      />
      <Neck
        keyName={keyName}
        neckIntervals={neckIntervals}
        tuning={tuning}
        editMode={editMode}
        strings={strings}
        isSmallScreen={isSmallScreen}
        handleAddNote={handleAddNote}
        handleRemoveNote={handleRemoveNote}
        handleNutClick={handleNutClick}
        startNoteDragging={startNoteDragging}
        updateNotePosition={updateNotePosition}
        resetNoteDragging={resetNoteDragging}
        cellDimensions={cellDimensions}
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
