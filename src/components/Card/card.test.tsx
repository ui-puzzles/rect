import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Card, { CardProps } from './index';

const defaultProps: CardProps = {
  onClick: jest.fn(),
};
const CARD_WIDTH = 200;

describe('Card', () => {
  it('render default correctly', () => {
    const wrapper = render(<Card {...defaultProps}>Fear of death is what keeps us alive.</Card>);
    const cardElem = wrapper.container.querySelector('.pr-card') as HTMLDivElement;
    const cardContentElem = cardElem?.querySelector('.pr-card-content');
    
    expect(cardElem).toBeInTheDocument();
    expect(cardContentElem).toBeInTheDocument();
    fireEvent.click(cardElem);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it('with title and extra', () => {
    render(<Card
      title="Card Title"
      extra={<a href="#">More</a>}
    >Fear of death is what keeps us alive.</Card>);
    const titleElem = screen.queryByText('Card Title');
    const extraElem = screen.queryByText('More');

    expect(titleElem).toBeInTheDocument();
    expect(titleElem).toHaveClass('pr-card-header-title');
    expect(extraElem).toBeInTheDocument();
  });

  it('with width and cover and coverMode', async () => {
    const wrapper = render(<Card
      title="Card Title"
      width={CARD_WIDTH}
      cover={<img alt="card cover" src="https://images-1254102905.cos.ap-shanghai.myqcloud.com/articles/Bookshelf.png" />}
      coverMode="fill"
      extra={<a href="#">More</a>}
    >Fear of death is what keeps us alive.</Card>);
    const cardElem = wrapper.container.querySelector('.pr-card') as HTMLDivElement;
    const coverElem = cardElem.querySelector('.pr-card-cover');
    // NOTE: jsdom doesn't support layout
    // expect(cardElem.getBoundingClientRect().width).toEqual(CARD_WIDTH);

    expect(cardElem).toHaveClass('pr-card-effect pr-card-fill');
    expect(coverElem).toBeInTheDocument();
    expect(coverElem?.querySelectorAll(":scope > img").length).toEqual(1);
  });
});

describe('Card.Meta', () => {
  it('render Card.Meta default correctly', () => {
    const wrapper = render(<Card>
      <Card.Meta title="All from love" description="Card.Meta desc"></Card.Meta>
    </Card>);
    const metaElem = wrapper.container.querySelector('.pr-card-meta');
    const metaTitleEle = screen.queryByText('All from love');
    const metaDescEle = screen.queryByText('Card.Meta desc');

    expect(metaElem).toBeInTheDocument();
    expect(metaTitleEle).toBeInTheDocument();
    expect(metaTitleEle).toHaveClass('pr-card-meta-title');
    expect(metaDescEle).toBeInTheDocument();
    expect(metaDescEle).toHaveClass('pr-card-meta-desc');
  });
});

describe('Card.Grid', () => {
  it('render Card.Grid default correctly', () => {
    const wrapper = render(<Card.Grid>
      <Card title="All from love"></Card>
    </Card.Grid>);
    const gridElem = wrapper.container.querySelector('.pr-card-grid');

    expect(gridElem).toBeInTheDocument();
  });
});