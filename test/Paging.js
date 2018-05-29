import React , { Component } from "react"
class Paging extends Component {
    render() {
        const self = this
        return (
            <div>
                第:
                <button>{self.props.page}</button>
                <select
                    value={self.props.page}
                    onChange={function (e) {
                        self.props.onChange(e.target.value)
                    }}
                >
                    <option value="1" >1</option>
                    <option value="2" >2</option>
                    <option value="3" >3</option>
                </select>
                页。
                每页显示:
                <button>{self.props.pageSize}</button>
                <select
                    value={self.props.pageSize}
                    onChange={function (e) {
                        self.props.onChangePageSize(e.target.value)
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
global = global || {}
global.isTestDoNotUseForward = true
Paging = require('../lib/index')(Paging, {
    // 使用数组配置 多输入输出，但要注意对应顺序。
    input: ['page', 'pageSize'],
    output: ['onChange', 'onChangePageSize']
})
module.exports = Paging
