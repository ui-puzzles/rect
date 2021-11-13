import React, { FC, isValidElement, MouseEvent } from 'react';
import classnames from 'classnames';

import { PageHeaderProps } from './interface';
import Icon from '../Icon';
import { isFunc } from '../../utils';

const prefixCls = 'pr-page-header';

const PageHeader: FC<PageHeaderProps> = (props) => {
  const {
    className,
    style,
    title,
    description,
    titleMode = 'horizontal',
    breadcrumb,
    backIcon = true,
    extra,
    footer,
    onBack,
    children,
  } = props;

  const classNames = classnames(prefixCls, className);
  const infoClassNames = classnames(`${prefixCls}-info`, {
    [`${prefixCls}-v`]: titleMode === 'vertical'
  });

  const handleBack = (e: MouseEvent) => {
    if (onBack && isFunc(onBack)) {
      onBack(e);
    }
  }

  const renderIcon = () => {
    if (isValidElement(backIcon)) return (
      <div className={`${prefixCls}-icon`} onClick={handleBack}>
        {backIcon}
      </div>
    );

    return (
      <div className={`${prefixCls}-icon`} onClick={handleBack}>
        <Icon icon="arrow-left" size="lg" />
      </div>
    )
  };

  return (
    <div className={classNames} style={style}>
      {breadcrumb}
      <div className={`${prefixCls}-wrapper`}>
        {renderIcon()}
        {
          title && (
            <div className={infoClassNames}>
              <span className={`${prefixCls}-title`}>{title}</span>
              {description && <span className={`${prefixCls}-desc`}>{description}</span>}
            </div>
          )
        }
        {extra}
      </div>
      {children}
      {footer}
    </div>
  );
};

export default PageHeader;
