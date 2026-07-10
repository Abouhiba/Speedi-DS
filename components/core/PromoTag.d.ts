/**
 * Speedi campaign tag. One primitive for all 30+ campaign types,
 * color-coded by campaign family (red=price, violet=multi-buy, blue=coupon/cashback,
 * pink=gifts/samples, gold=games/points, green=delivery/fresh).
 */
export interface PromoTagProps {
  /** Campaign family */
  kind?: "percent" | "flash" | "bogo" | "bundle" | "coupon" | "cashback" | "sample" | "gift" | "wheel" | "points" | "freeDelivery" | "fresh";
  /** Tag text — defaults to the family's default label (e.g. "Buy 1 Get 1") */
  label?: string;
  /** Solid fill (for placement on images); default is tinted */
  solid?: boolean;
  /** "md" (default) or "sm" */
  size?: "md" | "sm";
  style?: React.CSSProperties;
}
