import { render, fireEvent, RenderResult } from '@testing-library/react';

import Tabs, { TabsProps, TabPaneProps } from './index';

const TabPane = Tabs.TabPane;
const defaultProps: TabsProps = {
  onChange: jest.fn(),
  onTabClick: jest.fn(),
};

const genTabs = (props: TabsProps = {}, tabPaneProps: Partial<TabPaneProps> = {}) => {
  return (
    <Tabs {...props}>
      <TabPane label="tab1">content one</TabPane>
      <TabPane label="tab2" {...tabPaneProps}>
        content two
      </TabPane>
      <TabPane label="tab3">content three</TabPane>
    </Tabs>
  );
};

let tabOne: HTMLElement, tabTwo: HTMLElement, tabThree: HTMLElement, wrapper: RenderResult;

describe('Tabs', () => {
  beforeEach(() => {
    wrapper = render(genTabs(defaultProps));
    tabOne = wrapper.getByText('tab1');
    tabTwo = wrapper.getByText('tab2');
    tabThree = wrapper.getByText('tab3');
  });

  it('render default correctly', async () => {
    const tabsElem = wrapper.container.querySelector('.pr-tabs') as HTMLDivElement;
    const tabsNavElem = tabsElem?.querySelector('.pr-tabs-nav');
    const tabsContentElem = tabsElem?.querySelector('.pr-tabs-content');

    expect(tabsElem).toBeInTheDocument();
    expect(tabsElem).toHaveClass('pr-tabs-line');
    expect(tabsNavElem).toBeInTheDocument();
    expect(tabsNavElem?.querySelectorAll(':scope > .pr-tabs-item').length).toEqual(3);
    expect(tabsContentElem).toBeInTheDocument();
    expect(tabsContentElem?.querySelectorAll(':scope > .pr-tabs-pane').length).toEqual(1);

    expect(tabOne).toHaveClass('pr-tabs-item-active');
    fireEvent.click(tabTwo);
    expect(defaultProps.onChange).toHaveBeenCalledWith('1');
    expect(defaultProps.onTabClick).toHaveBeenCalledWith('1');

    expect(tabOne).not.toHaveClass('pr-tabs-item-active');
    expect(tabTwo).toHaveClass('pr-tabs-item-active');
  });
});
