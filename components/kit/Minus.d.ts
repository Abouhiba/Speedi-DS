import * as React from 'react';
export interface MinusProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "bold" | "broken" | "bulk" | "linear" | "outline" | "twotone";
}
export declare const Minus: React.FC<MinusProps>;
export default Minus;
