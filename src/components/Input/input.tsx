import React, { FC, ChangeEvent, InputHTMLAttributes, ReactElement, useState, CSSProperties, isValidElement } from 'react';
import classnames from 'classnames';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Icon from '../Icon/icon';

const prefixCls = 'pr-input';

export type InputSize = 'small' | 'middle' | 'large';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size' | 'prefix' | 'onChange'>{
  disabled?: boolean;
  size?: InputSize;
  allowClear?: boolean;
  bordered?: boolean;
  id?: string;
  prefix?: string | ReactElement;
  suffix?: string | ReactElement;
  icon?: IconProp;
  style?: CSSProperties;
  onChange?: (value: string) => void;
}

const Input: FC<InputProps> = (props) => {
  const {
    className,
    size,
    prefix,
    suffix,
    allowClear,
    disabled,
    bordered,
    style,
    onChange,
    ...restProps
  } = props;
  const [value, setValue] = useState('');

  const sizeSuffix = ((size: InputSize) => {
    const sizeMap = {
      large: 'lg',
      middle: 'mid',
      small: 'sm',
    };

    return sizeMap[size];
  })(size as InputSize);

  // props of value and defaultValue cannot exist at the same time
  // Input element must be either controlled or uncontrolled(specify either the value prop, or the defaultValue prop, but not both)
  if ('value' in props) {
    delete restProps.defaultValue;
  }

  const classes = classnames(`${prefixCls}`, {
    [`${prefixCls}-${sizeSuffix}`]: size !== 'middle',
    [`${prefixCls}-disabled`]: disabled,
    [`${prefixCls}-no-border`]: !bordered,
  }, className);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const iptValue = e.target.value;
    let curValue = '';

    setValue(iptValue);

    if (prefix && !isValidElement(prefix) && suffix && !isValidElement(suffix)) {
      curValue = `${prefix}${iptValue}${suffix}`;
    } else if (suffix && !isValidElement(suffix)) {
      curValue = `${iptValue}${suffix}`;
    } else if (prefix && !isValidElement(prefix)) {
      curValue = `${prefix}${iptValue}`;
    } 

    if (typeof onChange === 'function') {
      onChange(curValue)
    }
  };

  const handleClear = () => {
    setValue('');
  };

  const renderInput = () => {
    const customStyle = (prefix || suffix) ? {} : style;

    if (allowClear) {
      return (
        <div style={customStyle} className={`${prefixCls}-clear`}>
          <input disabled={disabled}
            className={classes}
            value={value}
            {...restProps}
            onChange={handleChange} />
          <Icon icon="times-circle" className={`${prefixCls}-clear-icon`} onClick={handleClear} />
        </div>
      );
    }
    
    return <input disabled={disabled}
      style={customStyle}
      className={classes}
      value={value}
      {...restProps}
      onChange={handleChange} />;
  }

  return (
    <>
      {
        (prefix || suffix) ? (
          <div style={style} className={`${prefixCls}-group-wrapper`}>
            <div className={`${prefixCls}-wrapper`}>
              {prefix && <div className={`${prefixCls}-addon`}>{prefix}</div>}
              {renderInput()}
              {suffix && <div className={`${prefixCls}-addon`}>{suffix}</div>}
            </div>
          </div>
        )
        : renderInput()
      }
    </>
  );
};

Input.defaultProps = {
  size: 'middle',
  bordered: true,
  allowClear: false,
};

export default Input;
