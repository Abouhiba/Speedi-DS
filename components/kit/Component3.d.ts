import * as React from 'react';
export interface Component3Props {
  className?: string;
  style?: React.CSSProperties;
  stats?: "no item" | "add one" | "add next" | "add theres";
  /** Text content; defaults to "1". */
  text1?: string;
}
export declare const Component3: React.FC<Component3Props>;
export default Component3;
