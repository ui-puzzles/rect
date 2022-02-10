import { FC } from 'react';

import Card from './card';
import Meta from './meta';
import Grid from './grid';
import { CardProps, CardGridProps, CardMetaProps } from './interface';

export type ICardComponent = FC<CardProps> & {
  Meta: FC<CardMetaProps>;
  Grid: FC<CardGridProps>;
};

export type { CardProps, CardGridProps, CardMetaProps };

const ComponentCard = Card as ICardComponent;

ComponentCard.Meta = Meta;
ComponentCard.Grid = Grid;

export default ComponentCard;
