import { Layout } from '@/index';
import './app.scss';

function App() {
  return (
    <Layout>
      <Layout.Header className="demo-header">Page Header</Layout.Header>
      <Layout style={{ height: '100vh' }}>
        <Layout.Aside className="demo-aside">Page Left Aside</Layout.Aside>
        <Layout.Main className="demo-main">Page Main</Layout.Main>
        <Layout.Aside className="demo-aside">Page Right Aside</Layout.Aside>
      </Layout>
      <Layout.Footer className="demo-footer">Page Footer</Layout.Footer>
    </Layout>
  );
}

export default App;
