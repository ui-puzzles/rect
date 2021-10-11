import Button from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Icon from './components/Icon/icon';

function App() {
  function handleSelect(index: string) {
    console.log(index)
  }
  return (
    <section>
      <Button>Default Button</Button>

      <Menu>
        <MenuItem>
          item-1
        </MenuItem>
        <MenuItem>
          item-2
        </MenuItem>
        <MenuItem disabled>
          item-3
        </MenuItem>
      </Menu>

      <Menu mode="vertical">
        <MenuItem>
          item-1
        </MenuItem>
        <MenuItem>
          item-2
        </MenuItem>
        <MenuItem disabled>
          item-3
        </MenuItem>
      </Menu>

      <Menu onSelect={handleSelect}>
        <MenuItem>dropdown two</MenuItem>
        <SubMenu title="dropdown two">
          <MenuItem>dropdown three</MenuItem>
          <MenuItem>dropdown four</MenuItem>
          <MenuItem>dropdown five</MenuItem>
        </SubMenu>
        <MenuItem>dropdown six</MenuItem>
      </Menu>

      <Menu mode="vertical" onSelect={handleSelect} defaultOpenSubMenus={['1']}>
        <MenuItem>dropdown two</MenuItem>
        <SubMenu title="dropdown two">
          <MenuItem>dropdown three</MenuItem>
          <MenuItem>dropdown four</MenuItem>
          <MenuItem>dropdown five</MenuItem>
        </SubMenu>
        <MenuItem>dropdown six</MenuItem>
      </Menu>

      <Icon icon="arrow-down" size="5x" theme="danger" />
    </section>
  );
}

export default App;
