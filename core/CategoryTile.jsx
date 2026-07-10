import React from "react";

/* Speedi category tile — image on pastel/neutral tile + two-line label. */
export function CategoryTile({ label = "Vegetables\nSoy Foods", image, bg = "var(--surface-tile)", size = 62, onClick, style }) {
  return (
    <div onClick={onClick} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5, cursor: "pointer", width: size + 4, ...style }}>
      <div style={{ width: size, height: size, borderRadius: 14, background: bg, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {image
          ? <img src={image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          : <div style={{ width: "55%", height: "55%", borderRadius: 8, background: "var(--line-1)" }} />}
      </div>
      <span style={{
        fontFamily: "var(--font-en)", fontWeight: 500, fontSize: 10.5, lineHeight: "13px",
        color: "var(--ink-1)", textAlign: "center", whiteSpace: "pre-line",
      }}>{label}</span>
    </div>
  );
}
