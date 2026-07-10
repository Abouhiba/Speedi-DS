import React from "react";

/* Speedi section header — Bold title + optional "View all" link. */
export function SectionHeader({ title = "Big Savings", action = "View all", onAction, style }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 10, ...style }}>
      <span style={{ fontFamily: "var(--font-en)", fontWeight: 700, fontSize: 17, lineHeight: "22px", color: "var(--ink-black)" }}>{title}</span>
      {action && <span onClick={onAction} style={{ fontFamily: "var(--font-en)", fontWeight: 600, fontSize: 12, color: "var(--speedi-red)", cursor: "pointer" }}>{action} ›</span>}
    </div>
  );
}
