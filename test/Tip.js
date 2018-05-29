import React , { Component } from "react"
class Tip extends Component {
    render() {
        const self = this
        return (
            <div>
                <button
                    onClick={function () {
                        self.props.onChange(!self.props.show)
                    }}
                >
                提示：
                {
                    self.props.show?
                    self.props.children:
                    false
                }
                </button>

            </div>
        )
    }
}
global = global || {}
global.isTestDoNotUseForward = true
Tip = require('../lib/index')(Tip, {
    // input: 'show' 中 `'show'` 改为对象
    input: {
        key: 'show',
        default: true
    }
})
module.exports = Tip
