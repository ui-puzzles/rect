import React, { FC, useRef, useEffect, MouseEvent } from 'react';
import classnames from 'classnames';

import { ImageProps } from './interface';
import useImageStatus from './hooks/useImageStatus';
import { isString } from '../../utils';

export const DEFAULT_PREFIX_CLS = 'pr-image';

const RcImage: FC<ImageProps> = ({
  className,
  style,
  prefixCls = DEFAULT_PREFIX_CLS,
  wrapperClassName,
  wrapperStyle,
  width = 200,
  height = 200,
  alt,
  placeholder,
  src,
  fallback,
  children,
  onError,
  onClick,
  ...restProps
}) => {
  const { isLoading, setStatus } = useImageStatus('beforeLoad');
  const imgRef = useRef<HTMLImageElement>();
  const errRef = useRef<boolean>(false);

  const classNames = classnames(prefixCls, className);
  const wrapperClassNames = classnames(
    `${prefixCls}-wrapper`,
    {
      [`${prefixCls}-loading`]: isLoading,
      [`${prefixCls}-error`]: errRef.current,
    },
    wrapperClassName
  );

  const mergeStyles = Object.assign(
    {
      width,
      height,
    },
    style
  );

  const handleImgLoaded = () => {
    setStatus('loaded');
  };

  const handleImgError = (e: MouseEvent<HTMLImageElement>) => {
    onError?.(e);
    setStatus('error');

    errRef.current = true;

    if (isString(fallback) && !!fallback) {
      imgRef.current.src = fallback;
    }
  };

  const handleImgClick = (e: MouseEvent<HTMLImageElement>) => {
    onClick?.(e);
  };

  useEffect(() => {
    if (!imgRef.current) return;

    imgRef.current.src = src;
    setStatus('loading');
  }, [src]);

  return (
    <div className={classNames} style={mergeStyles}>
      <div style={wrapperStyle} className={wrapperClassNames}>
        <img
          ref={imgRef}
          className={`${prefixCls}-img`}
          {...restProps}
          alt={alt}
          width={width}
          height={height}
          onLoad={handleImgLoaded}
          onError={handleImgError}
          onClick={handleImgClick}
        />
        {isLoading && placeholder}
        {errRef.current && alt && fallback && <div className={`${prefixCls}-alt`}>{alt}</div>}
      </div>
      {children}
    </div>
  );
};

export default RcImage;
