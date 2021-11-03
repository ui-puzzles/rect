import { CSSProperties } from "react";

export interface DividerProps {
  className?: string | string[];
  style?: CSSProperties;
  dashed?: boolean;
  align?: 'left' | 'center' | 'right';
  mode?: 'horizontal' | 'vertical';
}
