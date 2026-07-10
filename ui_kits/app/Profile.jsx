import React from "react";
import { ProfileCompletion } from "../../components/core/ProfileCompletion.jsx";
import { PromoTag } from "../../components/core/PromoTag.jsx";
import { BottomNav } from "../../components/core/BottomNav.jsx";

/* Speedi Account — completion ring + reward tasks, quick tiles,
   campaign strip, settings groups. */

const Card = ({ children, style }) => (
  <div style={{ background: "var(--surface-card)", borderRadius: 12, padding: 14, ...style }}>{children}</div>
);

const Row = ({ label, value, last, danger }) => (
  <div style={{
    display: "flex", alignItems: "center", gap: 12, padding: "13px 0",
    borderBottom: last ? "none" : "1px solid var(--line-1)", cursor: "pointer",
  }}>
    <span style={{ flex: 1, fontSize: 14.5, fontWeight: 500, color: danger ? "var(--speedi-red)" : "var(--text-body)" }}>{label}</span>
    {value && <span style={{ fontSize: 12.5, color: "var(--text-muted)" }}>{value}</span>}
    {!danger && <svg width="7" height="12" viewBox="0 0 7 12"><path d="M1 1l5 5-5 5" stroke="var(--line-2)" strokeWidth="2" fill="none" strokeLinecap="round" /></svg>}
  </div>
);

const Tile = ({ label, value, sub }) => (
  <div style={{
    flex: 1, background: "var(--surface-card)", borderRadius: 12, padding: "12px 8px",
    display: "flex", flexDirection: "column", gap: 2, alignItems: "center", textAlign: "center", cursor: "pointer",
  }}>
    <span style={{ fontSize: 16, fontWeight: 800, color: "var(--ink-black)" }}>{value}</span>
    <span style={{ fontSize: 10.5, fontWeight: 600, color: "var(--ink-2)" }}>{label}</span>
    {sub && <span style={{ fontSize: 9, fontWeight: 700, color: "var(--speedi-red)" }}>{sub}</span>}
  </div>
);

export function Profile({ onNav }) {
  return (
    <div data-screen-label="Profile" style={{
      width: 375, minHeight: 812, background: "var(--surface-page)",
      fontFamily: "var(--font-en)", display: "flex", flexDirection: "column", boxSizing: "border-box",
    }}>
      <div style={{ height: 44 }} />
      <div style={{ padding: "0 15px 16px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
        <h1 style={{ margin: "4px 0 2px", fontSize: 26, lineHeight: "32px", fontWeight: 700, color: "var(--text-title)" }}>Account</h1>

        <Card>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <ProfileCompletion percent={68} size={64} />
            <div style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}>
              <span style={{ fontSize: 17, fontWeight: 700, color: "var(--ink-black)" }}>Sara Al-Otaibi</span>
              <span style={{ fontSize: 13, color: "var(--text-muted)" }}>+966 55 123 4567</span>
            </div>
          </div>
          <div style={{ marginTop: 12, padding: 10, background: "var(--surface-tile)", borderRadius: 10 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: "var(--ink-1)" }}>Complete your profile</span>
              <span style={{ fontSize: 11, fontWeight: 700, color: "var(--speedi-red)" }}>Earn up to ⃁ 25 in coupons</span>
            </div>
            <div style={{ height: 6, borderRadius: 3, background: "var(--line-1)", overflow: "hidden", marginBottom: 8 }}>
              <div style={{ width: "68%", height: "100%", borderRadius: 3, background: "var(--speedi-red)", transition: "width var(--motion-slow) var(--ease-swift)" }} />
            </div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {[
                { label: "Verify phone", done: true },
                { label: "Add email", bonus: "+10%" },
                { label: "Add address", bonus: "+15%" },
                { label: "Set birthday", bonus: "+7%" },
              ].map((t, i) => (
                <span key={i} style={{
                  display: "inline-flex", alignItems: "center", gap: 4, fontSize: 11, fontWeight: 600,
                  color: t.done ? "var(--speedi-green)" : "var(--ink-2)",
                  background: t.done ? "var(--speedi-green-tint)" : "var(--surface-card)",
                  padding: "4px 9px", borderRadius: 100, cursor: "pointer",
                }}>{t.done ? "✓" : "+"} {t.label}{t.bonus ? <span style={{ color: "var(--speedi-red)", fontWeight: 800 }}>{t.bonus}</span> : null}</span>
              ))}
            </div>
          </div>
        </Card>

        <div style={{ display: "flex", gap: 8 }}>
          <Tile label="Orders" value="12" />
          <Tile label="Coupons" value="4" sub="2 expiring" />
          <Tile label="Wallet" value="⃁ 86" />
          <Tile label="Points" value="1,240" />
        </div>

        <Card style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px" }}>
          <PromoTag kind="wheel" solid />
          <span style={{ flex: 1, fontSize: 13, fontWeight: 600, color: "var(--ink-1)" }}>Daily spin — win coupons &amp; free delivery</span>
          <svg width="7" height="12" viewBox="0 0 7 12"><path d="M1 1l5 5-5 5" stroke="var(--ink-3)" strokeWidth="2" fill="none" strokeLinecap="round" /></svg>
        </Card>

        <Card style={{ paddingTop: 2, paddingBottom: 2 }}>
          <Row label="Delivery addresses" value="3 saved" />
          <Row label="Payment methods" />
          <Row label="Gift cards" />
          <Row label="Invite friends" value="Earn ⃁ 15" last />
        </Card>
        <Card style={{ paddingTop: 2, paddingBottom: 2 }}>
          <Row label="Language" value="English" />
          <Row label="Notifications" />
          <Row label="Help center" />
          <Row label="VAT invoices" last />
        </Card>
        <Card style={{ paddingTop: 2, paddingBottom: 2 }}>
          <Row label="Log out" danger last />
        </Card>

        <span style={{ textAlign: "center", fontSize: 11, color: "var(--ink-3)", marginTop: 4 }}>Speedi v2.0 · Made in Saudi Arabia</span>
      </div>

      <div style={{ position: "sticky", bottom: 0 }}>
        <BottomNav active="account" cartCount={3} onNav={onNav} />
      </div>
    </div>
  );
}
