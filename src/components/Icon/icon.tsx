import React from 'react';
import classnames from 'classnames';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

const prefixCls = 'pr-icon';

// add all the icons
library.add(fas);

export type ThemeProps = 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';
export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps;
}

const Icon: React.FC<IconProps> = (props) => {
  const { className, theme, ...restProps } = props;
  const classes = classnames(`${prefixCls}`, className, {
    [`${prefixCls}-${theme}`]: theme
  });

  return (
    <FontAwesomeIcon className={classes} {...restProps} />
  );
};

export default Icon;


