## API

展示组件的所有 props：

| 属性             | 描述                                       | 类型          | 默认值 |
| ---------------- | ------------------------------------------ | ------------- | ------ | ----- |
| wrapperClassName | 给 img 元素外层的 div 添加额外的 className | string        | -      | 1.5.2 |
| wrapperStyle     | 给 img 元素外层的 div 添加额外的 style     | CSSProperties | -      | 1.5.2 |
| prefixCls        | 自定义 className 的前缀                    | string        | -      | 1.5.2 |
| placeholder      | img 加载时指定 placeholder                 | ReactNode     | -      | 1.5.2 |
| fallback         | img 加载错误后提供备用的 URL               | string        | -      | 1.5.2 |
| src              | img url                                    | string        | -      | 1.5.2 |

注意: Image props 继承 React.ImgHTMLAttributes&lt;HTMLImageElement&gt;。

## Change Log

### 1.5.2

2022-03-18

#### init

- 初始化模板。
- 完成基本功能开发。
- 添加单元测试。
