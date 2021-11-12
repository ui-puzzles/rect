import React, { FC, isValidElement, MouseEvent, useState } from 'react';
import classnames from 'classnames';

import { AlertProps } from './interface';
import Icon, { IconProp } from '../Icon';
import Transition from '../Transition';
import { isFunc } from '../../utils';

const prefixCls = 'pr-alert';

const Alert: FC<AlertProps> = (props) => {
  const {
    customIcon,
    iconSize = '1x',
    showIcon,
    title,
    content,
    hidden = false,
    closable = false,
    bordered = false,
    extra,
    type = 'info',
    className,
    style,
    onClose,
  } = props;
  const [isHidden, setHidden] = useState(hidden);

  const classNames = classnames(prefixCls, {
    [`${prefixCls}-${type}`]: type, // the default value is "info"
    [`${prefixCls}-bordered`]: bordered, // the default value is "left"
  }, className);

  const handleClose = (e: MouseEvent) => {
    setHidden(true);
    if (onClose && isFunc(onClose)) {
      onClose(e);
    }
  };

  const renderIcon = () => {
    if (isValidElement(customIcon)) return (
      <div className={`${prefixCls}-icon`}>
        {customIcon}
      </div>
    );

    const typeMapIcon = {
      info: 'info-circle',
      success: 'check-circle',
      warning: 'exclamation-circle',
      danger: 'times-circle'
    };

    if (showIcon) {
      return (
        <div className={`${prefixCls}-icon`}>
          <Icon icon={typeMapIcon[type] as IconProp} size={iconSize} theme={type} />
        </div>
      );
    }

    return null;
  };

  const renderSuffix = () => {
    if (closable && !extra) {
      return (
        <div className={`${prefixCls}-suffix`}>
          <Icon icon="times" onClick={handleClose} />
        </div>
      );
      /**
      * NOTE: if users past the props of "extra" and want to hidden
      * the component. we think to do this in the "extra" by users is better practice
      */
    } else if (isValidElement(extra)) {
      return (
        <div className={`${prefixCls}-suffix`}>
          {extra}
        </div>
      );
    }

    return null;
  };

  return (
    <Transition
      in={!isHidden && !hidden}
      timeout={300}
      animation="zoom-in-top"
    >
      <div className={classNames} style={style}>
        {renderIcon()}
        <div className={`${prefixCls}-wrapper`}>
          <div className={`${prefixCls}-title`}>{title}</div>
          {
            content && <div className={`${prefixCls}-content`}>{content}</div>
          }
        </div>
        {renderSuffix()}
      </div>
    </Transition>
  );
};

export default Alert;
