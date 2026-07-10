import React from "react";

/* Speedi top bar — back chip, Bold 17 title, optional right slot. */
export function TopBar({ title = "Page Title", onBack, right, style }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 10, height: 48,
      padding: "0 10px", backgroundColor: "var(--surface-card)", boxSizing: "border-box", ...style,
    }}>
      <div onClick={onBack} style={{
        width: 30, height: 30, borderRadius: 8, flexShrink: 0,
        boxShadow: "inset 0 0 0 1px var(--line-1)", display: "flex",
        alignItems: "center", justifyContent: "center", cursor: "pointer", background: "#fff",
      }}>
        <svg width="8" height="13" viewBox="0 0 8 13"><path d="M7 1L1.5 6.5 7 12" stroke="var(--ink-black)" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
      <span style={{
        flex: 1, textAlign: "center", fontFamily: "var(--font-en)",
        fontWeight: 700, fontSize: 17, lineHeight: "22px", color: "var(--ink-black)",
        whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
      }}>{title}</span>
      <div style={{ minWidth: 30, display: "flex", justifyContent: "flex-end" }}>{right}</div>
    </div>
  );
}
