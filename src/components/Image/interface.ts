import React, { CSSProperties, ReactNode } from 'react';

export interface ImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'placeholder'> {
  wrapperClassName?: string;
  wrapperStyle?: CSSProperties;
  prefixCls?: string;
  placeholder?: ReactNode;
  fallback?: string;
  src: string;
}
