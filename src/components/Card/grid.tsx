import React, { FC } from 'react';
import classnames from 'classnames';

import { CardGridProps, CardProps } from './interface';
import Card, { CARD_DISPLAY_NAME } from './card';
import { warning } from '../../utils';

const prefixCls = 'pr-card-grid';

const Grid: FC<CardGridProps> = (props) => {
  const {
    className,
    style,
    children,
    gutter = 0,
    cards,
  } = props;

  const classNames = classnames(prefixCls, className);
  const gutterStyle = Array.isArray(gutter) ? {
    marginRight: gutter[0],
    marginBottom: gutter[1]
  } : {
    marginRight: gutter,
    marginBottom: gutter
  };

  const renderChildren = () => {
    if (cards?.length) {
      return cards.map((cardItem, index) => <Card {...cardItem} key={index} />);
    }

    return React.Children.map(children, (child, index) => {
      const childElem = child as React.FunctionComponentElement<CardProps>;
      const { displayName } = childElem.type;

      if (displayName === CARD_DISPLAY_NAME) {
        return React.cloneElement(childElem, {
          key: index,
          style: gutterStyle
        });
      } else {
        warning('Card.Grid may has a child that isn\'t Card component.');
      }
    });
  };

  return (
    <div className={classNames} style={style}>
      {renderChildren()}
    </div>
  );
};

Grid.displayName = 'CardGrid';

export default Grid;