import * as React from 'react';
export interface PrimaryProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Primary主按钮". */
  text1?: string;
}
export declare const Primary: React.FC<PrimaryProps>;
export default Primary;
