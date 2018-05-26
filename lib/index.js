import React , { Component } from "react"
import extend from "safe-extend"
import defaultSettings from "./defaultSettings"
import util from "./util"
const reactDefaultValue = function (UserComponent, settings) {
    settings = extend(true, defaultSettings, settings)
    // input unifrom array
    if (typeof settings.input === 'string') {
        settings.input = [settings.input]
    }
    // output unifrom array
    if (typeof settings.output === 'string') {
        settings.output = [settings.output]
    }
    let defaultInput = [
        /*
            "defaultValue",
            "defaultShow",
        */
    ]
    settings.input.forEach(function (key) {
        defaultInput.push(`default${util.firstUpperCase(key)}`)
    })
    return class ReactDefaultValueProxyComponent extends Component {
        constructor(props) {
            super(props)
            const self = this
            self.state = {}
            Object.keys(props).forEach(function (key) {
                if (/default/.test(key)) {
                    self.state[key] = props[key]
                }
            })
        }
        transInput = () => {
            const self = this
        }
        render () {
            const self = this
            let proxyProps = {}
            let useDefaultValue = defaultInput.some(function (item) {
                return typeof self.props[item] !== 'undefined'
            })
            if (useDefaultValue) {
                settings.input.forEach(function (key) {
                    proxyProps[key] = self.state[`default${util.firstUpperCase(key)}`]
                })
                settings.output.forEach(function (item, index) {
                    let key
                    let sync
                    switch (typeof item) {
                        case 'string':
                                key = item
                                sync = function (...arg) {
                                    util.defaultSync(arg, function (data) {
                                        self.setState({
                                            [defaultInput[index]]: data
                                        })
                                    })
                                }
                            break
                        case 'object':
                                key = item.key
                                sync = item.sync
                            break
                        default:
                            let typeErrorMessage = 'react-defaultvalue(npm): ' +
                            'reactDefaultValue(App, settings) settings.output[item]' +
                            ' item must be string or object'
                            throw new Error(
                                typeErrorMessage
                            )
                    }
                    proxyProps[key] = sync
                })
            }
            return <UserComponent
                {...self.props}
                {...proxyProps}
            />
        }
    }
}
module.exports = reactDefaultValue
