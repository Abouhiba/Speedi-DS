/** Speedi section header: Bold 17 title + red "View all ›" action. */
export interface SectionHeaderProps {
  title?: string;
  /** Action label; null/"" hides it */
  action?: string;
  onAction?: () => void;
  style?: React.CSSProperties;
}
