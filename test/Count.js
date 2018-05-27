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
Count = require('../lib/index')(Count)
module.exports = Count
