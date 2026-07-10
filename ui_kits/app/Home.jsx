import React from "react";
import { SearchBar } from "../../components/core/SearchBar.jsx";
import { BannerSlot } from "../../components/core/BannerSlot.jsx";
import { CategoryTile } from "../../components/core/CategoryTile.jsx";
import { SectionHeader } from "../../components/core/SectionHeader.jsx";
import { ProductCard } from "../../components/core/ProductCard.jsx";
import { PromoTag } from "../../components/core/PromoTag.jsx";
import { BottomNav } from "../../components/core/BottomNav.jsx";

/* Speedi Home — migrated from the V1 Home首页 structure:
   location header + search, hero banner slot, category grid, campaign strip,
   product sections built on the unified ProductCard. */

const CATS = [
  ["Vegetables\nSoy Foods", "assets/cat-vegetables.png", "var(--pastel-mint)"],
  ["Meat, Poultry\nEggs", "assets/cat-meat.png", "var(--pastel-peach)"],
  ["Aquatic\nFood", "assets/cat-fish.png", "var(--pastel-sky)"],
  ["Fruit\nFlower", "assets/cat-fruit.png", "var(--pastel-pink)"],
  ["Beauty\nCare", "assets/cat-beauty.png", "var(--pastel-bone)"],
  ["Dairy\nBrews", "assets/cat-dairy.png", "var(--pastel-butter)"],
  ["Leisure\nSnacks", "assets/cat-snacks.png", "var(--pastel-gold)"],
  ["Pantry\nStaples", "assets/cat-pantry.png", "var(--pastel-ivory)"],
  ["Alcohol-free\nBeverages", "assets/cat-beverages.png", "var(--pastel-clay)"],
  ["Merch\nAppliances", "assets/cat-appliances.png", "var(--pastel-periwinkle)"],
];

export function Home({ onNav, onOpenProduct }) {
  return (
    <div data-screen-label="Home" style={{
      width: 375, minHeight: 812, background: "var(--surface-page)",
      fontFamily: "var(--font-en)", display: "flex", flexDirection: "column", boxSizing: "border-box",
    }}>
      {/* Header */}
      <div style={{ background: "var(--surface-card)", padding: "50px 15px 12px", display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" style={{ color: "var(--speedi-red)" }}><path fill="currentColor" d="M12 2a7.4 7.4 0 0 0-7.4 7.4c0 5.2 6.3 11.7 6.9 12.3a.8.8 0 0 0 1.1 0c.6-.6 6.9-7.1 6.9-12.3A7.4 7.4 0 0 0 12 2Zm0 10.1a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4Z"/></svg>
          <span style={{ fontWeight: 700, fontSize: 14, color: "var(--ink-black)" }}>House</span>
          <svg width="9" height="6" viewBox="0 0 9 6"><path d="M1 1l3.5 3.5L8 1" stroke="var(--ink-2)" strokeWidth="1.6" fill="none" strokeLinecap="round"/></svg>
          <span style={{ marginLeft: "auto", fontSize: 11, fontWeight: 600, color: "var(--speedi-green)" }}>Delivery in 25 min</span>
        </div>
        <SearchBar />
      </div>

      <div style={{ padding: "12px 15px 0", display: "flex", flexDirection: "column", gap: 14 }}>
        {/* Hero banner — backend slot */}
        <BannerSlot image="assets/hero-fresh-arrivals.png" ratio="343 / 150" />

        {/* Categories */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "10px 4px", justifyItems: "center" }}>
          {CATS.map(([label, img, bg]) => <CategoryTile key={label} label={label} image={img} bg={bg} />)}
        </div>

        {/* Campaign strip */}
        <div style={{ background: "var(--surface-card)", borderRadius: 12, padding: "10px 12px", display: "flex", alignItems: "center", gap: 8, overflow: "hidden" }}>
          <PromoTag kind="wheel" solid />
          <span style={{ fontSize: 12.5, fontWeight: 600, color: "var(--ink-1)", flex: 1 }}>Daily spin — coupons &amp; free delivery to win</span>
          <span style={{ fontSize: 11, fontWeight: 700, color: "var(--speedi-red)", whiteSpace: "nowrap" }}>Play ›</span>
        </div>

        {/* Big Savings */}
        <SectionHeader title="Big Savings" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <ProductCard width="100%" tag="percent" tagLabel="25% OFF" image="assets/prod-milk.png" title="Almarai Skimmed Milk, 1L × 4" price="29.8" oldPrice="39.5" style={{ cursor: "pointer" }} />
          <ProductCard width="100%" tag="bogo" image="assets/prod-cheese.png" title="Almarai Cream Cheese Analogue, 500g" price="18.9" oldPrice="24.5" />
          <ProductCard width="100%" tag="bundle" image="assets/prod-butter.png" title="Almarai Salted Natural Butter, 200g" price="16.99" />
          <ProductCard width="100%" tag="sample" image="assets/prod-honey.png" title="Almarai Natural Honey, 360g" price="27.99" qty={1} />
        </div>

        {/* Fresh picks */}
        <SectionHeader title="Fresh Picks" />
        <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingBottom: 16 }}>
          <ProductCard variant="row" tag="fresh" image="assets/prod-lychee.png" title="Premium Hainan Feizixiao Lychee" price="9.9" oldPrice="12.8" />
          <ProductCard variant="row" tag="freeDelivery" image="assets/prod-limes.png" title="Fresh Green Limes" price="6.5" />
          <ProductCard variant="row" image="assets/prod-berries.png" title="Mixed Berries Tray" price="21.0" qty={2} />
        </div>
      </div>

      <div style={{ marginTop: "auto", position: "sticky", bottom: 0 }}>
        <BottomNav active="home" cartCount={3} onNav={onNav} />
      </div>
    </div>
  );
}
