## API

The table to display the props of your component

|Property|Description|Type|Default|Version|
|---|---|---|---|
| title* | title of Alert | ReactNode | - | 0.1.4 |
| content | content of Alert | ReactNode | - | 0.1.4 |
| customIcon | custom icon | ReactNode | - | 0.1.4 |
| iconSize | custom icon size | SizeProp('xs' \| 'lg' \| 'sm' \| '1x' ... '10x') | '1x' | 0.1.4 |
| showIcon | whether to display icon | boolean | false | 0.1.4 |
| closable | whether can hidden Alert by close action | boolean  | false  | 0.1.4 |
| hidden | whether to display Alert | boolean | false | 0.1.4 |
| bordered | set border style | boolean | false | 0.1.4 |
| extra | custom content ro render instead of close icon | ReactNode | - | 0.1.4 |
| type | set Alert theme quickly | 'success' \| 'info' \| 'warning' \| 'error' | 'info' | 0.1.4 |
| className | additional css class | string | - | 0.1.4 |
| style | additional style | CSSProperties | - | 0.1.4 |
| onClose | Callback when Alert is closed | (e: MouseEvent) => void | - | 0.1.4 |

## Change Log

### 0.1.4

2021-09-11

#### init

- init template.

2021-09-11

#### develop

- finish basic function.
- added storybook.
- added unit tests.

