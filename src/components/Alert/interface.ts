import { ReactNode, MouseEvent, CSSProperties } from "react";
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';

export type AlertType = 'success' | 'info' | 'warning' | 'danger';
export interface AlertProps {
  title: ReactNode;
  content?: ReactNode;
  customIcon?: IconProp;
  iconSize?: SizeProp;
  showIcon?: boolean;
  closable?: boolean;
  hidden?: boolean;
  bordered?: boolean;
  extra?: ReactNode;
  type?: AlertType;
  className?: string;
  style?: CSSProperties;
  onClose?: (e: MouseEvent) => void;
}
