import * as React from 'react';
export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Button: React.FC<ButtonProps>;
export default Button;
