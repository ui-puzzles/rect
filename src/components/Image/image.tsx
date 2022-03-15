import React, { FC, useState, useRef, isValidElement, SyntheticEvent } from 'react';
import classnames from 'classnames';

import { ImageProps } from './interface';
import { DEFAULT_PREFIX_CLS, DEFAULT_IMAGE } from './constants';
import { isTrue, isString } from '@/utils';

const RcImage: FC<ImageProps> = ({
  className,
  style,
  prefixCls = DEFAULT_PREFIX_CLS,
  wrapperClassName,
  wrapperStyle,
  width = '200px',
  height,
  alt,
  placeholder,
  src,
  fallback,
  onError,
}) => {
  const [source, setSource] = useState(src || '');
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>();
  const classNames = classnames(prefixCls, className);
  const wrapperClassNames = classnames(`${prefixCls}-wrapper`, wrapperClassName);
  let imgClassNames = `${prefixCls}-img`;

  const handleError = (e: SyntheticEvent) => {
    onError?.(e);

    imgClassNames = classnames(`${prefixCls}-img`, `${prefixCls}-error`);

    if (isTrue(fallback)) {
      setSource(DEFAULT_IMAGE);
    } else if (!fallback && isString(fallback)) {
      setSource(fallback);
    }
  };

  if (isValidElement(placeholder)) {
    imgRef.current = new Image();

    imgRef.current.src = source;

    imgRef.current.onload = () => {
      setIsLoaded(true);
    };
  }

  const renderImg = () => {
    return (
      <>
        {isValidElement(placeholder) && !isLoaded ? (
          { placeholder }
        ) : (
          <img
            alt={alt}
            width={width}
            height={height}
            className={imgClassNames}
            src={source}
            onError={handleError}
          />
        )}
      </>
    );
  };

  return (
    <div className={classNames} style={style}>
      <div style={wrapperStyle} className={wrapperClassNames}>
        {renderImg()}
      </div>
    </div>
  );
};

export default RcImage;
