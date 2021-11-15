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
  loading?: boolean; // reserved filed for future expansion
  cover?: ReactNode;
  coverMode?: 'normal' | 'fill';
  isCoverBlur?: boolean;
  footer?: ReactNode;
  onClick?: (e: MouseEvent) => void;
}


export interface CardGridProps {
  className?: string;
  style?: CSSProperties;
  gutter?: number | [number, number];
  cards?: CardProps[];
}

export interface CardMetaProps {
  className?: string;
  style?: CSSProperties;
  avatar?: ReactNode;
  title?: ReactNode
  description?: ReactNode
}