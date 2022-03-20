import { CSSProperties, ReactNode } from 'react';

type TagSize = 'xs' | 'sm' | 'md' | 'lg';

export interface TagProps {
  className?: string;
  style?: CSSProperties;
  bordered?: boolean;
  size?: TagSize;
  closable?: boolean;
  selectable?: boolean;
  visible?: boolean;
  selected?: boolean;
  defaultSelected?: boolean;
  icon?: ReactNode;
  closeIcon?: ReactNode;
  onClose?: () => Promise<any> | void;
  onSelect?: (checked: boolean) => void;
}
