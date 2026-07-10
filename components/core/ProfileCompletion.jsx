import React from "react";

/* Speedi profile completion — ring + optional task chips.
   Used on the Account page header. */

export function ProfileCompletion({
  percent = 60,
  size = 64,
  stroke = 5,
  children,
  tasks,
  style,
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const done = Math.max(0, Math.min(100, percent));
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: "var(--font-en)", ...style }}>
      <div style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
        <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--line-1)" strokeWidth={stroke} />
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--speedi-red)" strokeWidth={stroke}
            strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - done / 100)}
            style={{ transition: "stroke-dashoffset var(--motion-slow) var(--ease-swift)" }} />
        </svg>
        <div style={{
          position: "absolute", inset: stroke + 2, borderRadius: "50%", overflow: "hidden",
          background: "var(--surface-tile)", display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          {children ?? <svg viewBox="0 0 24 24" width={size * 0.42} height={size * 0.42} style={{ color: "var(--ink-3)" }}><path fill="currentColor" d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-3.33 0-8 1.67-8 5v1h16v-1c0-3.33-4.67-5-8-5Z"/></svg>}
        </div>
        <span style={{
          position: "absolute", bottom: -4, left: "50%", transform: "translateX(-50%)",
          background: "var(--speedi-red)", color: "#fff", fontWeight: 800, fontSize: 10,
          lineHeight: "14px", padding: "0 6px", borderRadius: 7, whiteSpace: "nowrap",
        }}>{done}%</span>
      </div>
      {tasks && tasks.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, minWidth: 0 }}>
          {tasks.map((t, i) => (
            <span key={i} style={{
              display: "inline-flex", alignItems: "center", gap: 4,
              fontSize: 11, fontWeight: 600, lineHeight: "15px",
              color: t.done ? "var(--speedi-green)" : "var(--ink-2)",
              background: t.done ? "var(--speedi-green-tint)" : "var(--surface-tile)",
              padding: "3px 8px", borderRadius: 100,
            }}>
              {t.done ? "✓" : "+"} {t.label}{t.bonus && !t.done ? <span style={{ color: "var(--speedi-red)", fontWeight: 800 }}> {t.bonus}</span> : null}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
