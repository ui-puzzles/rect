import { FC, ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

const BTN_CLS_PREFIX = 'puzzle-btn';

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
  btnType?: ButtonType;
  shape?: ButtonShape;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  block?: boolean;
  icon?: ReactNode;
  href?: string;
  className?: string;
}

type NativeButtonProps = BasicButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BasicButtonProps & AnchorHTMLAttributes<HTMLElement>;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: FC<ButtonProps> = (props) => {
  const {
    btnType,
    shape,
    size,
    // loading,
    disabled,
    block,
    // icon,
    href,
    className,
    children,
    ...restProps
  } = props;
  const sizeSuffix = ((size: ButtonSize) => {
    const sizeMap = {
      large: 'lg',
      middle: 'mid',
      small: 'sm',
    };

    return sizeMap[size];
  })(size as ButtonSize);

  const classes = classNames(
    `${BTN_CLS_PREFIX}`,
    { [`${BTN_CLS_PREFIX}-${btnType}`]: btnType !== 'default' },
    { [`${BTN_CLS_PREFIX}-${shape}`]: shape !== 'round' },
    { [`${BTN_CLS_PREFIX}-${sizeSuffix}`]: size !== 'middle' },
    { [`${BTN_CLS_PREFIX}-disabled`]: btnType === 'link' && disabled },
    { [`${BTN_CLS_PREFIX}-block`]: block },
    className
  );
  /**
  * NOTE: If the button btnType equals link and don't provide href. it should give a hint.
  */
  if (btnType === 'link') {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  }

  return (
    <button disabled={disabled} className={classes} {...restProps}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  btnType: 'default',
  shape: 'round',
  size: 'middle',
  loading: false,
  disabled: false,
  block: false
};

export default Button;
