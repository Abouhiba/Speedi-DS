/**
 * Speedi profile completion — avatar ring showing profile completeness,
 * with a red percentage pill and optional task chips ("Add email +5%").
 * Lives in the Account page header.
 */
export interface ProfileCompletionProps {
  /** 0–100 */
  percent?: number;
  /** Ring diameter in px (default 64) */
  size?: number;
  /** Ring stroke width (default 5) */
  stroke?: number;
  /** Avatar content (e.g. <img/>); default person glyph */
  children?: React.ReactNode;
  /** Task chips: [{ label: "Add email", bonus: "+5%", done: false }] */
  tasks?: { label: string; bonus?: string; done?: boolean }[];
  style?: React.CSSProperties;
}
