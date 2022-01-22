import React, { FC } from 'react';
import classnames from 'classnames';

import { AsideProps } from './interface';

export const ASIDE_DISPLAY_NAME = 'Aside';

const prefixCls = 'pr-layout-aside';

const Aside: FC<AsideProps> = (props) => {
  const { className, style, children } = props;

  const classNames = classnames(prefixCls, className);

  return (
    <aside className={classNames} style={style}>
      {children}
    </aside>
  );
};

Aside.displayName = ASIDE_DISPLAY_NAME;

export default Aside;
