var ReactDOM = require('react-dom');
var React = require('react')
var Menu = require('./Menu')
class ControlledMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 'egg'
        }
    }
    render () {
        const self = this
        return (
            <Menu
                value={self.state.value}
                onPick={function (value) {
                    self.setState({
                        value: value
                    })
                }}
            />
        )
    }
}
/*ONFACE-DEL*/ControlledMenu = require("react-hot-loader").hot(module)(ControlledMenu)
ReactDOM.render(
    <ControlledMenu />,
    document.getElementById('menu-controlled-demo')
)
