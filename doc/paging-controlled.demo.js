var ReactDOM = require('react-dom');
var React = require('react')
var Paging = require('./Paging')
class ControlledPaging extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: "2",
            pageSize: "50"
        }
    }
    render () {
        const self = this
        return (
            <Paging
                page={self.state.page}
                pageSize={self.state.pageSize}
                onChange={function (page) {
                    self.setState({
                        page: page
                    })
                }}
                onChangePageSize={function (pageSize) {
                    self.setState({
                        pageSize: pageSize
                    })
                }}
            />
        )
    }
}
/*ONFACE-DEL*/ControlledPaging = require("react-hot-loader").hot(module)(ControlledPaging)
ReactDOM.render(
    <ControlledPaging />,
    document.getElementById('paging-controlled-demo')
)
