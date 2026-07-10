import React from "react";

/* Speedi backend-managed banner slot. Pass an image for a filled slot;
   omit it to show the labeled drag-and-drop frame designers leave for ops. */
export function BannerSlot({ image, label = "Banner slot — managed from backend", ratio = "848 / 366", radius = 12, style }) {
  return (
    <div style={{
      width: "100%", aspectRatio: ratio, borderRadius: radius, overflow: "hidden",
      position: "relative", background: "var(--surface-tile)", boxSizing: "border-box", ...style,
    }}>
      {image
        ? <img src={image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        : (
          <div style={{
            position: "absolute", inset: 0, display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: 6,
            border: "1.5px dashed var(--line-2)", borderRadius: radius,
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" style={{ color: "var(--ink-3)" }}><path fill="currentColor" d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2ZM8.5 12l2.5 3 3.5-4.5L19 17H5l3.5-5Z"/><circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/></svg>
            <span style={{ fontFamily: "var(--font-en)", fontWeight: 600, fontSize: 11, color: "var(--ink-3)", textAlign: "center", padding: "0 16px" }}>{label}</span>
          </div>
        )}
    </div>
  );
}
