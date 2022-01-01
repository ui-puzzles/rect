import { ReactNode, MouseEvent, CSSProperties } from "react";

export interface ListProps<T> {
  className?: string;
  style?: CSSProperties;
  bordered?: boolean;
  split?: boolean;
  loading?: boolean;
  hoverEffect?: boolean;
  size?: 'small' | 'middle' | 'large';
  dataSource?: T[];
  renderItem: (item: T, index: number) => ReactNode;
  title?: ReactNode;
  extra?: ReactNode;
  listBottom?: ReactNode;
  footer?: ReactNode;
  empty?: ReactNode;
  endReachedThreshold?: number;
  onListScroll?: (elem: Element) => void;
  onLoadMore?: (page: number) => void;
}

export interface ListItemProps<T = any> {
  className?: string;
  style?: CSSProperties;
  extra?: ReactNode;
  data: Record<keyof T, unknown>;
}

export interface ListItemMetaProps {
  className?: string;
  style?: CSSProperties;
  title?: ReactNode;
  description?: ReactNode;
  avatar?: ReactNode;
}

export interface ListGroupProps<T> {
  className?: string;
  style?: CSSProperties;
  groups: ListGroupItemProps<T>[]
}

export interface ListGroupItemProps<T> {
  className?: string;
  style?: CSSProperties;
  title: ReactNode;
  extra?: ReactNode;
  items: ListProps<T>;
}
