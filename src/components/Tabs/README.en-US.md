## API

The table to display the props of your component.

### Tabs

| Property         | Description                                                                      | Type                                   | Default  | Version |
| ---------------- | -------------------------------------------------------------------------------- | -------------------------------------- | -------- | ------- |
| className        | additional css class                                                             | string                                 | -        | 1.4.3   |
| style            | additional style                                                                 | CSSProperties                          | -        | 1.4.3   |
| defaultActiveKey | set active tab key                                                               | string                                 | '0'      | 1.4.3   |
| tabPosition      | position of tabs                                                                 | 'left' \| 'right' \| 'top' \| 'bottom' | 'top'    | 1.4.3   |
| type             | style of tabs                                                                    | 'line' \| 'card'                       | 'line'   | 1.4.3   |
| size             | size of tabs                                                                     | 'small' \| 'middle' \| 'large'         | 'middle' | 1.4.3   |
| extra            | customize actions                                                                | ReactNode                              | -        | 1.4.3   |
| lazy             | When set to true, hidden tabs will not be rendered when the component is mounted | boolean                                | true     | 1.4.3   |
| onChange         | Callback when activeTab changed                                                  | (key: string \| React.Key) => void     | -        | 1.4.3   |
| onTabClick       | Callback when click Tab                                                          | (key: string \| React.Key) => void     | -        | 1.4.3   |

### Tabs.TabPane

| Property  | Description          | Type                | Default | Version |
| --------- | -------------------- | ------------------- | ------- | ------- |
| className | additional css class | string              | -       | 1.4.3   |
| style     | additional style     | CSSProperties       | -       | 1.4.3   |
| label     | label of tabs        | string \| ReactNode | -       | 1.4.3   |
| disabled  | disabled a tab       | boolean             | false   | 1.4.3   |

## Change Log

### 1.4.3

2022-02-09

#### init

- init template.

#### develop

- finished basic functionalities.
- added docs

#### tests

- added unit tests
