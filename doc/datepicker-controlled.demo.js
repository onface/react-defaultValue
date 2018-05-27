var ReactDOM = require('react-dom');
var React = require('react')
var DatePicker = require('./DatePicker.js')
class ControlledDatePicker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '2018-11-11'
        }
    }
    render () {
        const self = this
        return (
            <DatePicker
                value={self.state.value}
                onChange={function (value) {
                    self.setState({
                        value: value.date
                    })
                }}
            />
        )
    }
}
/*ONFACE-DEL*/ControlledDatePicker = require("react-hot-loader").hot(module)(ControlledDatePicker)
ReactDOM.render(
    <ControlledDatePicker />,
    document.getElementById('datepicker-controlled-demo')
)
