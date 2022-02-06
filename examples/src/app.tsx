import { Layout, Tabs } from '@/index';
import './app.scss';

function App() {
  return (
    <Layout>
      <Layout.Header className="demo-header">Page Header</Layout.Header>
      <Layout style={{ height: '100vh' }}>
        <Layout.Aside className="demo-aside">Page Left Aside</Layout.Aside>
        <Layout.Main className="demo-main">
          <Tabs>
            <Tabs.TabPane label="tab 1" key="0">
              <h1>tab 1</h1>
            </Tabs.TabPane>
            <Tabs.TabPane label="tab 2" key="tab2">
              <h1>tab 2</h1>
            </Tabs.TabPane>
            <Tabs.TabPane label="tab 3" key="2">
              <h1>tab 3</h1>
            </Tabs.TabPane>
          </Tabs>
        </Layout.Main>
        <Layout.Aside className="demo-aside">Page Right Aside</Layout.Aside>
      </Layout>
      <Layout.Footer className="demo-footer">Page Footer</Layout.Footer>
    </Layout>
  );
}

export default App;
