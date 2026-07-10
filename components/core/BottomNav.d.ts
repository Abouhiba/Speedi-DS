/** Speedi bottom tab bar. Home tab renders the SpeediLogo wordmark; lang="ar" flips to RTL with the Arabic wordmark + Arabic labels. */
export interface BottomNavProps {
  active?: "home" | "categories" | "deals" | "cart" | "account";
  /** "en" (default) or "ar" — swaps wordmark, labels and direction */
  lang?: "en" | "ar";
  /** Red badge on the cart tab */
  cartCount?: number;
  onNav?: (key: string) => void;
  style?: React.CSSProperties;
}
