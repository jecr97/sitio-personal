import { useState, useRef } from 'react';

export default function TechChip({ icon, label, description }) {
  const [open, setOpen] = useState(false);
  const id = `tip-${label.replace(/\s+/g, '')}`;

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(v => !v)}
        onBlur={() => setOpen(false)}
        className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-expanded={open}
        aria-describedby={id}
      >
        {icon}
        <span className="text-gray-200 text-sm">{label}</span>
      </button>

      <div
        id={id}
        role="tooltip"
        className={`absolute z-50 w-64 left-1/2 transform -translate-x-1/2 mt-3 px-3 py-2 rounded bg-gray-900 text-gray-200 text-sm shadow-lg transition-all duration-150 ${open ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none -translate-y-2'}`}
      >
        {description}
      </div>
    </div>
  );
}
