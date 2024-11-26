import React from "react";

interface HeaderProps {
  settingsMode: boolean;
  toggleSettingsMode: () => void;
}

const Header: React.FC<HeaderProps> = ({settingsMode, toggleSettingsMode}) => (
  <nav className={`
  flex items-center justify-between
  w-full h-[38px] sm:h-auto pt-2 px-4 
  text-[#B3BDC7] text-[11px] leading-3
  ${settingsMode? "bg-[#181A24]" : "bg-transparent"}
  transition-colors ease-in-out
  ${settingsMode ? "duration-0" : "duration-1000"}
  z-[1000]
  `}>
    <h1 className="px-4">Acorde</h1>
    <button className="px-4 py-2" onClick={toggleSettingsMode}>
      Settings
    </button>
  </nav>
);

export default Header;
