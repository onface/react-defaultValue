var ReactDOM = require('react-dom');
var React = require('react')
var Paging = require('./Paging')
class UncontrolledPaging extends React.Component {
    render () {
        const self = this
        return (
            <Paging defaultPage={2} defaultPageSize={50} />
        )
    }
}
/*ONFACE-DEL*/UncontrolledPaging = require("react-hot-loader").hot(module)(UncontrolledPaging)
ReactDOM.render(
    <UncontrolledPaging />,
    document.getElementById('paging-uncontrolled-demo')
)
