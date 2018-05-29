import React , { Component } from "react"
import extend from "safe-extend"
import defaultSettings from "./defaultSettings"
import util from "./util"
const reactDefaultValue = function (WrappedComponent, settings) {
    settings = extend(true, defaultSettings, settings)
    // input unifrom array
    if (!Array.isArray(settings.input)) {
        settings.input = [settings.input]
    }
    // output unifrom array
    if (!Array.isArray(settings.output)) {
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
    class ReactDefaultValue extends Component {
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
            let isControlled = settings.input.some((key) => {
                return typeof self.props[key] !== 'undefined'
            })
            if (!isControlled) {
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
                                sync = function (...arg) {
                                    self.setState({
                                        [defaultInput[index]]: item.sync.apply({}, arg)
                                    })
                                }
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
            const { forwardedRef } = self.props;
            return (
                    <WrappedComponent
                        ref={forwardedRef}
                        {...self.props}
                        {...proxyProps}
                    />
                )
        }
    }
    // https://github.com/airbnb/enzyme/pull/1513
    // 因为 Enzyme 不支持 forwardRef 所以加一个判断便于在单元测试中测试
    var globalVar = global || {}
    if (globalVar.isTestDoNotUseForward) {
        return ReactDefaultValue
    }
    return React.forwardRef(function (props, ref) {
        return ( <ReactDefaultValue {...props} forwardedRef={ref} /> )
    })
}
module.exports = reactDefaultValue
