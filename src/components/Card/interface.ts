import { ReactNode, MouseEvent, CSSProperties } from "react";

export interface CardProps {
  className?: string;
  style?: CSSProperties;
  title?: ReactNode;
  extra?: ReactNode;
  headerStyle?: CSSProperties;
  width?: number;
  minHeight?: number;
  bodyStyle?: CSSProperties;
  hoverEffect?: boolean;
  bordered?: boolean;
  loading?: boolean;
  cover?: ReactNode;
  coverMode?: 'normal' | 'fill';
  isCoverBlur?: boolean;
  footer?: ReactNode;
}


export interface CardGridProps {
  className?: string;
  style?: CSSProperties;
}

export interface CardMetaProps {
  className?: string;
  style?: CSSProperties;
  avatar?: ReactNode;
  title?: ReactNode
  description?: ReactNode
}