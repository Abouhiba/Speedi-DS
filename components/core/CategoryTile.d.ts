/** Speedi category tile — rounded image tile with a compact two-line label ("\n" breaks). */
export interface CategoryTileProps {
  label?: string;
  image?: string;
  /** Tile background (pastel token or default neutral) */
  bg?: string;
  /** Tile edge in px (default 62) */
  size?: number;
  onClick?: () => void;
  style?: React.CSSProperties;
}
