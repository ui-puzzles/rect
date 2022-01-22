import React, { cloneElement, FC, FunctionComponentElement, useState } from 'react';
import classnames from 'classnames';

import { LayoutProps, LayoutChildProps } from './interface';
import { ASIDE_DISPLAY_NAME } from './aside';
import { HEADER_DISPLAY_NAME } from './header';
import { MAIN_DISPLAY_NAME } from './main';
import { FOOTER_DISPLAY_NAME } from './footer';

export const LAYOUT_DISPLAY_NAME = 'Layout';

const prefixCls = 'pr-layout';

const Layout: FC<LayoutProps> = (props) => {
  const { className, style, hasAside = false, children } = props;
  const [isIncludeAside, setIsIncludeAside] = useState(false);

  const classNames = classnames(
    prefixCls,
    {
      [`${prefixCls}-has-aside`]: hasAside === true || isIncludeAside,
    },
    className
  );

  const renderChildren = () =>
    React.Children.map(children, (child) => {
      const childEle = child as FunctionComponentElement<LayoutChildProps>;
      const { displayName } = childEle.type;

      if (!hasAside && !isIncludeAside && displayName === ASIDE_DISPLAY_NAME) {
        setIsIncludeAside(true);
      }

      const validChild = [
        LAYOUT_DISPLAY_NAME,
        ASIDE_DISPLAY_NAME,
        HEADER_DISPLAY_NAME,
        MAIN_DISPLAY_NAME,
        FOOTER_DISPLAY_NAME,
      ];
      if (validChild.includes(displayName as string)) {
        return cloneElement(childEle);
      }
    });

  return (
    <div className={classNames} style={style}>
      {renderChildren()}
    </div>
  );
};

Layout.displayName = LAYOUT_DISPLAY_NAME;

export default Layout;
