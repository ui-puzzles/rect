## API

The table to display the props of your component

| Property         | Description                                 | Type          | Default | Version |
| ---------------- | ------------------------------------------- | ------------- | ------- | ------- |
| wrapperClassName | additional css class for wrapper of img     | string        | -       | 1.5.2   |
| wrapperStyle     | additional style for wrapper of img         | CSSProperties | -       | 1.5.2   |
| prefixCls        | customize the prefix of class name          | string        | -       | 1.5.2   |
| placeholder      | specify the placeholder when img is loading | ReactNode     | -       | 1.5.2   |
| fallback         | provide extra url when img loaded error     | string        | -       | 1.5.2   |
| src              | Image path                                  | string        | -       | 1.5.2   |

NOTE: Image props extends React.ImgHTMLAttributes&lt;HTMLImageElement&gt;.

## Change Log

### 1.5.2

2022-03-18

#### init

- init template.
- finished basic functionalities.
- added unit tests.
