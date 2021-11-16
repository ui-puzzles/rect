import React, { FC, MouseEvent } from 'react';
import classnames from 'classnames';

import { CardProps } from './interface';
import { wipeUndefValueOfObj, isFunc } from '../../utils';

const prefixCls = 'pr-card';

export const CARD_DISPLAY_NAME = 'Card';

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
    onClick,
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

  const combineStyle = wipeUndefValueOfObj({
    border: bordered ? undefined :  'none' ,
    minHeight,
    width,
    ...style,
  });

  const handleClick = (e: MouseEvent) => {
    if(onClick && isFunc(onClick)) {
      onClick(e)
    }
  };

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
    <div className={classNames} style={combineStyle} onClick={handleClick}>
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

Card.displayName = CARD_DISPLAY_NAME;

export default Card;
