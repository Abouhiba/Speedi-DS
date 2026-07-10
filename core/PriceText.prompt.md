Brand price convention in one component: Western digits (also in Arabic UI), small riyal symbol ⃁ (U+20C1), decimals at 62% of the integer size.

```jsx
<PriceText value="3.99" size={17} />
<PriceText value="29.8" size={24} />           // PDP hero
<PriceText value="6.5" size={15} currency="" /> // no prefix
```
