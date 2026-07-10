import * as React from 'react';
export interface LocationProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "bold" | "broken" | "bulk" | "linear" | "outline" | "twotone";
}
export declare const Location: React.FC<LocationProps>;
export default Location;
