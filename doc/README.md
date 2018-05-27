# 文档

## value&onChange

````code
{
    title: '创建计数器',
    desc: '`<Count value={number} onChange={(number)=>{}} />`<br />`Count = require("react-defaultvalue")(Count)`',
    html: '',
    source: './Count.js',
    run: false,
    open: true
}
````


````code
{
    title: '调用计数器（默认20）',
    desc: '`<Count defaultValue={20} />`',
    html: '<div id="count-uncontrolled-demo" ></div>',
    source: './count-uncontrolled.demo.js',
    files:['./Count.js'],
    side: true
}
````

````code
{
    title: '受控计数器',
    desc: '`<Count value={self.state.value} onChange={...} />`',
    html: '<div id="count-controlled-demo" ></div>',
    source: './count-controlled.demo.js',
    files:['./Count.js'],
    side: true
}
````

## show&onChange

````code
{
    title: '创建提示层',
    desc: '`<Tooltip show={boolean} onChange={(number)=>{}}>message</Tooltip>`<br />`Tooltip = require("react-defaultvalue")(Tooltip, {input: "show"})`',
    html: '',
    source: './Tooltip.js',
    run: false,
    open: true
}
````


````code
{
    title: '调用提示层(非受控)',
    desc: '`<Tooltip>`',
    html: '<div id="tooltip-uncontrolled-demo" ></div>',
    source: './tooltip-uncontrolled.demo.js',
    files:['./Tooltip.js'],
    side: true
}
````

````code
{
    title: '调用提示层(受控)',
    desc: '`<Tooltip show={self.state.show} onChange={function(value){}} >`',
    html: '<div id="tooltip-controlled-demo" ></div>',
    source: './tooltip-controlled.demo.js',
    files:['./Tooltip.js'],
    side: true
}
````

## value&onPick

````code
{
    title: '创建菜单',
    desc: '`<Menu value={string} onPick={(string)=>{}} />`<br />`Menu = require("react-defaultvalue")(Menu, {output: "onPick"})`',
    html: '',
    source: './Menu.js',
    run: false,
    open: true
}
````


````code
{
    title: '菜单(非受控)',
    desc: '`<Menu defaultValue="egg" >`',
    html: '<div id="menu-uncontrolled-demo" ></div>',
    source: './menu-uncontrolled.demo.js',
    files:['./Menu.js'],
    side: true
}
````

````code
{
    title: '菜单(受控)',
    desc: '`<Menu value={self.state.value} onPick={function(){}} >`',
    html: '<div id="menu-controlled-demo" ></div>',
    source: './menu-controlled.demo.js',
    files:['./Menu.js'],
    side: true
}
````

## output.sync

某些控件的输出(`output`)会包括很多信息，不适合直接将 `output` 函数的第一个参数 , `event.target.value` , `event.target.checked` 作为 输入(`input`) 保存。

例如：

```js
<DatePicker
    value="2012-11-11"
    onChange={function (value) {
        /*
            value = {
                date: '2012-11-11',
                time: 1527406198844
            }
        */
    }}
/>
```

虽然我们在[组件规范：输入输出](https://github.com/onface/component-spec/blob/master/react/input-output.md)中提供了更好的接口设计方法。但如果你依然要设计成

```js
{
    date: '2012-11-11',
    time: 1527406198844
}
```
 这种形式，或者这个组件是第三方的你无法修改。那么可以使用 `output.sync` 自定义返回值。

> DatePicker 这个例子更好的接口设计不返回 `value.time`, `value` 的内容就是字符串 `"2012-11-11"`


````code
{
    title: '创建日期选择',
    desc: '',
    html: '',
    source: './DatePicker.js',
    run: false,
    open: true
}
````


````code
{
    title: '日期选择(非受控)',
    desc: '`<DatePicker defaultValue="2012-11-11"/>`',
    html: '<div id="datepicker-uncontrolled-demo" ></div>',
    source: './datepicker-uncontrolled.demo.js',
    files:['./DatePicker.js'],
    side: true
}
````

````code
{
    title: '日期选择(受控)',
    desc: '`<DatePicker value={self.state.value} onChange={function(){}} />`',
    html: '<div id="datepicker-controlled-demo" ></div>',
    source: './datepicker-controlled.demo.js',
    files:['./DatePicker.js'],
    side: true
}
````
