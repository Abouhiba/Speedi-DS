/**
 * Speedi price text — the brand price convention: Western digits in both languages,
 * riyal symbol ⃁ (U+20C1) and decimals at ~62% of the integer size (e.g. ⃁ 3.⁹⁹).
 */
export interface PriceTextProps {
  /** Numeric string, e.g. "3.99" */
  value?: string;
  /** Integer-part font size in px (default 17); decimals render at 62% */
  size?: number;
  color?: string;
  weight?: number;
  /** Currency prefix; "" hides it */
  currency?: string;
  style?: React.CSSProperties;
}
