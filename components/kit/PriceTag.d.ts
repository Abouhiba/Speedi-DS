import * as React from 'react';
export interface PriceTagProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "SAVE 36%". */
  text1?: string;
}
export declare const PriceTag: React.FC<PriceTagProps>;
export default PriceTag;
