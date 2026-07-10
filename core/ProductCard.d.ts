/**
 * Speedi unified item card — the single product component for all surfaces
 * (home grids, category page, search results, recommendations, related items, brand pages).
 * White card, 12px radius, 10px padding, image on a neutral tile, campaign tag top-left,
 * title always reserves exactly two lines (fixed 36px) so card grids align,
 * red ExtraBold price with ⃁ prefix and gray strikethrough original, red circular add button.
 */
export interface ProductCardProps {
  /** "grid" (default, 172pt vertical) or "row" (full-width horizontal — search/related lists) */
  variant?: "grid" | "row";
  title?: string;
  /** Numeric string without currency, e.g. "29.8" */
  price?: string;
  /** Original price, struck through */
  oldPrice?: string;
  /** Product image URL (contain-fit on the tile). Omit for a neutral placeholder */
  image?: string;
  /** Campaign tag family (see PromoTag) — omit for none */
  tag?: "percent" | "flash" | "bogo" | "bundle" | "coupon" | "cashback" | "sample" | "gift" | "wheel" | "points" | "freeDelivery" | "fresh";
  /** Custom tag text */
  tagLabel?: string;
  /** Quantity already in cart — shows count inside the add button */
  qty?: number;
  /** Override card width (grid default 172) */
  width?: number | string;
  style?: React.CSSProperties;
}
