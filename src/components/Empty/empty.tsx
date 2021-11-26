import React, { FC, isValidElement } from 'react';
import classnames from 'classnames';

import { EmptyProps } from './interface';

const prefixCls = 'pr-empty';

const Empty: FC<EmptyProps> = (props) => {
  const {
    className,
    style,
    image,
    imageStyle,
    description = 'No Data',
  } = props;

  const classNames = classnames(prefixCls, className);

  const renderImage = () => {
    return (
      <div className={`${prefixCls}-img`} style={imageStyle}>
        { isValidElement(image)
          ? image
          : (
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="64" height="64">
              <path d="M844.16 196.48C832 156.16 794.24 128 752.64 128H271.36c-41.6 0-79.36 28.16-91.52 68.48L97.28 471.04 96 800c0 53.12 42.88 96 96 96h640c53.12 0 96-42.88 96-96V480l-83.84-283.52zm-602.88 18.56c3.84-13.44 16-23.04 30.08-23.04H752c14.08 0 26.88 9.6 30.72 23.04L862.08 480H588.8v32c0 42.24-34.56 76.8-76.8 76.8-42.24 0-76.8-34.56-76.8-76.8v-32H161.28l80-264.96zM832 832H192c-17.92 0-32-14.08-32-32V544h215.04c14.72 62.08 70.4 108.8 136.96 108.8S634.88 606.08 648.96 544H864v256c0 17.92-14.08 32-32 32z" />
            </svg>
          ) 
        }
      </div>
    )
  };

  return (
    <div className={classNames} style={style}>
      {renderImage()}
      <span className={`${prefixCls}-desc`}>{description}</span>
    </div>
  );
};

export default Empty;
