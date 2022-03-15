import React, { CSSProperties, ReactNode, SyntheticEvent } from 'react';

export interface ImageProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'placeholder' | 'onClick'> {
  wrapperClassName?: string;
  wrapperStyle?: CSSProperties;
  prefixCls?: string;
  placeholder?: ReactNode;
  fallback?: string | boolean;
  preview?: boolean;
  onError?: (e: SyntheticEvent) => void;
}
