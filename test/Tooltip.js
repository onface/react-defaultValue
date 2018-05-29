import React , { Component } from "react"
class Tooltip extends Component {
    render() {
        const self = this
        return (
            <div>
                <button
                    onClick={() => {
                        self.props.onChange(!self.props.show)
                    }}
                >Tooltip</button>
                {
                    self.props.show?
                    self.props.children:
                    false
                }
            </div>
        )
    }
}
global = global || {}
global.isTestDoNotUseForward = true
// 一行代码实现 defaultValue
Tooltip = require('../lib/index')(Tooltip, {input: "show"})
module.exports = Tooltip
