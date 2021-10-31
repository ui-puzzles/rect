import { storiesOf } from '@storybook/react';

storiesOf('Welcome page', module)
  .add('welcome', () => {
    return (
      <>
        <h1>欢迎来到 ui-puzzles/rect 组件库</h1>
        <p>ui-puzzles/rect是基于React打造的一套服务中后台的Web组件库</p>
        <h3>安装</h3>
        <code>
          npm install ui-puzzles/rect --save
        </code>
      </>
    )
  }, { info : { disable: true }})