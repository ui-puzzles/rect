
import { FC } from 'react';

import Carousel from './carousel';
import CarouselItem from './carousel-item';
import Controller from './controller';
import Indicator from './indicator';

import {
  CarouselProps,
  CarouselItemProps,
  CarouselControllerProps,
  CarouselIndicatorProps,
} from './interface';

export type IComponentCarousel = FC<CarouselProps> & {
  Item: FC<CarouselItemProps>;
  Controller: FC<CarouselControllerProps>;
  Indicator: FC<CarouselIndicatorProps>;
};

const ComponentCarousel = Carousel as IComponentCarousel;

ComponentCarousel.Item = CarouselItem;
ComponentCarousel.Controller = Controller;
ComponentCarousel.Indicator = Indicator;

export default ComponentCarousel;