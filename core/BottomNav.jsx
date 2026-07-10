import React from "react";
import { SpeediLogo } from "./SpeediLogo.jsx";

/* Speedi bottom tab bar. The Home tab is the red speedi wordmark .
   Tabs: home, categories, deals, cart, account. */

const G = {
  categories: <g><rect x="2" y="2" width="7.5" height="7.5" rx="2" /><rect x="12.5" y="2" width="7.5" height="7.5" rx="2" /><rect x="2" y="12.5" width="7.5" height="7.5" rx="2" /><rect x="12.5" y="12.5" width="7.5" height="7.5" rx="2" /></g>,
  deals: <g><path d="M3 10.5V4a1 1 0 0 1 1-1h6.5a2 2 0 0 1 1.4.6l7 7a2 2 0 0 1 0 2.8l-5.5 5.5a2 2 0 0 1-2.8 0l-7-7A2 2 0 0 1 3 10.5Z" /><circle cx="8" cy="8" r="1.6" /></g>,
  cart: <g><path d="M3 3h2.4l2 11.2a1.6 1.6 0 0 0 1.6 1.3h7.6a1.6 1.6 0 0 0 1.6-1.2L20 7H6" /><circle cx="9.5" cy="19" r="1.4" /><circle cx="16.5" cy="19" r="1.4" /></g>,
  account: <g><circle cx="11" cy="7" r="3.6" /><path d="M3.8 19c.9-3.4 3.8-5.4 7.2-5.4s6.3 2 7.2 5.4" /></g>,
};

function Glyph({ name, active }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" style={{
      fill: "none", stroke: active ? "var(--speedi-red)" : "var(--ink-3)",
      strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round",
    }}>{G[name]}</svg>
  );
}

export function BottomNav({ active = "home", cartCount = 0, lang = "en", onNav, style }) {
  const ar = lang === "ar";
  const tabs = [
    { key: "home", label: ar ? "الرئيسية" : "Home" },
    { key: "categories", label: ar ? "الفئات" : "Categories" },
    { key: "deals", label: ar ? "العروض" : "Deals" },
    { key: "cart", label: ar ? "السلة" : "Cart" },
    { key: "account", label: ar ? "حسابي" : "Account" },
  ];
  return (
    <div style={{
      display: "flex", alignItems: "stretch", height: 58,
      backgroundColor: "var(--surface-card)", borderTop: "1px solid var(--line-1)",
      boxSizing: "border-box", direction: ar ? "rtl" : "ltr", ...style,
    }}>
      {tabs.map(t => {
        const on = t.key === active;
        return (
          <div key={t.key} onClick={() => onNav && onNav(t.key)} style={{
            flex: 1, display: "flex", flexDirection: "column", alignItems: "center",
            justifyContent: "center", gap: 3, cursor: "pointer", position: "relative", userSelect: "none",
          }}>
            {t.key === "home"
              ? <div style={{ height: 15, width: ar ? 44.3 : 47, overflow: "visible", filter: on ? "none" : "grayscale(1) opacity(0.55)", transition: "filter var(--motion-fast) var(--ease-swift)" }}>
                  <div style={{ transform: "scale(0.4725)", transformOrigin: ar ? "top right" : "top left", width: ar ? 93.64 : 99.416, height: 31.748, direction: "ltr" }}><SpeediLogo lang={lang} /></div>
                </div>
              : <Glyph name={t.key} active={on} />}
            <span style={{
              fontFamily: ar ? "var(--font-ar)" : "var(--font-en)", fontWeight: on ? 700 : 500, fontSize: 10,
              color: on ? "var(--speedi-red)" : "var(--ink-3)",
            }}>{t.label}</span>
            {t.key === "cart" && cartCount > 0 && (
              <span style={{
                position: "absolute", top: 5, left: "50%", marginLeft: 6,
                background: "var(--speedi-red)", color: "#fff", fontFamily: "var(--font-en)",
                fontWeight: 800, fontSize: 9, lineHeight: "14px", minWidth: 14,
                textAlign: "center", borderRadius: 7, padding: "0 3px",
              }}>{cartCount}</span>
            )}
          </div>
        );
      })}
    </div>
  );
}
