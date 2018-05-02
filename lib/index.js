import React , { Component } from "react"
import syncState from "sync-state"
module.exports = function reactDefaultValue (Component) {
    return class DefaultValue extends Component {
        constructor (props) {
            super(props)
            const self = this
            self.state = {
                form: {
                    value: ''
                }
            }
        }
        render() {
            const self = this
            let extendProps = {}
            if (typeof self.props.defaultValue !== 'undefined' && typeof self.props.value === 'undefined') {
                extendProps = syncState(this, 'form')('value', {
                    defaultValue: self.props.defaultValue
                })
            }
            return (
                <Component ref="root" {...extendProps} {...self.props} />
            )
        }
    }
}
