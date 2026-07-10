import React from "react";
import { PromoTag } from "./PromoTag.jsx";
import { PriceText } from "./PriceText.jsx";

/* Speedi unified item card — ONE product component for every surface:
   home grids, category page, search, recommendations, related items, brand pages.
   variant="grid" (default, 172pt) or variant="row" (full-width horizontal). */

function AddButton({ qty = 0, size = 32 }) {
  const has = qty > 0;
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "center",
      minWidth: size, height: size, borderRadius: size / 2,
      backgroundColor: "var(--speedi-red)", color: "#fff",
      fontFamily: "var(--font-en)", fontWeight: 700, fontSize: 15,
      padding: has ? "0 10px" : 0, gap: 6,
      boxShadow: "0 1px 3px rgba(20,20,20,.18)",
      transition: "transform var(--motion-fast) var(--ease-swift)",
      cursor: "pointer", userSelect: "none",
    }}>
      {has ? <span style={{ fontSize: 13 }}>{qty}</span> : null}
      <svg width="14" height="14" viewBox="0 0 14 14"><path d="M7 1v12M1 7h12" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>
    </div>
  );
}

function Price({ price, oldPrice, big }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 5 }}>
      <PriceText value={price} size={big ? 17 : 15} />
      {oldPrice != null && (
        <span style={{
          fontFamily: "var(--font-en)", fontWeight: 500, fontSize: 10,
          color: "var(--text-strikethrough)", textDecoration: "line-through",
        }}>{oldPrice}</span>
      )}
    </div>
  );
}

export function ProductCard({
  variant = "grid",
  title = "Almarai Skimmed Milk, 1L × 4",
  price = "29.8",
  oldPrice,
  image,
  tag,
  tagLabel,
  qty = 0,
  width,
  style,
}) {
  const img = (
    <div style={{
      position: "relative",
      width: variant === "grid" ? "100%" : 96,
      height: variant === "grid" ? undefined : 96,
      aspectRatio: variant === "grid" ? "1 / 1" : undefined,
      borderRadius: 12,
      backgroundColor: "var(--surface-tile)",
      overflow: "hidden",
      flexShrink: 0,
    }}>
      {image
        ? <img src={image} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", padding: 8, boxSizing: "border-box" }} />
        : <svg viewBox="0 0 24 24" width="28" height="28" style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", color: "var(--line-2)" }}><path fill="currentColor" d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2ZM8.5 12l2.5 3 3.5-4.5L19 17H5l3.5-5Z"/><circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/></svg>}
      {tag && (
        <div style={{ position: "absolute", top: 6, left: 6 }}>
          <PromoTag kind={tag} label={tagLabel} solid size="sm" />
        </div>
      )}
    </div>
  );

  const body = (
    <div style={{ display: "flex", flexDirection: "column", minWidth: 0, flex: 1 }}>
      <span style={{
        fontFamily: "var(--font-en)", fontWeight: 600, fontSize: 13, lineHeight: "18px",
        color: "var(--text-body)", display: "-webkit-box", WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical", overflow: "hidden",
        height: 36, /* always reserve exactly 2 lines so cards align in any grid */
      }}>{title}</span>
    </div>
  );

  if (variant === "row") {
    return (
      <div style={{
        display: "flex", gap: 12, alignItems: "center",
        backgroundColor: "var(--surface-card)", borderRadius: 12, padding: 10,
        width: width ?? "100%", boxSizing: "border-box", ...style,
      }}>
        {img}
        <div style={{ display: "flex", flexDirection: "column", gap: 6, flex: 1, minWidth: 0 }}>
          {body}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
            <Price price={price} oldPrice={oldPrice} big />
            <AddButton qty={qty} size={30} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      display: "flex", flexDirection: "column", gap: 8,
      backgroundColor: "var(--surface-card)", borderRadius: 12, padding: 10,
      width: width ?? 172, boxSizing: "border-box", position: "relative", ...style,
    }}>
      {img}
      {body}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
        <Price price={price} oldPrice={oldPrice} big />
        <AddButton qty={qty} />
      </div>
    </div>
  );
}
