import React from "react";

/* Speedi search bar — rounded field on the tile gray, barcode-scan trailing icon (as the original design). */
export function SearchBar({ placeholder = "Search for Products", value, onChange, onScan, style }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 8, height: 40,
      borderRadius: 10, backgroundColor: "var(--surface-tile)", padding: "0 12px",
      boxSizing: "border-box", ...style,
    }}>
      <svg width="16" height="16" viewBox="0 0 16 16" style={{ flexShrink: 0 }}>
        <circle cx="7" cy="7" r="5.2" stroke="var(--ink-3)" strokeWidth="1.7" fill="none" />
        <path d="M11 11l3.4 3.4" stroke="var(--ink-3)" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
      <input value={value} onChange={onChange} placeholder={placeholder} style={{
        flex: 1, border: "none", outline: "none", background: "transparent",
        fontFamily: "var(--font-en)", fontSize: 14, color: "var(--ink-1)", minWidth: 0,
      }} />
      <svg onClick={onScan} width="18" height="18" viewBox="0 0 18 18" style={{ flexShrink: 0, cursor: "pointer" }} aria-label="Scan barcode">
        <g stroke="var(--ink-2)" strokeWidth="1.5" strokeLinecap="round" fill="none">
          <path d="M1 5V2.5A1.5 1.5 0 0 1 2.5 1H5" />
          <path d="M13 1h2.5A1.5 1.5 0 0 1 17 2.5V5" />
          <path d="M17 13v2.5a1.5 1.5 0 0 1-1.5 1.5H13" />
          <path d="M5 17H2.5A1.5 1.5 0 0 1 1 15.5V13" />
          <path d="M4.5 6v6" />
          <path d="M7.5 6v6" />
          <path d="M10.5 6v6" />
          <path d="M13.5 6v6" />
        </g>
      </svg>
    </div>
  );
}
