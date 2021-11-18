import React, { FC, isValidElement, useState, useEffect, useRef } from 'react';
import classnames from 'classnames';

import { CarouselProps, CarouselItemProps, InternalCarouselItemProps } from './interface';
import { ITEM_DISPLAY_NAME, itemPrefixCls } from './carousel-item';
import { warning, isFunc, isDev } from '../../utils';

const prefixCls = 'pr-carousel';

const Carousel: FC<CarouselProps> = (props) => {
  const {
    className,
    style,
    autoplay = true,
    controller,
    indicator,
    interval = 3000,
    direction = 'horizontal',
    effect = 'slide',
    onChange,
    children,
  } = props;
  const [curIndex, setCurIndex] = useState(0);
  const [slidesLength, setSlidesLength] = useState(0);
  const carouselRef = useRef(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const cacheNextFunc = useRef<(() => void) | null>(null);

  const isValidEffect = ['slide', 'fade', 'card'].includes(effect);
  const classNames = classnames(prefixCls, className);
  const sliderClasses = classnames(`${prefixCls}-wrapper`, {
    [`${prefixCls}-v`]: direction === 'vertical',
    [`${prefixCls}-${effect}`]: isValidEffect,
  });

  const handleSlideTo = (idx: number) => {
    setCurIndex(idx);

    if (onChange && isFunc(onChange)) {
      onChange(idx)
    }
  };

  const handleNext = () => {
    // NOTE: 1 % 0 = NaN
    if (slidesLength <= 0) return;
    
    const nextIdx = (slidesLength + curIndex + 1) % slidesLength;
    handleSlideTo(nextIdx);
  };

  const handlePrev = () => {
    if (slidesLength <= 0) return;

    const prevIdx = (slidesLength + curIndex - 1) % slidesLength;
    handleSlideTo(prevIdx);
  };

  const handleStop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleStart = () => {
    handleStop();
    intervalRef.current = setInterval(() => {
      cacheNextFunc.current && cacheNextFunc.current();
    }, interval);
  };

  useEffect(() => {
    cacheNextFunc.current = handleNext;

    return () => {
      cacheNextFunc.current = null;
    }
  });

  useEffect(() => {
    const carouselElem = carouselRef.current;
    if (carouselElem) {
      const slides = Array.from((carouselElem as HTMLDivElement).querySelectorAll(`.${itemPrefixCls}`));

      setSlidesLength(slides.length)
    }

    if (autoplay) {
      handleStart();
    }
  
    return () => {
      stop();
    }
  }, [])

  const renderController = () => {
    if (isValidElement(controller)) {
      return React.cloneElement(controller, {
        next: handleNext,
        prev: handlePrev,
      });
    }

    return null;
  };

  const renderIndicator = () => {
    if (isValidElement(indicator)) {
      return React.cloneElement(indicator, {
        slidesLength,
        activeIndex: curIndex,
        slideTo: handleSlideTo,
      });
    }

    return null;
  };

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElem = child as React.FunctionComponentElement<CarouselItemProps & InternalCarouselItemProps>;
      const { displayName } = childElem.type

      if (displayName === ITEM_DISPLAY_NAME) {
        return React.cloneElement(childElem, {
          key: index.toString(),
          index,
          activeIndex: curIndex,
        });
      }

      if (isDev) {
        warning('Carousel has a child that is not a Carousel.Item component');
      }
    });
  }

  return (
    <div className={classNames}
      style={style}
      ref={carouselRef}
      onMouseEnter={handleStop}
      onMouseLeave={handleStart}
    >
      <ul className={sliderClasses}>
        {renderChildren()}
      </ul>
      {renderController()}
      {renderIndicator()}
    </div>
  );
};

export default Carousel;
