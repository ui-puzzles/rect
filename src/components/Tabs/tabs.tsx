import React, { FC, FunctionComponentElement, isValidElement, useState } from 'react';
import classnames from 'classnames';

import { TabsProps, TabPaneProps, TabPaneInternalProps } from './interface';
import { TAB_PANE_DISPLAY_NAME } from './tabPane';
import { isFunc } from '@/utils';

const prefixCls = 'pr-tabs';
const TAB_POSITIONS = ['left', 'right', 'top', 'bottom'];
const TAB_TYPES = ['line', 'card', 'text', 'rounded'];
const TAB_SIZES = ['small', 'middle', 'large'];

const Tabs: FC<TabsProps> = (props) => {
  const {
    className,
    style,
    defaultActiveKey = '0',
    tabPosition = 'top',
    type = 'card',
    size = 'middle',
    lazy = true,
    extra,
    // destroyInactiveTabPane,
    onChange,
    onTabClick,
    children,
  } = props;
  const [activeKey, setActiveKey] = useState<string | React.Key>(defaultActiveKey);
  const notDefaultAndValidPos = tabPosition !== 'top' && TAB_POSITIONS.includes(tabPosition);
  const notDefaultAndValidSize = size !== 'middle' && TAB_SIZES.includes(size);
  const isValidType = TAB_TYPES.includes(type);
  let typeClassName = `${prefixCls}-${type}`;

  if (type === 'card' && tabPosition !== 'top') {
    typeClassName = `${prefixCls}-line`;
  }

  const classNames = classnames(
    prefixCls,
    {
      [`${prefixCls}-${tabPosition}`]: notDefaultAndValidPos,
      [`${typeClassName}`]: isValidType,
      [`${prefixCls}-${size}`]: notDefaultAndValidSize,
    },
    className
  );

  const handleClickTab = (key: string | React.Key) => () => {
    setActiveKey(key);

    if (isFunc(onTabClick)) {
      onTabClick(key);
    }

    if (key !== activeKey && isFunc(onChange)) {
      onChange(key);
    }
  };

  const renderTabList = () => {
    return React.Children.map(children, (child, index) => {
      const childElem = child as FunctionComponentElement<TabPaneProps>;

      const { displayName } = childElem.type;
      if (displayName !== TAB_PANE_DISPLAY_NAME) return;

      const itemKey = childElem.key || `${index}`;
      const itemClassNames = classnames(`${prefixCls}-item`, {
        [`${prefixCls}-item-active`]: itemKey === activeKey,
      });

      return (
        <div key={itemKey} className={itemClassNames} onClick={handleClickTab(itemKey)}>
          {childElem.props.label}
        </div>
      );
    });
  };

  const renderExtra = () => {
    if (extra && isValidElement(extra)) {
      return extra;
    }

    return null;
  };

  const renderHeader = () => {
    return (
      <div className={`${prefixCls}-header`}>
        <div className={`${prefixCls}-nav`}>{renderTabList()}</div>
        {renderExtra()}
      </div>
    );
  };

  const renderTabPaneContent = () => {
    const tabPaneChild = React.Children.map(children, (child, index) => {
      const childElem = child as FunctionComponentElement<TabPaneProps & TabPaneInternalProps>;

      const { displayName } = childElem.type;
      const itemKey = childElem.key || `${index}`;
      if (displayName !== TAB_PANE_DISPLAY_NAME) return;

      return React.cloneElement(childElem, {
        activeKey,
        itemKey,
        lazy,
      });
    });

    if (tabPaneChild?.length) {
      return <div className={`${prefixCls}-content`}>{tabPaneChild}</div>;
    }
  };

  const renderChildren = () => {
    let childElem;

    if (tabPosition === 'top' || tabPosition === 'left') {
      childElem = (
        <>
          {renderHeader()}
          {renderTabPaneContent()}
        </>
      );
    } else {
      childElem = (
        <>
          {renderTabPaneContent()}
          {renderHeader()}
        </>
      );
    }
    return childElem;
  };

  return (
    <div className={classNames} style={style}>
      {renderChildren()}
    </div>
  );
};

export default Tabs;
