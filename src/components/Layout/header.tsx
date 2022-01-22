import React, { FC } from 'react';
import classnames from 'classnames';

import { HeaderProps } from './interface';

export const HEADER_DISPLAY_NAME = 'Header';

const prefixCls = 'pr-layout-header';

const Header: FC<HeaderProps> = (props) => {
  const { className, style, children } = props;

  const classNames = classnames(prefixCls, className);

  return (
    <header className={classNames} style={style}>
      {children}
    </header>
  );
};

Header.displayName = HEADER_DISPLAY_NAME;

export default Header;
