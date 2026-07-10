/** Speedi quantity stepper — outlined minus, red plus, Bold count between. */
export interface QuantityStepperProps {
  qty?: number;
  onChange?: (next: number) => void;
  /** Button diameter (default 30) */
  size?: number;
  style?: React.CSSProperties;
}
