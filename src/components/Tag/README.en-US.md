## API

The table to display the props of your component

| Property        | Description                        | Type                         | Default | Version |
| --------------- | ---------------------------------- | ---------------------------- | ------- | ------- | ----- |
| className       | additional css class               | string                       | -       | 1.6.0   |
| style           | additional style                   | CSSProperties                | -       | 1.6.0   |
| bordered        | whether to how Tag borders         | boolean                      | false   | 1.6.0   |
| size            | specify the size of Tag            | 'xs' \| 'sm' \| 'md' \| 'lg' | 'md'    | 1.6.0   |
| closable        | whether can hide Tag               | boolean                      | false   | 1.6.0   |
| selectable      | whether can select Tag             | boolean                      | false   | 1.6.0   |
| visible         | whether to show Tag                | boolean                      | true    | 1.6.0   |
| selected        | set the currently selected value   | boolean                      | false   | 1.6.0   |
| defaultSelected | set default selected value         | boolean                      | false   | 1.6.0   |
| icon            | extra icon prefix of Tag           | ReactNode                    | -       | 1.6.0   |
| closeIcon       | specify the close icon             | ReactNode                    | -       | 1.6.0   |
| onClose         | callback when click the close icon | () => Promise                | void    | -       | 1.6.0 |
| onSelect        | callback when selected Tag         | (checked: boolean) => void   | -       | 1.6.0   |

## Change Log

### 1.6.0

2022-03-20

#### init

- init template.
- finished basic functionalities.
- added unit tests.
