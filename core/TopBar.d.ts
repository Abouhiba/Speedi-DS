/** Speedi top navigation bar: bordered back chip, centered Bold title, optional right slot. */
export interface TopBarProps {
  title?: string;
  onBack?: () => void;
  /** Right-side element (e.g. an EN pill or icon) */
  right?: React.ReactNode;
  style?: React.CSSProperties;
}
