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
// 一行代码实现 defaultValue
Count = require('react-defaultvalue')(Count)
module.exports = Count
