var ReactDOM = require('react-dom');
var React = require('react')
var Tip = require('./Tip.js')
class UncontrolledTip extends React.Component {
    render () {
        return (
            <div>
                初始显示：<Tip>message</Tip>
                初始隐藏：<Tip defaultShow={false}>message</Tip>
            </div>
        )
    }
}
/*ONFACE-DEL*/UncontrolledTip = require("react-hot-loader").hot(module)(UncontrolledTip)
ReactDOM.render(
    <UncontrolledTip />,
    document.getElementById('tip-uncontrolled-demo')
)
