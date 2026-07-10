import React from "react";

/* Speedi quantity stepper — pill with minus / count / plus. */
export function QuantityStepper({ qty = 1, onChange, size = 30, style }) {
  const btn = {
    width: size, height: size, borderRadius: size / 2, display: "flex",
    alignItems: "center", justifyContent: "center", cursor: "pointer",
    flexShrink: 0, userSelect: "none",
  };
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, ...style }}>
      <div onClick={() => onChange && onChange(Math.max(0, qty - 1))}
        style={{ ...btn, boxShadow: "inset 0 0 0 1.5px var(--line-2)", background: "#fff" }}>
        <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6h8" stroke="var(--ink-1)" strokeWidth="1.8" strokeLinecap="round"/></svg>
      </div>
      <span style={{
        fontFamily: "var(--font-en)", fontWeight: 700, fontSize: 15,
        minWidth: 18, textAlign: "center", color: "var(--ink-black)",
      }}>{qty}</span>
      <div onClick={() => onChange && onChange(qty + 1)}
        style={{ ...btn, background: "var(--speedi-red)" }}>
        <svg width="12" height="12" viewBox="0 0 12 12"><path d="M6 2v8M2 6h8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/></svg>
      </div>
    </div>
  );
}
