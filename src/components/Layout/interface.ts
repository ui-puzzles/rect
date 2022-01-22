import { CSSProperties } from 'react';

export interface LayoutProps {
  className?: string;
  style?: CSSProperties;
  hasAside?: boolean;
}

export interface HeaderProps {
  className?: string;
  style?: CSSProperties;
}

export interface AsideProps {
  className?: string;
  style?: CSSProperties;
}

export interface MainProps {
  className?: string;
  style?: CSSProperties;
}

export interface FooterProps {
  className?: string;
  style?: CSSProperties;
}

export type LayoutChildProps = LayoutProps | HeaderProps | AsideProps | MainProps | FooterProps;
