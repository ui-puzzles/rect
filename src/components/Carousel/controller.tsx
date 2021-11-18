import React, { FC } from 'react';
import classnames from 'classnames';

import { CarouselControllerProps, InternalControllerProps } from './interface';
import Icon from '../Icon';
import { isFunc } from '../../utils';

const prefixCls = 'pr-carousel-ctrl';

const Controller: FC<CarouselControllerProps & InternalControllerProps> = (props) => {
  const {
    className,
    style,
    next,
    prev
  } = props;

  const classNames = classnames(prefixCls, className);

  const handlePrev = () => {
    if (prev && isFunc(prev)) {
      prev();
    }
  };

  const handleNext = () => {
    if (next && isFunc(next)) {
      next();
    }
  };

  return (
    <div className={classNames} style={style}>
      <div className={`${prefixCls}-left`} onClick={handlePrev}>
        <Icon icon="chevron-left" />
      </div>
      <div className={`${prefixCls}-right`} onClick={handleNext}>
        <Icon icon="chevron-right" />
      </div>
    </div>
  );
};

export default Controller;
