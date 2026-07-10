import React from "react";

/* Speedi button — primary / secondary / ghost, 48px default. */
export function SpeediButton({
  variant = "primary",
  size = "md",
  disabled = false,
  children = "Button",
  fullWidth = false,
  onClick,
  style,
}) {
  const h = size === "sm" ? 36 : size === "lg" ? 52 : 48;
  const base = {
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    height: h, padding: size === "sm" ? "0 14px" : "0 20px",
    borderRadius: 8, border: "none", cursor: disabled ? "default" : "pointer",
    fontFamily: "var(--font-en)", fontWeight: 700,
    fontSize: size === "sm" ? 13 : 15, lineHeight: "20px",
    width: fullWidth ? "100%" : undefined, boxSizing: "border-box",
    transition: "transform var(--motion-fast) var(--ease-swift), background-color var(--motion-fast) var(--ease-swift)",
    userSelect: "none",
  };
  const looks = disabled
    ? { backgroundColor: "var(--surface-tile)", color: "var(--text-disabled)" }
    : variant === "primary"
    ? { backgroundColor: "var(--speedi-red)", color: "#fff" }
    : variant === "secondary"
    ? { backgroundColor: "#fff", color: "var(--speedi-red)", boxShadow: "inset 0 0 0 1.5px var(--speedi-red)" }
    : { backgroundColor: "transparent", color: "var(--ink-1)", boxShadow: "inset 0 0 0 1px var(--line-2)" };
  return (
    <button style={{ ...base, ...looks, ...style }} disabled={disabled} onClick={onClick}
      onMouseDown={e => { if (!disabled) e.currentTarget.style.transform = "scale(0.97)"; }}
      onMouseUp={e => { e.currentTarget.style.transform = "scale(1)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
    >{children}</button>
  );
}
