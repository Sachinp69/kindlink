import React, { useState, useRef, useEffect } from "react";

interface DropdownOption {
    label: string;
    value: string;
}

// #revisit
interface DropdownProps {
    options: DropdownOption[];
    placeholder?: string;
    onSelect: (option: DropdownOption) => void;
    selected?: DropdownOption;
    className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
    options,
    placeholder = "Select an option",
    onSelect,
    selected,
    className = "",
}) => {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    //Adds an event listener to close the dropdown if a click occurs outside the component. Cleans up the listener on unmount
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className={`relative w-64 ${className}`} ref={ref}>
            <button
                type="button"
                className="w-full bg-white border border-gray-300 rounded-md shadow-sm pl-4 pr-10 py-2 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => setOpen((prev) => !prev)}
            >
                <span className="block truncate text-gray-700">
                    {selected ? selected.label : placeholder}
                </span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                        className="h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                    >
                        <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
            </button>
            {open && (
                <ul className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto">
                    {options.map((option) => (
                        <li
                            key={option.value}
                            className={`cursor-pointer select-none relative py-2 pl-4 pr-4 hover:bg-blue-100 ${
                                selected?.value === option.value ? "bg-blue-50 text-blue-700" : "text-gray-900"
                            }`}
                            onClick={() => {
                                onSelect(option);
                                setOpen(false);
                            }}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;