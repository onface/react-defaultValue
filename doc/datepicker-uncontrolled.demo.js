var ReactDOM = require('react-dom');
var React = require('react')
var DatePicker = require('./DatePicker.js')
class UncontrolledDatePicker extends React.Component {
    render () {
        return (
            <DatePicker defaultValue="2012-11-11" />
        )
    }
}
/*ONFACE-DEL*/UncontrolledDatePicker = require("react-hot-loader").hot(module)(UncontrolledDatePicker)
ReactDOM.render(
    <UncontrolledDatePicker />,
    document.getElementById('datepicker-uncontrolled-demo')
)
