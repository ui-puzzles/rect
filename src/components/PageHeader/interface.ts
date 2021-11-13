import { CSSProperties, MouseEvent, ReactNode } from 'react';

export interface PageHeaderProps {
  className?: string;
  style?: CSSProperties;
  title?: ReactNode;
  description?: ReactNode;
  titleMode?: 'horizontal' | 'vertical'; // set the alignment of title and description
  breadcrumb?: ReactNode;
  backIcon?: ReactNode | boolean;
  extra?: ReactNode;
  footer?: ReactNode;
  onBack?: (e: MouseEvent) => void;
}
