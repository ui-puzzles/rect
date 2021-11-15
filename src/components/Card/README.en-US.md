## API

The table to display the props of your component

### Card

|Property|Description|Type|Default|Version|
|---|---|---|---|---|
| className | additional css class | string | - | 0.1.4 |
| style | additional style | CSSProperties | - | 0.1.4 |
| title | specify the title of header | ReactNode | - | 0.1.4 |
| extra | customize actions | ReactNode | - | 0.1.4 |
| headerStyle | additional style for header | CSSProperties | - | 0.1.4 |
| width | the size of card | number | - | 0.1.4 |
| minHeight | specify the min-height style when coverMode is "fill" | number | - | 0.1.4 |
| bodyStyle | additional style for content | CSSProperties | - | 0.1.4 |
| hoverEffect | the effect when hover to the card | boolean | true | 0.1.4 |
| bordered | the border style | boolean | true | 0.1.4 |
| loading | whether on loading state | boolean | false | 0.1.4 |
| cover | specify cover of card | ReactNode | - | 0.1.4 |
| coverMode | specify the mode of cover | 'normal' \| 'fill' | 'normal' | 0.1.4 |
| isCoverBlur | apply a gaussian blur to the cover | boolean | false | 0.1.4 |
| footer | content to render in the footer of card | ReactNode | - | 0.1.4 |
| onClick | callback for Card of click event | (e: MouseEvent) => void | - | 0.1.4 |

### Card.Meta

|Property|Description|Type|Default|Version|
|---|---|---|---|---|
| className | additional css class | string | - | 0.1.4 |
| style | additional style | CSSProperties | - | 0.1.4 |
| avatar | avatar of Meta | ReactNode | - | 0.1.4 |
| title | title of Meta | ReactNode | - | 0.1.4 |
| description | description of Meta | ReactNode | - | 0.1.4 |

### Card.Grid

|Property|Description|Type|Default|Version|
|---|---|---|---|---|
| className | additional css class | string | - | 0.1.4 |
| style | additional style | CSSProperties | - | 0.1.4 |
| gutter | specify the margin-right and margin-bottom | number \| [number, number] | 0 | 0.1.4 |
| cards | the list of Card | CardProps[] | - | 0.1.4 |

## Change Log

### 0.1.4

2021-09-12

#### init

- init template.

2021-11-15

#### develop

- complete basic functions.
- added storybook docs.