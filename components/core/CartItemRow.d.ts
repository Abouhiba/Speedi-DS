/** Speedi cart line item: 64px image tile, 2-line title, unit, optional campaign tag, red price + stepper. */
export interface CartItemRowProps {
  title?: string;
  unit?: string;
  price?: string;
  oldPrice?: string;
  image?: string;
  tag?: "percent" | "flash" | "bogo" | "bundle" | "coupon" | "cashback" | "sample" | "gift" | "wheel" | "points" | "freeDelivery" | "fresh";
  tagLabel?: string;
  qty?: number;
  onQtyChange?: (next: number) => void;
  style?: React.CSSProperties;
}
