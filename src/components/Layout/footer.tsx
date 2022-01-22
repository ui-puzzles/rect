import React, { FC } from 'react';
import classnames from 'classnames';

import { FooterProps } from './interface';

export const FOOTER_DISPLAY_NAME = 'Footer';

const prefixCls = 'pr-layout-footer';

const Footer: FC<FooterProps> = (props) => {
  const { className, style, children } = props;

  const classNames = classnames(prefixCls, className);

  return (
    <footer className={classNames} style={style}>
      {children}
    </footer>
  );
};

Footer.displayName = FOOTER_DISPLAY_NAME;

export default Footer;
