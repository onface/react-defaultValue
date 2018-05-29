import React , { Component } from "react"
class OutputSync extends Component {
    render() {
        const self = this
        return (
            <div>
                <button
                    onClick={function () {
                        self.props.onMount({
                            number: self.props.value + 1
                        })
                    }}
                >{self.props.value}</button>
            </div>
        )
    }
}
global = global || {}
global.isTestDoNotUseForward = true
// 一行代码实现 defaultValue
OutputSync = require('../lib/index')(OutputSync, {output: {
    key: 'onMount',
    sync: function (value) {
        return value.number
    }
}})
export default OutputSync
