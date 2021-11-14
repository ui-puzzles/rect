import { ReactNode, MouseEvent, CSSProperties } from "react";

export interface AvatarProps {
  className?: string;
  style?: CSSProperties;
  shape?: 'circle' | 'square';
  size?: number;
  autoFitFontSize?: boolean;
  extra?: ReactNode;
  extraStyle?: CSSProperties;
  extraType?: 'widget' | 'mask';
  onClick?: (e: MouseEvent) => void;
}
