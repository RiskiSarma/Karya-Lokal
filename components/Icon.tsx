export function Icon({ n, className = "" }: { n: string; className?: string }) {
  return (
    <svg className={`i ${className}`} aria-hidden="true">
      <use href={`#${n}`} />
    </svg>
  );
}

// Sprite ikon bergaya Bootstrap Icons (garis, 24px). Dipasang sekali di layout.
export function Sprite() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <symbol id="sprout" viewBox="0 0 24 24"><path d="M12 21v-9" /><path d="M12 13c0-4 3-6 8-6 0 4-3 6-8 6z" /><path d="M12 16c0-3-2-5-7-5 0 3 2 5 7 5z" /></symbol>
        <symbol id="globe" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18" /></symbol>
        <symbol id="app" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18" /><path d="M7 14h4" /></symbol>
        <symbol id="bolt" viewBox="0 0 24 24"><path d="M13 2L4 14h7l-1 8 9-12h-7z" /></symbol>
        <symbol id="shield" viewBox="0 0 24 24"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M9 12l2 2 4-4" /></symbol>
        <symbol id="receipt" viewBox="0 0 24 24"><path d="M6 3h12v18l-3-2-3 2-3-2-3 2z" /><path d="M9 8h6" /><path d="M9 12h6" /></symbol>
        <symbol id="clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></symbol>
        <symbol id="arrow" viewBox="0 0 24 24"><path d="M5 12h14" /><path d="M13 6l6 6-6 6" /></symbol>
        <symbol id="pin" viewBox="0 0 24 24"><path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></symbol>
        <symbol id="chat" viewBox="0 0 24 24"><path d="M4 5h16v11H9l-5 4z" /></symbol>
        <symbol id="menu" viewBox="0 0 24 24"><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></symbol>
        <symbol id="plus" viewBox="0 0 24 24"><path d="M12 5v14" /><path d="M5 12h14" /></symbol>
      </defs>
    </svg>
  );
}
