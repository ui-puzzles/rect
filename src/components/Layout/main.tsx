import React, { FC } from 'react';
import classnames from 'classnames';

import { MainProps } from './interface';

export const MAIN_DISPLAY_NAME = 'Main';

const prefixCls = 'pr-layout-main';

const Main: FC<MainProps> = (props) => {
  const { className, style, children } = props;

  const classNames = classnames(prefixCls, className);

  return (
    <main className={classNames} style={style}>
      {children}
    </main>
  );
};

Main.displayName = MAIN_DISPLAY_NAME;

export default Main;
