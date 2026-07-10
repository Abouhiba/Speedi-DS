/** Speedi search field — rounded, tile-gray background, magnifier glyph, barcode-scan trailing icon. */
export interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: any) => void;
  /** Tap handler for the trailing barcode-scan icon */
  onScan?: () => void;
  style?: React.CSSProperties;
}
