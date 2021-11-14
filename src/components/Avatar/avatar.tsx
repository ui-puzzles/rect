import React, { FC, MouseEvent, isValidElement, useEffect, useRef } from 'react';
import classnames from 'classnames';

import { AvatarProps } from './interface';
import { isFunc, autoFixFontSize, warning } from '../../utils';

const prefixCls = 'pr-avatar';

const Avatar: FC<AvatarProps> = (props) => {
  const {
    className,
    style = {},
    shape = 'circle',
    size,
    autoFitFontSize = true,
    extra,
    extraStyle,
    extraType = 'widget',
    onClick,
    children,
  } = props;
  const textRef = useRef(null);
  const avatarRef = useRef(null);

  useEffect(() => {
    if (autoFitFontSize) {
      autoFixFontSize(
        textRef.current,
        avatarRef.current,
        size,
      );
    }
  }, [size, children])

  const classNames = classnames(prefixCls, {
    [`${prefixCls}-square`]: shape === 'square',
    [`${prefixCls}-with-${extraType}`]: extra && (extraType === 'widget' || extraType === 'mask'),
  }, className);
  const combineStyle = size ? {
    width: size,
    height: size,
    ...style,
  } : style;

  const handleClick = (e: MouseEvent) => {
    if (onClick && isFunc(onClick)) {
      onClick(e);
    }
  }

  const renderChildren = () => {
    if (React.Children.count(children) > 1) {
      warning(`Avatar only expect one child element.`);
    }

    // NOTE: this only to get the first child
    const firstChild = React.Children.toArray(children)[0];

    if (!firstChild) return null;

    const isImage = isValidElement(firstChild)
      && (firstChild.type === 'img'
      || firstChild.type === 'picture'
      || firstChild.props.originalType === 'img'); // NOTE: just compatible with storybook.

    if (isImage) {
      return (
        <span className={`${prefixCls}-image`}>
          {firstChild}
        </span>
      );
    }

    return (
      <span ref={textRef} className={`${prefixCls}-text`}>
        {firstChild}
      </span>
    );
  };

  return (
    <div ref={avatarRef} className={classNames} style={combineStyle} onClick={handleClick}>
      {renderChildren()}
      {extra && (
        <div className={`${prefixCls}-extra`} style={extraStyle}>
          {extra}
        </div>)
      }
    </div>
  );
};

export default Avatar;
