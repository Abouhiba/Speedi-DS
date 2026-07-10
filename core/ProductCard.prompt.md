The single V2 product card for every listing surface — never build per-page product cards; use `variant` instead.

```jsx
<ProductCard tag="bogo" title="Almarai Cream Cheese, 500g" price="18.9" oldPrice="24.5" />
<ProductCard variant="row" tag="percent" tagLabel="35% OFF" price="12.5" qty={2} />
```

Grid = 172pt vertical card (home, category, brand pages). Row = horizontal (search, related items, cart suggestions). `tag` renders a solid PromoTag on the image; `qty` puts the cart count inside the add button. No size/unit line — pack size belongs in the title (e.g. "…, 1L × 4"); the title always reserves two lines so grids stay aligned.
