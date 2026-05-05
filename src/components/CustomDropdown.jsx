import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

const CustomDropdown = ({ options, label, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    if (onSelect) onSelect(option);
  };

  return (
    <div
      className="relative inline-block w-full sm:w-64 text-left"
      ref={dropdownRef}
    >
      {/* Label (Optional) */}
      {label && (
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2 ml-1">
          {label}
        </p>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between w-full bg-white border px-5 py-3 rounded-2xl text-xs font-bold transition-all duration-300
          ${isOpen ? "border-amber-500 ring-4 ring-amber-500/5 shadow-sm" : "border-gray-200 hover:border-amber-200 shadow-sm"}
          text-gray-700`}
      >
        <span className="truncate">{selected.label}</span>
        <ChevronDown
          size={16}
          className={`ml-2 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-amber-600" : ""}`}
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute z-50 w-full mt-2 bg-white border border-gray-100 rounded-2xl shadow-2xl shadow-gray-200/50 overflow-hidden transition-all duration-200 origin-top
          ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}`}
      >
        <div className="py-2 max-h-60 overflow-y-auto">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option)}
              className={`flex items-center justify-between w-full px-5 py-3 text-left text-xs font-bold transition-colors
                ${
                  selected.value === option.value
                    ? "bg-amber-50 text-amber-700"
                    : "text-gray-600 hover:bg-gray-50 hover:text-amber-600"
                }`}
            >
              {option.label}
              {selected.value === option.value && (
                <Check size={14} strokeWidth={3} />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomDropdown;
