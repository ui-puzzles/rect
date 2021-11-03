import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';

export type ButtonType = 'default'
  | 'text'
  | 'link'
  | 'primary'
  | 'danger'
  | 'dashed'
  | 'ghost';
export type ButtonSize = 'small' | 'middle' | 'large';
export type ButtonShape = 'round' | 'circle';

interface BasicButtonProps {
  label: string;
  btnType?: ButtonType;
  shape?: ButtonShape;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  block?: boolean;
  icon?: string | ReactNode;
  href?: string;
  className?: string;
}

type NativeButtonProps = BasicButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BasicButtonProps & AnchorHTMLAttributes<HTMLElement>;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;