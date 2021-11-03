import React, { FC, CSSProperties } from 'react';

import { ThemeProps } from '../Icon/icon';

const prefixCls = 'pr-progress';

export interface ProgressProps {
  percent: number;
  strokeHeight?: number;
  showText?: boolean;
  style?: CSSProperties,
  theme?: ThemeProps;
}

const Progress: FC<ProgressProps> = (props) => {
  /**
  * NOTE: use default parameter values instead of defaultProps
  */
  const {
    percent,
    strokeHeight = 15,
    showText = true,
    style,
    theme = 'primary',
  } = props

  return (
    <div className={prefixCls} style={style}>
      <div style={{ height: `${strokeHeight}px`}} className={`${prefixCls}-line`}>
        <div className={`${prefixCls}-line-inner ${prefixCls}-line-${theme}` }
          style={{width: `${percent}%`}}
        >
          {
            showText && (
              <span className={`${prefixCls}-line-text`}>{`${percent}%`}</span>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Progress;

