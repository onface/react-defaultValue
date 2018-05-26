# 指引

> 使用一个组件或模块之前，应当知道它能解决的问题是什么，不能解决的问题是什么。使用的最佳实践是什么？


## 非受控组件

React 提供的[非受控组件](https://doc.react-china.org/docs/uncontrolled-components.html) 通过 `defaultValue` 控制表单的默认值。搜索

这是个很棒的方式，因为我们并不需要在任何时候都配置表单控件的 `value` 和 `onChange`。

但是我们自己实现的组件想支持非受控组件就需要自己实现 `defaultValue` 。比如实现一个点击会递增的 `Button`。

## 受控的按钮

````code
{
    title: '受控的按钮',
    desc: '`<Button value={self.state.value} onChange={function(){...}} />`',
    html: '<div id="intro-button-demo" ></div>',
    js: './intro-button.demo.js',
    source: './intro-button.demo.js',
    horiz: false
}
````

## 非受控的按钮

````code
{
    title: '非受控的按钮',
    desc: '`<Button defaultValue={20} />`',
    html: '<div id="intro-defaultValue-demo" ></div>',
    js: './intro-defaultValue.demo.js',
    source: './intro-defaultValue.demo.js',
    horiz: false
}
````

## 如何实现 `defaultValue`

比较两段代码的区别后可以发现支持 `defaultValue` 需要加上

1. 组件内部状态默认为 defaultValue

```diff
self.state = {
   value: props.defaultValue
}
```

2. `props.onChange === undefined` 时修改组件内部状态

```js
if (typeof self.props.onChange === 'undefined') {
    self.setState({value: self.state.value + 1})
}
```

3. `props.value` 不存在时使用组件内部状态

```js
{
    typeof self.props.value !== 'undefined'?
    self.props.value:
    self.state.value
}
```

修改的代码量不大，你甚至可以将第二段代码作为实现 `defaultValue` 的教程。

## 简练代码实现丰富功能

但是如果你需要开发很多组件，例如 [onface](https://onface.live/) 团队要维护 [大量的 react 组件](https://onface.live/react.html) 重复写 `defaultValue` 代码会变得很枯燥。


有些组件的 [输入输出](http://onface.live/component-spec/react/input-output.html)接口比较另类。比如：

输出 `onMount`
```js
<Count
    value={self.state.age}
    onMount={self.handleChange}
/>
```

输入 `show`
```js
<Tooltip
    show={self.state.tip}
    onChange={self.handleChange}
/>
```

标准的输入输出应该是

```js
<input
    value={self.state.name}
    onChange={self.handleChange}
/>
```

这些情况下刚才所展示的代码就需要做很多修改。枯燥是不枯燥了，不同组件每次都实现不同的 `defaultValue` 会变得很繁琐。

> `Tooltip` 的输入是 `show` 是完全合理的，不同于表单控件输入是`value`。


## react-defaultvalue

使用 [react-defaultvalue](http://onface.live/react-defaultvalue) 能快速优雅的解决这些问题。

```js
/*
    <Count
        value={self.state.age}
        onMount={self.handleChange}
    />
*/
Count = require('react-defaultvalue')(Count, {
    output: 'onMount'
})
```
```js
<Count defaultValue={20} />
```

```js
/*
    <Tooltip
        show={self.state.tip}
        onChange={self.handleChange}
    />
*/
Tooltip = require('react-defaultvalue')(Tooltip, {
    input: 'show'
})
```
```js
<Tooltip />
<Tooltip defaultShow={true} />
```

**[更多使用方法](./README.md)**
