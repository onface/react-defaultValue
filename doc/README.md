# 文档

# value&onChange

````code
{
    title: '创建计数器',
    desc: '`Count = require("react-defaultvalue")(Count)`<br />`<Count value={number} onChange={(number)=>{}} />`',
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
    desc: '`Tooltip = require("react-defaultvalue")(Tooltip, {input: "show"})`<br />`<Tooltip show={boolean} onChange={(number)=>{}} />message</Tooltip>`',
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
    desc: '`<Tooltip show={boolean} onChange={function(value){}} >`',
    html: '<div id="tooltip-controlled-demo" ></div>',
    source: './tooltip-controlled.demo.js',
    files:['./Tooltip.js'],
    side: true
}
````
