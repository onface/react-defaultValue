import React , { Component } from "react"
class Menu extends Component {
    render() {
        const self = this
        return (
            <div>
                <strong>{self.props.value}</strong>
                {
                    self.props.list.map(function (value) {
                        return (
                            <button
                                key={value}
                                onClick={function() {
                                    self.props.onPick(value)
                                }}
                            >{value}</button>
                        )
                    })
                }
            </div>
        )
    }
}
Menu.defaultProps = {
    list: ['meat', 'juice', 'egg'],
    onPick:function (){}
}
global = global || {}
global.isTestDoNotUseForward = true
// 一行代码实现 defaultValue
Menu = require('../lib/index')(Menu, {output: 'onPick'})
module.exports = Menu
