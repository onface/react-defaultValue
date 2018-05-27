var ReactDOM = require('react-dom');
var React = require('react')
var Count = require('./Count.js')
class ControlledCount extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: 10 }
    }
    render () {
        const self = this
        return (
            <Count
                value={self.state.value}
                onChange={function (value) {
                    self.setState({
                        value: value
                    })
                }}
            />
        )
    }
}
/*ONFACE-DEL*/ControlledCount = require("react-hot-loader").hot(module)(ControlledCount)
ReactDOM.render(
    <ControlledCount />,
    document.getElementById('count-controlled-demo')
)
