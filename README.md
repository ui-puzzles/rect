
<div align="center">
  <a href="https://ui-puzzles.github.io/rect/?path=/docs/welcome--page" target="_blank">
    <img alt="ui-puzzle logo" width="200" src="https://static-images-1305792369.cos.ap-shanghai.myqcloud.com/puzzle-logo.svg"/>
  </a>
</div>

<div align="center">
  <h1>ui-puzzle/rect</h1>
</div>

<div align="center">
A set of high-quality React components out of the box.
</div>

<div align="center">
English | [简体中文](./README-zh_CN.md)
</div>

# Features

## friendly

UI development process, the first thing to consider is how to make the components more user-friendly, so that users are comfortable with.

## Artistic

Continued pursuit of the ultimate in aesthetics while maintaining component performance.

## Efficient

During the code design process, we are trading-off to achieve the best balance between component reuse, business usage boundaries, and component usage specifications.

## Extensible

Considering the business case differences, the code in the framework are scope-limited and easily overwritten.

## Comprehensive

Out of the box, high-quality components that cover most business scenarios.

## TypeScript friendly

All components are written in TypeScript. it's type friendly.


# Installation

[npm package](https://www.npmjs.com/package/@ui-puzzles/rect)

```sh
// npm
npm i @ui-puzzles/rect

// yarn
yarn add @ui-puzzles/rect
```

# Examples

```typescript
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@ui-puzzles/rect';
import '@ui-puzzles/rect/dist/index.css';

function App() {
  return (
    <Button btnType="primary" label="Hello World" />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```


# Browser Support

| IE / Edge | Firefox | Chrome | Safari | Opera | Electron |
| --------- | --------- | --------- | --------- | --------- | --------- |
| Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions

# License

This project is [MIT licensed](./LICENSE)