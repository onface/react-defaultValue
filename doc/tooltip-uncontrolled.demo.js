var ReactDOM = require('react-dom');
var React = require('react')
var Tooltip = require('./Tooltip')
class UncontrolledTooltip extends React.Component {
    render () {
        return (
            <div>
                <Tooltip>
                    message one
                </Tooltip>
                <Tooltip defaultShow={true} >
                    message two
                </Tooltip>
            </div>
        )
    }
}
/*ONFACE-DEL*/UncontrolledTooltip = require("react-hot-loader").hot(module)(UncontrolledTooltip)
ReactDOM.render(
    <UncontrolledTooltip />,
    document.getElementById('tooltip-uncontrolled-demo')
)
