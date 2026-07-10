import * as React from 'react';
export interface NavigationBarProps {
  className?: string;
  style?: React.CSSProperties;
  /** Title text; defaults to "Page Title". */
  text1?: string;
  /** Language pill text; defaults to "EN". */
  text2?: string;
}
export declare const NavigationBar: React.FC<NavigationBarProps>;
export default NavigationBar;
