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
    class ReactDefaultValue extends Component {
        constructor(props) {
            super(props)
            const self = this
            self.inputDefaultKey = [
                /*
                    "defaultValue",
                    "defaultShow",
                */
            ]
            settings.input.forEach(function (key) {
                let name = util.getInputName(key)
                self.inputDefaultKey.push(`default${util.firstUpperCase(name)}`)
            })
            self.state = {}
            let inputIndex = 0
            self.inputDefaultKey.forEach(function (key, index) {
                let value = props[key]
                let inputDefaultValue
                if (typeof settings.input[index] === 'object') {
                    inputDefaultValue = settings.input[index].default
                }
                if (typeof value === 'undefined') {
                    value = inputDefaultValue
                }
                self.state[key] = value
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
                settings.input.forEach(function (key, index) {
                    let name = util.getInputName(key)
                    proxyProps[name] = self.state[self.inputDefaultKey[index]]
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
                                            [self.inputDefaultKey[index]]: data
                                        })
                                    })
                                }
                            break
                        case 'object':
                                key = item.key
                                sync = function (...arg) {
                                    self.setState({
                                        [self.inputDefaultKey[index]]: item.sync.apply({}, arg)
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
    if (typeof React.forwardRef === 'undefined') {
        console.warn('react-defaultvalue(npm): You need to update react > 16.3.0\r\n Forwardref  https://reactjs.org/blog/2018/03/29/react-v-16-3.html#forwardref-api')
        return ReactDefaultValue
    }
    else {
        return React.forwardRef(function (props, ref) {
            return ( <ReactDefaultValue {...props} forwardedRef={ref} /> )
        })
    }
}
module.exports = reactDefaultValue
