import React, { forwardRef } from 'react';
import classnames from 'classnames';

import { CardMetaProps } from './interface';

const prefixCls = 'pr-card-meta';

const Meta = forwardRef<HTMLDivElement, CardMetaProps>((props, ref) => {
  const {
    className,
    style,
    avatar,
    title,
    description,
    children,
  } = props;

  const classNames = classnames(prefixCls, className);

  return (
    <div ref={ref} className={classNames} style={style}>
      {
        avatar && (
          <div className={`${prefixCls}-avatar`}>
            {avatar}
          </div>
        )
      }
      {
        (title || description) && (
          <div className={`${prefixCls}-wrapper`}>
            { title && <div className={`${prefixCls}-title`}>{title}</div> }
            { description && <div className={`${prefixCls}-desc`}>{description}</div> }
            { children }
          </div>
        )
      }
    </div>
  );
});

Meta.displayName = 'CardMeta';

export default Meta;
