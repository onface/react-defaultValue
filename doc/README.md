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
