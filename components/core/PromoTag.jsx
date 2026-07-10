import React from "react";

/* Speedi campaign tag — the promotional system's core primitive.
   Colors map to campaign families via tokens/colors.css. */

const PROMO_KINDS = {
  percent:      { color: "var(--speedi-red)",    tint: "var(--speedi-red-tint)",    label: "20% OFF" },
  flash:        { color: "var(--speedi-red)",    tint: "var(--speedi-red-tint)",    label: "Flash Deal" },
  bogo:         { color: "var(--promo-violet)",  tint: "var(--promo-violet-tint)",  label: "Buy 1 Get 1" },
  bundle:       { color: "var(--promo-violet)",  tint: "var(--promo-violet-tint)",  label: "Bundle & Save" },
  coupon:       { color: "var(--promo-blue)",    tint: "var(--promo-blue-tint)",    label: "Coupon" },
  cashback:     { color: "var(--promo-blue)",    tint: "var(--promo-blue-tint)",    label: "Cashback" },
  sample:       { color: "var(--promo-pink)",    tint: "var(--promo-pink-tint)",    label: "Free Sample" },
  gift:         { color: "var(--promo-pink)",    tint: "var(--promo-pink-tint)",    label: "Free Gift" },
  wheel:        { color: "var(--promo-gold)",    tint: "var(--promo-gold-tint)",    label: "Spin & Win" },
  points:       { color: "var(--promo-gold)",    tint: "var(--promo-gold-tint)",    label: "2x Points" },
  freeDelivery: { color: "var(--speedi-green)",  tint: "var(--speedi-green-tint)",  label: "Free Delivery" },
  fresh:        { color: "var(--speedi-green)",  tint: "var(--speedi-green-tint)",  label: "Fresh" },
};

export function PromoTag({ kind = "percent", label, solid = false, size = "md", style }) {
  const def = PROMO_KINDS[kind] || PROMO_KINDS.percent;
  const sm = size === "sm";
  return (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      fontFamily: "var(--font-en)",
      fontWeight: 700,
      fontSize: sm ? 10 : 11,
      lineHeight: sm ? "14px" : "15px",
      letterSpacing: "0.01em",
      padding: sm ? "2px 6px" : "3px 8px",
      borderRadius: 6,
      whiteSpace: "nowrap",
      color: solid ? "#FFFFFF" : def.color,
      backgroundColor: solid ? def.color : def.tint,
      ...style,
    }}>{label ?? def.label}</span>
  );
}

export const PROMO_TAG_KINDS = Object.keys(PROMO_KINDS);
