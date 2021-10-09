import Button from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';

function App() {
  function handleSelect(index: string) {
    alert(index)
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

      {/* <Menu mode="vertical">
        <SubMenu title="dropdown one">
          <MenuItem>dropdown one</MenuItem>
          <MenuItem>dropdown two</MenuItem>
          <MenuItem>dropdown three</MenuItem>
        </SubMenu>
        <SubMenu title="dropdown two">
          <MenuItem>dropdown three</MenuItem>
          <MenuItem>dropdown four</MenuItem>
          <MenuItem>dropdown five</MenuItem>
        </SubMenu>
        <SubMenu title="dropdown three">
          <MenuItem>dropdown six</MenuItem>
          <MenuItem>dropdown seven</MenuItem>
          <MenuItem>dropdown eight</MenuItem>
        </SubMenu>
      </Menu> */}
    </section>
  );
}

export default App;
