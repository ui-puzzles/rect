// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render } from '@testing-library/react';

import Layout from './index';

describe('Layout', () => {
  it('render default correctly', () => {
    const wrapper = render(
      <Layout style={{ height: 240 }}>
        <Layout.Header>Page Header</Layout.Header>
        <Layout>
          <Layout.Aside>Page Aside</Layout.Aside>
          <Layout.Main>Page Main</Layout.Main>
        </Layout>
        <Layout.Footer>Page Footer</Layout.Footer>
      </Layout>
    );

    const outerLayoutEle = wrapper.container.querySelector('.pr-layout');
    const innerLayoutEle = wrapper.container.querySelector('.pr-layout-has-aside');
    const headerEle = wrapper.queryByText('Page Header');
    const asideEle = wrapper.queryByText('Page Aside');
    const mainEle = wrapper.queryByText('Page Main');
    const footerEle = wrapper.queryByText('Page Footer');

    expect(outerLayoutEle).toBeInTheDocument();
    expect(innerLayoutEle).toBeInTheDocument();
    expect(headerEle).toBeInTheDocument();
    expect(headerEle).toHaveClass('pr-layout-header');

    expect(asideEle).toBeInTheDocument();
    expect(asideEle).toHaveClass('pr-layout-aside');

    expect(mainEle).toBeInTheDocument();
    expect(mainEle).toHaveClass('pr-layout-main');

    expect(footerEle).toBeInTheDocument();
    expect(footerEle).toHaveClass('pr-layout-footer');
  });
});
