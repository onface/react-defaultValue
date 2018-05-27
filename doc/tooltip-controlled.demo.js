var ReactDOM = require('react-dom');
var React = require('react')
var Tooltip = require('./Tooltip')
class ControlledTooltip extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }
    render () {
        const self = this
        return (
            <div>
                <Tooltip
                    show={self.state.show}
                    onChange={function(value) {
                        self.setState({
                            show: value
                        })
                    }}
                >
                    message controlled
                </Tooltip>
            </div>
        )
    }
}
/*ONFACE-DEL*/ControlledTooltip = require("react-hot-loader").hot(module)(ControlledTooltip)
ReactDOM.render(
    <ControlledTooltip />,
    document.getElementById('tooltip-controlled-demo')
)
