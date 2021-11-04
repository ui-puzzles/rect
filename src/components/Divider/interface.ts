import { CSSProperties } from "react";

export interface DividerProps {
  className?: string;
  style?: CSSProperties;
  textStyle?: CSSProperties;
  dashed?: boolean;
  align?: 'left' | 'center' | 'right';
  mode?: 'horizontal' | 'vertical';
}
