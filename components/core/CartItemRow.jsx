import React from "react";
import { PromoTag } from "./PromoTag.jsx";
import { QuantityStepper } from "./QuantityStepper.jsx";
import { PriceText } from "./PriceText.jsx";

/* Speedi cart line item — image tile, title/unit/tag, price + stepper. */
export function CartItemRow({
  title = "Almarai Skimmed Milk, 1L × 4",
  unit = "4 × 1L",
  price = "29.8",
  oldPrice,
  image,
  tag,
  tagLabel,
  qty = 1,
  onQtyChange,
  style,
}) {
  return (
    <div style={{ display: "flex", gap: 12, padding: "12px 0", alignItems: "center", ...style }}>
      <div style={{ width: 64, height: 64, borderRadius: 10, background: "var(--surface-tile)", overflow: "hidden", flexShrink: 0, position: "relative" }}>
        {image
          ? <img src={image} alt="" style={{ width: "100%", height: "100%", objectFit: "contain", padding: 4, boxSizing: "border-box" }} />
          : <div style={{ position: "absolute", inset: "28%", borderRadius: 6, background: "var(--line-1)" }} />}
      </div>
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 3 }}>
        <span style={{
          fontFamily: "var(--font-en)", fontWeight: 600, fontSize: 13, lineHeight: "18px",
          color: "var(--text-body)", display: "-webkit-box", WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical", overflow: "hidden",
        }}>{title}</span>
        <span style={{ fontFamily: "var(--font-en)", fontWeight: 500, fontSize: 11, color: "var(--text-muted)" }}>{unit}</span>
        {tag && <div><PromoTag kind={tag} label={tagLabel} size="sm" /></div>}
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8, flexShrink: 0 }}>
        <span style={{ display: "inline-flex", alignItems: "baseline", gap: 5 }}>
          <PriceText value={price} size={15} />
          {oldPrice && <span style={{ fontFamily: "var(--font-en)", fontSize: 10, fontWeight: 500, color: "var(--text-strikethrough)", textDecoration: "line-through" }}>{oldPrice}</span>}
        </span>
        <QuantityStepper qty={qty} onChange={onQtyChange} size={26} />
      </div>
    </div>
  );
}
