# Speedi App UI Kit

The five core app screens, built on the design tokens and the `components/core` primitives (unified `ProductCard`, `PromoTag` campaign system, `PriceText`, `SpeediButton`, `TopBar`, `SearchBar`, `BottomNav`, `CategoryTile`, `SectionHeader`, `BannerSlot`, `QuantityStepper`, `CartItemRow`, `ProfileCompletion`).

- `Home` — location header, hero banner slot (backend-managed), pastel category grid, campaign strip, Big Savings grid + Fresh Picks rows
- `ProductDetail` — gallery with solid tag, price hero with applied coupon, campaign block (bundle + free delivery), related items, sticky add-to-cart with stepper
- `Cart` — free-delivery progress, editable line items, coupon upsell, suggestions rail, sticky checkout
- `Checkout` — address, delivery slots, payment radios, coupon row, order summary, sticky pay
- `Profile` — completion ring + reward tasks, quick tiles, daily-spin strip, settings groups

`index.html` is a navigable shell (screen tabs + working bottom nav / back / checkout flows). Product & category imagery lives in `assets/`; hero/promo banners remain drag-and-drop backend slots by design.
