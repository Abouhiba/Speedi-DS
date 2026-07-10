import * as React from 'react';
export interface PriceProps {
  className?: string;
  style?: React.CSSProperties;
  price?: boolean;
  wasPrices?: boolean;
  /** Text content; defaults to "29.95". */
  text1?: string;
  /** Text content; defaults to "29.95". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Price: React.FC<PriceProps>;
export default Price;
