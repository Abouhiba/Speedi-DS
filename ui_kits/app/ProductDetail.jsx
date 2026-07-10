import React from "react";
import { TopBar } from "../../components/core/TopBar.jsx";
import { PromoTag } from "../../components/core/PromoTag.jsx";
import { SectionHeader } from "../../components/core/SectionHeader.jsx";
import { ProductCard } from "../../components/core/ProductCard.jsx";
import { QuantityStepper } from "../../components/core/QuantityStepper.jsx";
import { SpeediButton } from "../../components/core/SpeediButton.jsx";
import { PriceText } from "../../components/core/PriceText.jsx";

/* Speedi PDP — migrated from V1 product detail structure: gallery, campaign block,
   price hero, delivery note, related items on the unified ProductCard. */

export function ProductDetail({ onBack, onNav }) {
  const [qty, setQty] = React.useState(1);
  return (
    <div data-screen-label="Product Detail" style={{
      width: 375, minHeight: 812, background: "var(--surface-page)",
      fontFamily: "var(--font-en)", display: "flex", flexDirection: "column", boxSizing: "border-box",
    }}>
      <div style={{ paddingTop: 44, background: "var(--surface-card)" }}>
        <TopBar title="Product Details" onBack={onBack} />
      </div>

      {/* Gallery */}
      <div style={{ background: "var(--surface-card)", padding: "8px 15px 16px" }}>
        <div style={{ position: "relative", borderRadius: 14, background: "var(--surface-tile)", aspectRatio: "1 / 1", overflow: "hidden" }}>
          <img src="assets/prod-milk.png" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", padding: 28, boxSizing: "border-box" }} />
          <div style={{ position: "absolute", top: 10, left: 10 }}><PromoTag kind="percent" label="25% OFF" solid /></div>
          <div style={{ position: "absolute", bottom: 10, right: 10, background: "rgba(20,20,20,.55)", color: "#fff", fontSize: 10, fontWeight: 700, borderRadius: 100, padding: "2px 8px" }}>1 / 4</div>
        </div>
      </div>

      <div style={{ padding: "12px 15px", display: "flex", flexDirection: "column", gap: 12 }}>
        {/* Title + price */}
        <div style={{ background: "var(--surface-card)", borderRadius: 12, padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <PriceText value="29.8" size={24} />
            <span style={{ fontSize: 12, fontWeight: 500, color: "var(--text-strikethrough)", textDecoration: "line-through" }}>39.5</span>
            <PromoTag kind="coupon" label="⃁ 5 coupon applied" size="sm" style={{ marginLeft: "auto" }} />
          </div>
          <span style={{ fontWeight: 700, fontSize: 17, lineHeight: "22px", color: "var(--ink-black)" }}>Almarai Skimmed Milk, 1 Liter × 4 Pack</span>
          <span style={{ fontSize: 12, color: "var(--text-muted)" }}>4 × 1L · Fresh dairy · Sold 2.4k this week</span>
        </div>

        {/* Campaign block */}
        <div style={{ background: "var(--surface-card)", borderRadius: 12, padding: 14, display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <PromoTag kind="bundle" />
            <span style={{ fontSize: 12.5, fontWeight: 600, color: "var(--ink-1)", flex: 1 }}>Bundle with Almarai Butter — save ⃁ 6.5</span>
            <span style={{ fontSize: 11, fontWeight: 700, color: "var(--speedi-red)" }}>Add ›</span>
          </div>
          <div style={{ height: 1, background: "var(--line-1)" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <PromoTag kind="freeDelivery" />
            <span style={{ fontSize: 12.5, fontWeight: 600, color: "var(--ink-1)" }}>Free delivery on orders over ⃁ 50</span>
          </div>
        </div>

        {/* Delivery */}
        <div style={{ background: "var(--surface-card)", borderRadius: 12, padding: 14, display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: "var(--ink-1)", flex: 1 }}>Deliver to House · King Fahd Rd</span>
          <span style={{ fontSize: 12, fontWeight: 700, color: "var(--speedi-green)" }}>25 min</span>
        </div>

        {/* Related — unified card, row variant */}
        <SectionHeader title="Related Items" />
        <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingBottom: 90 }}>
          <ProductCard variant="row" tag="bogo" image="assets/prod-cheese.png" title="Almarai Cream Cheese Analogue, 500g" price="18.9" oldPrice="24.5" />
          <ProductCard variant="row" image="assets/prod-butter.png" title="Almarai Salted Natural Butter, 200g" price="16.99" />
        </div>
      </div>

      {/* Sticky action bar */}
      <div style={{
        position: "sticky", bottom: 0, marginTop: "auto", background: "var(--surface-card)",
        borderTop: "1px solid var(--line-1)", padding: "10px 15px 22px",
        display: "flex", alignItems: "center", gap: 14,
      }}>
        <QuantityStepper qty={qty} onChange={setQty} />
        <SpeediButton fullWidth onClick={() => onNav && onNav("cart")}>Add to Cart · ⃁ {(29.8 * qty).toFixed(1)}</SpeediButton>
      </div>
    </div>
  );
}
