# 文档

````code
{
    title: '创建计数器',
    desc: '`Count = require("react-defaultvalue")(Count)`<br />`<Count value={number} onChange={(number)=>{}} />`',
    html: '<div id="count-demo" ></div>',
    source: './Count.js',
    run: false,
    open: true
}
````


````code
{
    title: '调用计数器（默认20）',
    desc: '`<Count defaultValue={20} />`',
    html: '<div id="uncontrolled-count-demo" ></div>',
    source: './uncontrolled-count.demo.js',
    files:['./Count.js'],
    side: true
}
````

````code
{
    title: '受控计数器',
    desc: '`<Count value={self.state.value} onChange={...} />`',
    html: '<div id="controlled-count-demo" ></div>',
    source: './controlled-count.demo.js',
    files:['./Count.js'],
    side: true
}
````
