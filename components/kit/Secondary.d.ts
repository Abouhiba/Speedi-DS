import * as React from 'react';
export interface SecondaryProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Secondary次按钮". */
  text1?: string;
}
export declare const Secondary: React.FC<SecondaryProps>;
export default Secondary;
