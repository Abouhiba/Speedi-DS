import * as React from 'react';
export interface Group32Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Delivery Address". */
  text1?: string;
  /** Text content; defaults to "+". */
  text2?: string;
  /** Text content; defaults to "59.90". */
  text3?: string;
  /** Text content; defaults to "Four Season Hotel". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Group32: React.FC<Group32Props>;
export default Group32;
