type IconProps = { className?: string };

// Line-art gym equipment, used as large low-opacity background texture — not literal photography.

export function BarbellIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 260 90" className={className} fill="none" stroke="currentColor" strokeWidth="2.5">
      <line x1="60" y1="45" x2="200" y2="45" />
      <rect x="15" y="15" width="14" height="60" rx="3" />
      <rect x="31" y="24" width="10" height="42" rx="2" />
      <rect x="231" y="15" width="14" height="60" rx="3" />
      <rect x="219" y="24" width="10" height="42" rx="2" />
      <circle cx="130" cy="45" r="6" />
    </svg>
  );
}

export function DumbbellIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 200 80" className={className} fill="none" stroke="currentColor" strokeWidth="2.5">
      <line x1="70" y1="40" x2="130" y2="40" />
      <rect x="12" y="12" width="24" height="56" rx="6" />
      <rect x="40" y="22" width="14" height="36" rx="3" />
      <rect x="164" y="12" width="24" height="56" rx="6" />
      <rect x="146" y="22" width="14" height="36" rx="3" />
    </svg>
  );
}

export function PlateIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2.5">
      <circle cx="50" cy="50" r="46" />
      <circle cx="50" cy="50" r="32" strokeDasharray="4 6" />
      <circle cx="50" cy="50" r="10" />
    </svg>
  );
}

export function KettlebellIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 120 130" className={className} fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M40 40 a20 20 0 0 1 40 0" />
      <path d="M30 45 C15 55 12 75 20 92 C30 115 90 115 100 92 C108 75 105 55 90 45 C75 36 45 36 30 45 Z" />
    </svg>
  );
}
