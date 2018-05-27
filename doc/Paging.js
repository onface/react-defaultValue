import React , { Component } from "react"
class Paging extends Component {
    constructor (props) {
        super(props)
        const self = this
        self.state = {

        }
    }
    render() {
        const self = this
        return (
            <div>
                第:
                <select
                    value={self.props.page}
                    onChange={function (e) {
                        self.props.onChange(e.target.value)
                    }}
                >
                    <option value="1" >1</option>
                    <option value="2" >2</option>
                    <option value="3" >3</option>
                    <option value="4" >4</option>
                    <option value="5" >5</option>
                </select>
                页。
                每页显示:
                <select
                    value={self.props.perPage}
                    onChange={function (e) {
                        self.props.onChangePerPage(e.target.value)
                    }}
                >
                    <option value="10" >10</option>
                    <option value="50" >50</option>
                    <option value="100" >100</option>
                </select>
                条
            </div>
        )
    }
}
Paging.defaultProps = {
    onChange: functoin(){},
    onChangePerPage: functoin(){},
export default Paging
