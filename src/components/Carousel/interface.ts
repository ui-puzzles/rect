import { CSSProperties, ReactNode } from "react";

export interface CarouselProps {
  className?: string;
  style?: CSSProperties;
  autoplay?: boolean;
  loop?: boolean;
  controller?: ReactNode;
  indicator?: ReactNode;
  interval?: number;
  direction?: 'horizontal' | 'vertical';
  effect?: 'slide' | 'card' | 'fade';
  onChange?: (index: number) => void;
}

export interface CarouselItemProps {
  className?: string;
  style?: CSSProperties;
}

export interface InternalCarouselItemProps {
  index?: number;
  activeIndex?: number;
}

export interface CarouselControllerProps {
  className?: string;
  style?: CSSProperties;
}

export interface InternalControllerProps {
  next?: () => void;
  prev?: () => void;
}

export interface CarouselIndicatorProps {
  className?: string;
  style?: CSSProperties;
  position?: 'bottom' | 'top' | 'left' | 'right' | 'outer';
  triggerType?: 'click' | 'hover';
  shape?: 'line' | 'dot' | 'slider';
}

export interface InternalIndicatorProps {
  slidesLength?: number;
  activeIndex?: number;
  slideTo?: (idx: number) => void;
}
