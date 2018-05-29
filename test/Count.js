var React = require('react')
class Count extends React.Component {
    render() {
        const self = this
        return (
            <button
                onClick={() => {
                    self.props.onChange(self.props.value + 1)
                }} >
                {self.props.value}
            </button>
        )
    }
}
global = global || {}
global.isTestDoNotUseForward = true
Count = require('../lib/index')(Count /*, {input:'value', output:'onChange'} */)
module.exports = Count
