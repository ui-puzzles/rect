import React, { FC, CSSProperties } from 'react';

import { ThemeProps } from '../Icon/icon';

const PROGRESS_CLS_PREFIX = 'puzzle-progress';

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
    <div className={PROGRESS_CLS_PREFIX} style={style}>
      <div style={{ height: `${strokeHeight}px`}} className={`${PROGRESS_CLS_PREFIX}-line`}>
        <div className={`${PROGRESS_CLS_PREFIX}-line-inner ${PROGRESS_CLS_PREFIX}-line-${theme}` }
          style={{width: `${percent}%`}}
        >
          {
            showText && (
              <span className={`${PROGRESS_CLS_PREFIX}-line-text`}>{`${percent}%`}</span>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Progress;

