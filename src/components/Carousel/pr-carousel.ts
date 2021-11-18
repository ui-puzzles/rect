import React from 'react';

export interface IPrCarousel {
  container: HTMLDivElement;
  data: string[];
  sliders: Element[];
  render: (items: string[]) => string;
  registerPlugin: () => void;
  getSelectedItem: () => Element | null;
  getSelectedItemIndex: () => number;
  slideTo: (idx: number) => void;
  next: () => void;
  prev: () => void;
  start: () => void;
  stop: () => void;
}

export interface CarouselPlugin {
  render: (items: string[]) => string;
  initialize: (carousel: PrCarousel) => void
}

export class PrCarousel implements IPrCarousel {
  container: HTMLDivElement;
  data: string[];
  sliders: Element[];
  interval: number;
  carousel_timer: NodeJS.Timeout | undefined;

  constructor({
    container,
    items = [],
    interval = 3000
  } : {
    container: HTMLDivElement,
    items: string[],
    interval: number
  }) {
    this.container = container;
    this.data = items;
    this.container.innerHTML = this.render(this.data);
    this.sliders = Array.from(this.container.querySelectorAll('.pr-carousel-item, .pr-carousel-item-selected'))
    this.interval = interval;
  }

  render(items: string[]) {
    const content = items.map(item => `
      <li class="slider__item">
        <img src="${item}"/>
      </li>    
    `.trim());

    return `<ul>${content.join('')}</ul>`;
  }

  registerPlugin(...plugins: CarouselPlugin[]) {
    plugins.forEach(plugin => {
      const pluginContainer = document.createElement('div');
      pluginContainer.className = 'carousel-plugin';
      pluginContainer.innerHTML = plugin.render(this.data);
      this.container.appendChild(pluginContainer);
      plugin.initialize(this);
    });
  }

  getSelectedItem() {
    const selectedEle = this.container.querySelector('.pr-carousel-item-selected');
    return selectedEle;
  }

  getSelectedItemIndex() {
    const selected = this.getSelectedItem();
    return selected ? this.sliders.indexOf(selected) : 0;
  }

  slideTo(idx: number) {
    const selected = this.getSelectedItem();
    if (selected) {
      selected.className = 'pr-carousel-item';
    }

    const item = this.sliders[idx];
    if (item) {
      item.className = 'pr-carousel-item-selected';
    }

    const detail = { index: idx };
    const customizedEvent = new CustomEvent('slide', {
      bubbles: true,
      detail,
    });
    this.container.dispatchEvent(customizedEvent);
  }

  next() {
    const curIdx = this.getSelectedItemIndex();
    const nextIdx = (curIdx + 1) % this.sliders.length;
    this.slideTo(nextIdx);
  }

  prev() {
    const slidersLength = this.sliders.length;
    const curIdx = this.getSelectedItemIndex();
    const prevIdx = (slidersLength + curIdx - 1) % slidersLength;

    this.slideTo(prevIdx);
  }

  start() {
    this.stop();
    this.carousel_timer = setInterval(() => {
      this.next();
    }, this.interval);
  }

  stop() {
    this.carousel_timer && clearInterval(this.carousel_timer);
  }
}

export const pluginIndicator: CarouselPlugin = {
  render(items: string[]) {
    return `
      <div class="pr-carousel-indicator">
        ${items.map((item, i) => `
        <span class="pr-carousel-indicator-dot${i === 0 ? '-selected' : ''}"></span>
        `)}
      </div>
    `.trim();
  },
  initialize() {}
}

export const pluginPrev: CarouselPlugin = {
  render() {
    return '<a class="pr-carousel-prev"></a>';
  },

  initialize(carousel: PrCarousel) {
    const prevElem = carousel.container.querySelector('.pr-carousel-prev');

    if (prevElem) {
      prevElem.addEventListener('click', (event) => {
        carousel.stop();
        carousel.prev();
        carousel.start();
        event.preventDefault();
      })
    }
  }
};

export const pluginNext: CarouselPlugin = {
  render() {
    return '<a class="pr-carousel-next"></a>';
  },

  initialize(carousel: PrCarousel) {
    const prevElem = carousel.container.querySelector('.pr-carousel-next');

    if (prevElem) {
      prevElem.addEventListener('click', (event) => {
        carousel.stop();
        carousel.next();
        carousel.start();
        event.preventDefault();
      })
    }
  }
};