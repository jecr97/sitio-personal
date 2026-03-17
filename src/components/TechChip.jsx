import { useState } from 'react';

export default function TechChip({ icon, label, description }) {
  const [open, setOpen] = useState(false);
  const id = `tip-${label.replace(/\s+/g, '')}`;

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(v => !v)}
        onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false); }}
        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-surface-2 border border-border text-[var(--text-secondary)] text-sm font-medium hover:border-accent hover:text-accent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50"
        aria-expanded={open}
        aria-describedby={id}
      >
        <span className="text-base">{icon}</span>
        <span>{label}</span>
      </button>

      <div
        id={id}
        role="tooltip"
        className={`absolute z-50 w-60 left-1/2 -translate-x-1/2 mt-2 px-4 py-3 rounded-xl glass border border-border text-[var(--text-secondary)] text-xs leading-relaxed shadow-card transition-all duration-200 ${
          open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <p className="font-medium text-white mb-1">{label}</p>
        {description}
      </div>
    </div>
  );
}
