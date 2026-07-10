import * as React from 'react';
export interface TagProps {
  className?: string;
  style?: React.CSSProperties;
  available?: boolean;
  type?: "greeen" | "red";
  /** Text content; defaults to "اشتر 1 والثاني مجاناً". */
  text1?: string;
  /** Text content; defaults to "اشتر ٢ بسعر ". */
  text2?: string;
}
export declare const Tag: React.FC<TagProps>;
export default Tag;
