import * as React from 'react';
export interface DisabledProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Disabled不可点击按钮". */
  text1?: string;
}
export declare const Disabled: React.FC<DisabledProps>;
export default Disabled;
