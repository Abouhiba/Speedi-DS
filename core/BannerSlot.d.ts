/** Backend-managed banner slot — design the frame, not the artwork. Shows a dashed labeled frame when empty. */
export interface BannerSlotProps {
  /** Banner artwork URL; omit for the empty ops-managed frame */
  image?: string;
  label?: string;
  /** CSS aspect-ratio (default "848 / 366" — the identity merch spec) */
  ratio?: string;
  radius?: number;
  style?: React.CSSProperties;
}
