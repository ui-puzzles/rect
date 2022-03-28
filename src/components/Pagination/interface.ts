import { CSSProperties } from 'react';

export type PaginationSize = 'small' | 'default' | 'large';
export interface PaginationProps {
  className?: string;
  style?: CSSProperties;
  defaultCurrent: number;
  current?: number;
  defaultPageSize: number;
  pageSize?: number;
  total: number;
  hideOnSinglePage?: boolean;
  size?: PaginationSize;
  onChange?: (pageNo: number, pageSize: number) => void;
}

export enum JumpAction {
  Forward = -2,
  Back,
}
