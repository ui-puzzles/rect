import Button from './components/Button/button';
import Icon from './components/Icon/icon';
import Input from './components/Input/input';
import Progress from './components/Progress';
import Upload from './components/Upload/upload';

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
      
      <Progress percent={30} />

      <div>
        <Upload action="http://yapi.smart-xwork.cn/mock/102072/components/upload"
          name="file"
          draggable>
          <Icon icon="upload" size="3x" />
        </Upload>
      </div>
    </section>
  );
}

export default App;
