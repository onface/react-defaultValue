var ReactDOM = require('react-dom');
var React = require('react')
var Count = require('./Count.js')
class UncontrolledCount extends React.Component {
    render () {
        return (
            <Count defaultValue={20} />
        )
    }
}
/*ONFACE-DEL*/UncontrolledCount = require("react-hot-loader").hot(module)(UncontrolledCount)
ReactDOM.render(
    <UncontrolledCount />,
    document.getElementById('count-uncontrolled-demo')
)
