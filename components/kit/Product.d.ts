import * as React from 'react';
export interface ProductProps {
  className?: string;
  style?: React.CSSProperties;
  tag?: boolean;
  typ?: "product1 tag" | "product2" | "typ4" | "product1";
  showPriceTag?: boolean;
  showTag?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const Product: React.FC<ProductProps>;
export default Product;
