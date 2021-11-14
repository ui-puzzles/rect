import React, { FC } from 'react';
import classnames from 'classnames';

import { CardProps } from './interface';
import { cleanObj } from '../../utils';

const prefixCls = 'pr-card';

const Card: FC<CardProps> = (props) => {
  const {
    className,
    style = {},
    title,
    extra,
    width,
    minHeight,
    headerStyle,
    bodyStyle,
    hoverEffect = true,
    bordered = true,
    // loading = false,
    cover,
    coverMode = 'normal',
    isCoverBlur = false,
    footer,
    children
  } = props;

  const classNames = classnames(
    prefixCls,
    {
      [`${prefixCls}-fill`]: coverMode === 'fill',
      [`${prefixCls}-effect`]: hoverEffect,
    },
    className
  );
  const coverClassNames = classnames(`${prefixCls}-cover`, {
    [`${prefixCls}-cover-blur`]: coverMode === 'fill' && isCoverBlur,
  });

  const combineStyle = cleanObj({
    border: bordered ? undefined :  'none' ,
    'min-height': minHeight,
    width,
    ...style,
  });

  const renderHeader = () => {
    if (!title && !extra) return null;

    return (
      <div className={`${prefixCls}-header`} style={headerStyle}>
        {/* NOTE: to make layout easy, the element will always exist as placeholder */}
        {<div className={`${prefixCls}-header-title`}>{title}</div>}
        {extra && <div className={`${prefixCls}-header-extra`}>{extra}</div>}
      </div>
    )
  };

  return (
    <div className={classNames} style={combineStyle}>
      {renderHeader()}
      {cover && (
        <div className={coverClassNames}>
          {cover}
        </div>
      )}
      <div className={`${prefixCls}-content`} style={bodyStyle}>
        {children}
      </div>
      {footer && (
        <div className={`${prefixCls}-footer`}>
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
