interface ActionBarProps {
  keyName: string;
  editMode: boolean;
  onEditModeChange: () => void;
  keyChangeMode: boolean;
  onKeyChangeModeChange: () => void;
  onKeyChange: (key: string) => void;
}

const ActionBar: React.FC<ActionBarProps> = ({
  keyName,
  editMode,
  onEditModeChange,
  keyChangeMode,
  onKeyChangeModeChange,
  onKeyChange,
}) => {
  const allKeys = [
    "C",
    "C#-Db",
    "D",
    "D#-Eb",
    "E",
    "F",
    "F#-Gb",
    "G",
    "G#-Ab",
    "A",
    "A#-Bb",
    "B",
  ];
  return (
    <div className="max-w-7xl flex items-center justify-between gap-[1px] w-full px-4 pb-4 text-[14px] leading-5">
      {editMode && !keyChangeMode && (
        <button
          className="w-fit py-[6px] px-3 rounded-[100px] ring-1 ring-[#E6FF81] bg-[#3C3F2F] text-[#E6FF81]"
          onClick={onKeyChangeModeChange}
        >
          Change key
        </button>
      )}
      {editMode && keyChangeMode && (
        <button
          className="w-[30px] h-[30px] p-[6px] shrink-0 flex items-center justify-center rounded-[100px] ring-1 ring-[#E6FF81] bg-[#3C3F2F] text-[#E6FF81]"
          onClick={onKeyChangeModeChange}
        >
          <img src="/CloseNoteContainer.svg" alt="Close" />
        </button>
      )}
      {keyChangeMode && (
        <div className="min-w-0 flex-shrink w-full relative">
          <div className="absolute w-[33px] h-full left-0 top-0 bg-gradient-to-r from-[#101013]"></div>
          <div className="flex overflow-x-auto font-medium">
            <div
              className={`
                min-w-[56px] h-[32px] rounded-[24px] p-[6px] flex items-center justify-center 
                bg-[#1D1F2C] text-[#B3BDC7] 
                select-none`}
            >
              Key
            </div>
            {allKeys.map((key, index) => (
              <button
                key={index}
                className={`
                min-w-[56px] h-[32px] rounded-[24px] p-[6px] flex items-center justify-center 
                ${
                  keyName === key
                    ? "bg-[#E6FF81] text-[#1D1F2C]"
                    : "bg-[#1D1F2C] text-[#B3BDC7]"
                } 
                select-none`}
                onClick={() => onKeyChange(key)}
              >
                {key}
              </button>
            ))}
          </div>
          <div className="pointer-events-none absolute w-[33px] h-full right-0 top-0 bg-gradient-to-r from-transparent to-[#101013]"></div>
        </div>
      )}
      <button
        className="min-w-fit flex-shrink w-fit h-8 py-[6px] px-3 rounded-[100px] bg-[#1D1F2C] text-[#B3BDC7] ml-auto"
        onClick={onEditModeChange}
      >
        Edit mode
      </button>
    </div>
  );
};

export default ActionBar;
