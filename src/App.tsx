import Button from './components/Button/button';
import Input from './components/Input/input';

function App() {
  function handleChange(val: string) {
    console.log(val)
  }
  return (
    <section>
      <Button style={{ marginBottom: 16 }}>Default Button</Button>
      <Input placeholder="test" style={{ marginBottom: 16 }} />
      <Input placeholder="test2" style={{ marginBottom: 16 }} onChange={handleChange} prefix="https://" suffix=".com" />
      <Input placeholder="test3" style={{ marginBottom: 16 }} prefix="https://" disabled />
      {/* <Input placeholder="test3" prefix={<Icon icon="times-circle" />} /> */}
      <Input placeholder="test3" style={{ marginBottom: 16 }} allowClear />
    </section>
  );
}

export default App;
