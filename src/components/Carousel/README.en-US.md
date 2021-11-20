## API

The table to display the props of your component.

### Carousel

|Property|Description|Type|Default|Version|
|---|---|---|---|---|
| className | additional css class | string | - | 0.1.4 |
| style | additional style | CSSProperties | - | 0.1.4 |
| autoplay | automatically play | boolean | true | 0.1.4 |
| controller | whether render the controller | ReactNode | - | 0.1.4 |
| indicator | whether render the indicator | ReactNode | - | 0.1.4 |
| interval |  interval of auto play | number | 3000 | 0.1.4 |
| direction | direction of slide when the effect equal 'slide' | 'horizontal' \| 'vertical' | 'horizontal' | 0.1.4 |
| effect | animation of slide | 'slide' \| 'card(not supported)' \| 'fade' | 'fade' | 0.1.4 |
| onChange | callback of slide | (index: number) => void | - | 0.1.4 |


### Carousel.Item

|Property|Description|Type|Default|Version|
|---|---|---|---|---|
| className | additional css class | string | - | 0.1.4 |
| style | additional style | CSSProperties | - | 0.1.4 |

### Controller

|Property|Description|Type|Default|Version|
|---|---|---|---|---|
| className | additional css class | string | - | 0.1.4 |
| style | additional style | CSSProperties | - | 0.1.4 |

### Indicator

|Property|Description|Type|Default|Version|
|---|---|---|---|---|
| className | additional css class | string | - | 0.1.4 |
| style | additional style | CSSProperties | - | 0.1.4 |
| position | position of indicator | 'bottom' \| 'top' \| 'left' \| 'right' | 'outer' | 'bottom' | 0.1.4 |
| triggerType | type of trigger on indicator | 'click' \| 'hover' | 'click' | 0.1.4 |
| shape | style of indicator | 'line(not supported)' \| 'dot' \| 'slider(not supported)' | 'dot' | 0.1.4 |

## Change Log

### 0.1.0

2021-09-12

#### init

- init template.

2021-11-17

### develop

- complete basic features

2021-11-20

### develop

- optimize code
- added storybook docs
- added partial of unit tests