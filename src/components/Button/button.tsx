import React, { FC, isValidElement } from 'react';
import classNames from 'classnames';

import Icon, { IconProp } from '../Icon';
import { warning, isDev, isString } from '../../utils';
import { ButtonProps, ButtonSize } from './interface';

const BTN_CLS_PREFIX = 'puzzle-btn';

const Button: FC<ButtonProps> = (props) => {
  const {
    label,
    btnType = 'default',
    shape = 'round',
    size = 'middle',
    loading = false,
    disabled = false,
    block = false,
    icon,
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
    if (!href && isDev) {
      warning('The Button was rendered a link but don"t provide href property.');
    }

    return (
      <a className={classes} href={href} {...restProps}>
        {label}
      </a>
    );
  }

  const renderIcon = () => {
    if (loading === true) return null;

    if (isValidElement(icon)) return icon;

    if (icon && isString(icon)) return <Icon icon={icon as IconProp} />;
  };

  return (
    <button disabled={disabled} className={classes} {...restProps} data-testid="test-btn">
      {loading && <Icon icon="spinner" spin />}
      {renderIcon()}
      <span className={`${BTN_CLS_PREFIX}-label`}>
        {label || children}
      </span>
    </button>
  );
};

export default Button;
