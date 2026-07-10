import React from "react";

/* Speedi price text — brand price convention:
   - riyal symbol ⃁ (U+20C1) at ~62% size (Western digits in BOTH languages, incl. Arabic UI)
   - integer part at full size, ExtraBold red
   - decimal part (with the point) at ~62% size
   e.g. ⃁ 3.[99], never "SR"/"SAR" text where [99] renders smaller. */
export function PriceText({
  value = "29.8",
  size = 17,
  color = "var(--speedi-red)",
  weight = 800,
  currency = "\u20C1",
  style,
}) {
  const s = String(value);
  const dot = s.indexOf(".");
  const int = dot === -1 ? s : s.slice(0, dot);
  const dec = dot === -1 ? "" : s.slice(dot); // includes the "."
  const small = Math.round(size * 0.62);
  return (
    <span dir="ltr" style={{ fontFamily: "var(--font-en)", fontWeight: weight, color, lineHeight: 1.2, whiteSpace: "nowrap", ...style }}>
      {currency && <span style={{ fontSize: small, fontWeight: 700, marginRight: 2 }}>{currency} </span>}
      <span style={{ fontSize: size }}>{int}</span>
      {dec && <span style={{ fontSize: small }}>{dec}</span>}
    </span>
  );
}
