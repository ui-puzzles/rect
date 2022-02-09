import React, { CSSProperties, ReactNode } from 'react';

export interface TabsProps {
  className?: string;
  style?: CSSProperties;
  defaultActiveKey?: string;
  tabPosition?: 'left' | 'right' | 'top' | 'bottom';
  type?: 'line' | 'card';
  size?: 'small' | 'middle' | 'large';
  extra?: ReactNode;
  lazy?: boolean;
  onChange?: (key: string | React.Key) => void;
  onTabClick?: (key: string | React.Key) => void;
}

export interface TabPaneProps {
  className?: string;
  style?: CSSProperties;
  label: string | ReactNode;
  disabled?: boolean;
}

export interface TabPaneInternalProps {
  activeKey?: string | React.Key;
  itemKey?: string | React.Key;
  lazy?: boolean;
}
