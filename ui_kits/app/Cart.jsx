import React from "react";
import { TopBar } from "../../components/core/TopBar.jsx";
import { CartItemRow } from "../../components/core/CartItemRow.jsx";
import { PromoTag } from "../../components/core/PromoTag.jsx";
import { SectionHeader } from "../../components/core/SectionHeader.jsx";
import { ProductCard } from "../../components/core/ProductCard.jsx";
import { SpeediButton } from "../../components/core/SpeediButton.jsx";
import { PriceText } from "../../components/core/PriceText.jsx";

/* Speedi Cart — migrated from V1 购物车: free-delivery progress,
   line items, campaign upsell, suggestions, sticky checkout bar. */

export function Cart({ onBack, onNav }) {
  const [items, setItems] = React.useState([
    { id: 1, title: "Almarai Skimmed Milk, 1L × 4", unit: "4 × 1L", price: "29.8", oldPrice: "39.5", image: "assets/prod-milk.png", tag: "percent", tagLabel: "25% OFF", qty: 1 },
    { id: 2, title: "Almarai Cream Cheese Analogue, 500g", unit: "500g", price: "18.9", image: "assets/prod-cheese.png", tag: "bogo", qty: 2 },
    { id: 3, title: "Premium Hainan Feizixiao Lychee", unit: "500g", price: "9.9", image: "assets/prod-lychee.png", qty: 1 },
  ]);
  const setQty = (id, q) => setItems(list => list.map(i => i.id === id ? { ...i, qty: q } : i).filter(i => i.qty > 0));
  const total = items.reduce((s, i) => s + parseFloat(i.price) * i.qty, 0);
  const freeAt = 80;

  return (
    <div data-screen-label="Cart" style={{
      width: 375, minHeight: 812, background: "var(--surface-page)",
      fontFamily: "var(--font-en)", display: "flex", flexDirection: "column", boxSizing: "border-box",
    }}>
      <div style={{ paddingTop: 44, background: "var(--surface-card)" }}>
        <TopBar title={`Cart (${items.reduce((s, i) => s + i.qty, 0)})`} onBack={onBack} />
      </div>

      <div style={{ padding: "12px 15px", display: "flex", flexDirection: "column", gap: 12 }}>
        {/* Free delivery progress */}
        <div style={{ background: "var(--surface-card)", borderRadius: 12, padding: 12 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: "var(--ink-1)" }}>
              {total >= freeAt ? "Free delivery unlocked" : `⃁ ${(freeAt - total).toFixed(1)} away from free delivery`}
            </span>
            <PromoTag kind="freeDelivery" size="sm" />
          </div>
          <div style={{ height: 6, borderRadius: 3, background: "var(--line-1)", overflow: "hidden" }}>
            <div style={{ width: `${Math.min(100, (total / freeAt) * 100)}%`, height: "100%", borderRadius: 3, background: "var(--speedi-green)", transition: "width var(--motion-base) var(--ease-swift)" }} />
          </div>
        </div>

        {/* Items */}
        <div style={{ background: "var(--surface-card)", borderRadius: 12, padding: "2px 14px" }}>
          {items.map((i, idx) => (
            <CartItemRow key={i.id} {...i} onQtyChange={q => setQty(i.id, q)}
              style={{ borderBottom: idx < items.length - 1 ? "1px solid var(--line-1)" : "none" }} />
          ))}
        </div>

        {/* Campaign upsell */}
        <div style={{ background: "var(--surface-card)", borderRadius: 12, padding: 12, display: "flex", alignItems: "center", gap: 8 }}>
          <PromoTag kind="coupon" />
          <span style={{ fontSize: 12.5, fontWeight: 600, color: "var(--ink-1)", flex: 1 }}>⃁ 5 coupon available for this order</span>
          <span style={{ fontSize: 11, fontWeight: 700, color: "var(--speedi-red)" }}>Apply ›</span>
        </div>

        {/* Suggestions */}
        <SectionHeader title="You Might Also Need" action="" />
        <div style={{ display: "flex", gap: 10, overflowX: "auto", paddingBottom: 90 }}>
          <ProductCard width={150} tag="sample" image="assets/prod-honey.png" title="Almarai Natural Honey, 360g" price="27.99" />
          <ProductCard width={150} image="assets/prod-limes.png" title="Fresh Green Limes" price="6.5" />
          <ProductCard width={150} tag="flash" image="assets/prod-rice.png" title="Abu Kass Basmati Rice, 5kg" price="54.0" oldPrice="62.0" />
        </div>
      </div>

      {/* Sticky checkout */}
      <div style={{
        position: "sticky", bottom: 0, marginTop: "auto", background: "var(--surface-card)",
        borderTop: "1px solid var(--line-1)", padding: "10px 15px 22px",
        display: "flex", alignItems: "center", gap: 14,
      }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <PriceText value={total.toFixed(1)} size={19} />
          <span style={{ fontSize: 10.5, color: "var(--text-muted)" }}>VAT included · You saved ⃁ 15.3</span>
        </div>
        <SpeediButton style={{ marginLeft: "auto", minWidth: 150 }} onClick={() => onNav && onNav("checkout")}>Checkout</SpeediButton>
      </div>
    </div>
  );
}
