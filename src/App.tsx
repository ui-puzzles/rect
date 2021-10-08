import Button from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';

function App() {
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

      <Menu>
        <SubMenu title="dropdown">
          <MenuItem>dropdown one</MenuItem>
          <MenuItem>dropdown two</MenuItem>
          <MenuItem>dropdown three</MenuItem>
        </SubMenu>
      </Menu>
    </section>
  );
}

export default App;
