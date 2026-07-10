import * as React from 'react';
export interface AddProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "bold" | "broken" | "bulk" | "linear" | "outline" | "twotone";
}
export declare const Add: React.FC<AddProps>;
export default Add;
