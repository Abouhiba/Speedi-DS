import React from "react";
import { TopBar } from "../../components/core/TopBar.jsx";
import { PromoTag } from "../../components/core/PromoTag.jsx";
import { SpeediButton } from "../../components/core/SpeediButton.jsx";
import { PriceText } from "../../components/core/PriceText.jsx";

/* Speedi Checkout — migrated from V1 结算: address, delivery time slots,
   payment methods, coupon row, order summary, sticky pay bar. */

const Card = ({ children, style }) => (
  <div style={{ background: "var(--surface-card)", borderRadius: 12, padding: 14, ...style }}>{children}</div>
);
const Label = ({ children }) => (
  <span style={{ fontSize: 13, fontWeight: 700, color: "var(--ink-black)", display: "block", marginBottom: 8 }}>{children}</span>
);

export function Checkout({ onBack, onNav }) {
  const [slot, setSlot] = React.useState(0);
  const [pay, setPay] = React.useState(0);
  const slots = ["Now · 25 min", "Today · 6–8 PM", "Tomorrow · 9–11 AM"];
  const pays = ["Apple Pay", "mada ****4021", "Cash on delivery"];
  return (
    <div data-screen-label="Checkout" style={{
      width: 375, minHeight: 812, background: "var(--surface-page)",
      fontFamily: "var(--font-en)", display: "flex", flexDirection: "column", boxSizing: "border-box",
    }}>
      <div style={{ paddingTop: 44, background: "var(--surface-card)" }}>
        <TopBar title="Checkout" onBack={onBack} />
      </div>

      <div style={{ padding: "12px 15px", display: "flex", flexDirection: "column", gap: 12, paddingBottom: 110 }}>
        {/* Address */}
        <Card>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" style={{ color: "var(--speedi-red)", flexShrink: 0 }}><path fill="currentColor" d="M12 2a7.4 7.4 0 0 0-7.4 7.4c0 5.2 6.3 11.7 6.9 12.3a.8.8 0 0 0 1.1 0c.6-.6 6.9-7.1 6.9-12.3A7.4 7.4 0 0 0 12 2Zm0 10.1a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4Z"/></svg>
            <div style={{ flex: 1, minWidth: 0 }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: "var(--ink-black)", display: "block" }}>House · King Fahd Rd</span>
              <span style={{ fontSize: 12, color: "var(--text-muted)" }}>Sara Al-Otaibi · +966 55 123 4567</span>
            </div>
            <svg width="7" height="12" viewBox="0 0 7 12"><path d="M1 1l5 5-5 5" stroke="var(--line-2)" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
          </div>
        </Card>

        {/* Delivery time */}
        <Card>
          <Label>Delivery time</Label>
          <div style={{ display: "flex", gap: 8 }}>
            {slots.map((s, i) => (
              <div key={s} onClick={() => setSlot(i)} style={{
                flex: 1, padding: "9px 6px", borderRadius: 10, textAlign: "center", cursor: "pointer",
                fontSize: 11.5, fontWeight: 600, lineHeight: "15px",
                color: slot === i ? "var(--speedi-red)" : "var(--ink-2)",
                background: slot === i ? "var(--speedi-red-tint)" : "var(--surface-tile)",
                boxShadow: slot === i ? "inset 0 0 0 1.5px var(--speedi-red)" : "none",
                transition: "all var(--motion-fast) var(--ease-swift)",
              }}>{s}</div>
            ))}
          </div>
        </Card>

        {/* Payment */}
        <Card>
          <Label>Payment</Label>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {pays.map((p, i) => (
              <div key={p} onClick={() => setPay(i)} style={{
                display: "flex", alignItems: "center", gap: 10, padding: "10px 0", cursor: "pointer",
                borderBottom: i < pays.length - 1 ? "1px solid var(--line-1)" : "none",
              }}>
                <span style={{ fontSize: 13.5, fontWeight: 600, color: "var(--ink-1)", flex: 1 }}>{p}</span>
                <div style={{
                  width: 18, height: 18, borderRadius: 9, boxSizing: "border-box",
                  border: pay === i ? "5.5px solid var(--speedi-red)" : "1.5px solid var(--line-2)",
                  transition: "border var(--motion-fast) var(--ease-swift)",
                }} />
              </div>
            ))}
          </div>
        </Card>

        {/* Coupon */}
        <Card style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <PromoTag kind="coupon" label="⃁ 5 OFF" />
          <span style={{ fontSize: 12.5, fontWeight: 600, color: "var(--ink-1)", flex: 1 }}>1 coupon applied</span>
          <span style={{ fontSize: 11, fontWeight: 700, color: "var(--speedi-red)" }}>Change ›</span>
        </Card>

        {/* Summary */}
        <Card>
          <Label>Order summary</Label>
          {[["Subtotal (4 items)", "⃁ 77.5"], ["Delivery", "Free"], ["Coupon", "− ⃁ 5.0"], ["VAT (15%)", "⃁ 10.9"]].map(([k, v]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "4px 0" }}>
              <span style={{ fontSize: 12.5, color: "var(--ink-2)" }}>{k}</span>
              <span style={{ fontSize: 12.5, fontWeight: 600, color: v === "Free" ? "var(--speedi-green)" : "var(--ink-1)" }}>{v}</span>
            </div>
          ))}
          <div style={{ height: 1, background: "var(--line-1)", margin: "8px 0" }} />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: "var(--ink-black)" }}>Total</span>
            <PriceText value="83.4" size={15} />
          </div>
        </Card>
      </div>

      {/* Sticky pay */}
      <div style={{
        position: "sticky", bottom: 0, marginTop: "auto", background: "var(--surface-card)",
        borderTop: "1px solid var(--line-1)", padding: "10px 15px 22px",
      }}>
        <SpeediButton fullWidth onClick={() => onNav && onNav("home")}>Pay ⃁ 83.4</SpeediButton>
      </div>
    </div>
  );
}
