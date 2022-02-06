import React, { CSSProperties, ReactNode } from 'react';

export interface TabsProps {
  className?: string;
  style?: CSSProperties;
  activeKey?: string;
  defaultActiveKey?: string;
  animation?: boolean | CSSProperties;
  tabPosition?: 'left' | 'right' | 'top' | 'bottom';
  type?: 'line' | 'card' | 'text' | 'rounded';
  size?: 'small' | 'middle' | 'large';
  extra?: ReactNode;
  // destroyInactiveTabPane?: boolean;
  lazy?: boolean;
  onChange?: (key: string | React.Key) => void;
  onTabClick?: (key: string | React.Key) => void;
}

export interface TabPaneProps {
  className?: string;
  style?: CSSProperties;
  label: string | ReactNode;
  // destroyInactiveTabPane?: boolean;
  disabled?: boolean;
}

export interface TabPaneInternalProps {
  activeKey?: string | React.Key;
  itemKey?: string | React.Key;
}
