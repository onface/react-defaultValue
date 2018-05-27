var ReactDOM = require('react-dom');
var React = require('react')
var Menu = require('./Menu')
class UncontrolledMenu extends React.Component {
    render () {
        const self = this
        return (
            <Menu defaultValue="egg" />
        )
    }
}
/*ONFACE-DEL*/UncontrolledMenu = require("react-hot-loader").hot(module)(UncontrolledMenu)
ReactDOM.render(
    <UncontrolledMenu />,
    document.getElementById('menu-uncontrolled-demo')
)
