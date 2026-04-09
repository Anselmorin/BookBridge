"use client";

import { CATEGORIES } from "../data";

interface CategoryPickerProps {
  bookTitle: string;
  onPick: (category: string) => void;
  onSkip: () => void;
}

export default function CategoryPicker({ bookTitle, onPick, onSkip }: CategoryPickerProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.7)" }}>
      <div className="bg-[var(--prysm-surface)] border border-[var(--prysm-border)] rounded-2xl p-6 max-w-sm w-full">
        <p className="text-xs text-[var(--prysm-muted)] mb-1">Couldn&apos;t auto-detect category for</p>
        <p className="font-semibold text-white mb-4 line-clamp-2">&ldquo;{bookTitle}&rdquo;</p>
        <p className="text-sm text-[var(--prysm-muted)] mb-4">What category fits this book best?</p>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onPick(cat.id)}
              className="flex items-center gap-2 p-3 rounded-xl border border-[var(--prysm-border)] hover:border-purple-500/50 hover:bg-purple-500/10 transition-colors text-left"
            >
              <span className="text-xl">{cat.icon}</span>
              <span className="text-sm font-medium">{cat.label}</span>
            </button>
          ))}
        </div>
        <button onClick={onSkip} className="w-full text-center text-xs text-[var(--prysm-muted)] hover:text-white transition-colors py-2">
          Skip — don&apos;t categorize
        </button>
      </div>
    </div>
  );
}
