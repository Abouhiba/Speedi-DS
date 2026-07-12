# Speedi Design System

Speedi is a bilingual (Arabic / English) quick-commerce app for the Saudi market: groceries, convenience, pharmacy, and future service expansion. Brand promise — delivery is table stakes; **saving is the differentiator**. Promotions are the product's centerpiece: 30+ campaign types (BOGO, virtual bundles, free samples, coupons, spin-the-wheel, cashback…).

**Slogans:** AR **«الكل يوصّلك، بس حنا نوفّر عليك»** · EN **"You save. We Deliver."**

## Foundations at a glance
- **Color**: Speedi Red `#DD2A1F` (pressed `#B91F16`, tint `#FDEEEC`) — reserved for price, primary actions and price-cut campaigns. Green `#1EA13C` = success/fresh/free delivery. Ink `#262626`/`#595959`/`#8C8C8C`, titles `#141414`. Warm-neutral page `#F6F6F4`, hairlines `#EBEBE8`. Campaign accents: gold `#F5A800` (games/points), violet `#6C3BD4` (BOGO/bundles), blue `#2D6BFF` (coupons/cashback), pink `#E5387E` (samples/gifts). Pastel identity palette for category tiles and merch.
- **Type**: Hanken Grotesk (EN) / Alexandria (AR), both 300–800. EN scale: display 32/38 ExtraBold · H1 26/32 Bold · nav 17/22 Bold · body 15/22 · button 15/20 Bold · label 13/18 SemiBold · caption 11/15 · price 17 ExtraBold. **Arabic downscale**: Alexandria runs visually larger/heavier, so Arabic text is ~80–85% of the EN size + one weight step lighter (nav 14/20 SemiBold, H1 21/28 SemiBold, display 26/34 Bold, body 13/20, button 13 SemiBold); `lang="ar"`/`dir="rtl"` adjusts the `--text-*` tokens automatically. Prices exempt (Western digits in EN font at EN sizes).
- **Price convention**: the official riyal symbol ⃁ (U+20C1) before the amount — never "SR"/"SAR" text; Western digits in both languages (3.99, never ٣٫٩٩); symbol and decimals at ~62% of the integer size (`PriceText`); original price struck through in gray.
- **Shape & elevation**: flat — white cards, 12px radius, no shadows; 8px controls; 100px pills; hairline dividers; 48px buttons/nav; 15pt page gutters.
- **Motion**: 120/200/320ms, `cubic-bezier(0.2,0,0,1)`; press scale 0.97; 12px rise entrances; overshoot easing reserved for campaign celebrations only.
- **Imagery**: product cutouts on `#F4F4F2` tiles; warm saturated campaign photography; banners are backend-managed slots (design the frame, not the artwork).

## Content fundamentals
- **Bilingual by design**: Arabic leads in Saudi media; English mirrors ideas, never words. UI ships fully localized RTL.
- **Casing**: Title Case for sections and product names; sentence case for body.
- **Tone**: short, confident, money-first, imperative second person. Urgency comes from red + price, never exclamation marks. No emoji in product UI.

## Iconography
Iconsax-style line icons (linear default; outline/bold/bulk/broken/twotone variants) — `assets/icons/` ships `icon-data.js` + the `Icon` wrapper; names in `Icon.d.ts`. The `SpeediLogo` component is the exact vector wordmark — never redraw it. No emoji, no unicode-as-icon.

## Components (components/core)
- `ProductCard` — **the one product card for every surface** (home, category, search, recommendations, related items, brand pages); `variant="grid" | "row"`, campaign tag, qty-in-cart add button
- `PromoTag` — campaign tag primitive, 12 families, tinted/solid
- `PriceText` — the price convention (riyal symbol ⃁, Western digits, small symbol + decimals)
- `SpeediButton` — primary / secondary / ghost, sm/md/lg
- `TopBar` · `SearchBar` · `BottomNav` (SpeediLogo home tab, cart badge, `lang="ar"` for RTL + Arabic wordmark)) · `SectionHeader` · `CategoryTile` · `BannerSlot` · `QuantityStepper` · `CartItemRow` · `ProfileCompletion` (ring + reward task chips) · `SpeediLogo`
- `Icon` — Iconsax glyphs (assets/icons)

## App screens (ui_kits/app)
`Home` · `ProductDetail` · `Cart` · `Checkout` · `Profile` — a navigable app in `ui_kits/app/index.html` (working bottom nav, back, cart→checkout flow). Product/category imagery in `ui_kits/app/assets/`.

## Index
- `styles.css` — global entry · `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `motion.css`, `fonts.css`
- `components/core/` — all reusable components (with `.d.ts` contracts and `.prompt.md` usage notes) · `components/kit/` — verbatim Figma-file recreations (reference)
- `ui_kits/app/` — the app screens + interactive shell
- `guidelines/` — specimen cards, motion demo, **`brand-book-en.html`**, **`brand-book-ar.html`** (printable A4, localized not translated)
- `assets/` — icons, merch imagery · `uploads/` — identity PDF + extracted merch examples · `SKILL.md` — agent skill entry

## Tagline options (EN)
1. **"You save. We Deliver." — the official English slogan.** Leads with the saving, lands on the delivery promise.
2. "Fast is standard. Saving is Speedi."
3. "Delivered fast. Priced smart."
4. "More than delivered. Saved."
5. "Speed you trust. Prices you love."
6. "Save big. Live Speedi."
7. "Where fast meets less."
8. "Your order in minutes. Your savings for good."

## Figma kit (components/kit)
All 94 component families from the source Figma file, materialized verbatim with exact geometry (the file's original 2019 styling — names mirror its layer names for traceability; new work should prefer `components/core`):

**Controls & text**: `Primary` (primary button) · `Secondary` (secondary button) · `Disabled` (disabled button) · `Button` · `NavigationBar` · `Component` (status bar) · `Component2` (input) · `Component3_` (input, empty) · `Component4` (input, filled) · `Component10` (checkbox) · `Choose1` (option selector) · `Component5` (switch on) · `Component6` (switch off) · `Component1` (settings row) · `Component8` (image placeholder) · `TextH1PageTitle26` · `TextBodyMain16` · `TextButtonText16` · `TextCaptionTag12`

**Icons & commerce**: `Add` · `Minus` · `Location` · `ArrowSquareDown` · `MessageAdd` · `MessageAdd2` · `Product` · `Component12` (two-column product card) · `Component3` (quantity stepper) · `Price` · `PriceTag` · `Tag` · `TitleProducts` · `Image` · `LLQoCRTif` (sample bitmap) · `Search` · `Search750` · `Rectangle91`

**Screen blocks (@2x)**: `Component13` (recommended products) · `Component14` · `Component14_` (cart row) · `Component15` (delivery time) · `Component16` (delivery details) · `Component17` · `Component18` · `Component18_` (promo display) · `Component20` · `Component20_` (single-column product) · `Component21` (search list) · `Component21750` · `Component23` (settings) · `Component24` (bottom nav) · `Component26` · `Component27` · `Component40` · `Component44` · `Component48` · `Component58` · `Component62` · `Component70` · `Component71` · `Component71750` · `Component75` · `Component80` · `Component90` · `Component93` · `Component96` · `Component97` · `Component98` · `Component99` · `Component105` · `Component106` · `Component107` · `Component108` · `Component109` · `Component110` · `Component114` · `Top` (PDP header) · `Frame39` · `Frame83` · `Frame86` · `Frame109` · `Group25` · `Group32` · `Group46` · `Group70` · `Group72` · `Group76` · `Group92` · `Group118`


## Caveats
- GE SS Two (legacy Arabic print face) is proprietary and not shipped; legacy print collateral only.
- The riyal symbol ⃁ requires Unicode-17 font support; production apps should ship the SAMA symbol font as fallback.
- The Speedi logo is bilingual: `SpeediLogo lang="en"` ships the exact vector JSX; `lang="ar"` ships the brand-supplied Arabic wordmark (سبيدي, raster with white knocked out — source `assets/logo/`). Arabic surfaces use the Arabic mark, English surfaces the English mark; no logo was redrawn.
