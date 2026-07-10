import * as React from 'react';
export interface Component1Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Message Settings". */
  text1?: string;
  /** Text content; defaults to "Message Settings". */
  text2?: string;
}
export declare const Component1: React.FC<Component1Props>;
export default Component1;
