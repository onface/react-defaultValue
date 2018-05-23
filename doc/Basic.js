var React = require('react')
var reactDefaultValue = require('react-defaultvalue')
class Count extends React.Component {
    render() {
        const self = this
        return (
            <button onClick={() => {
                self.props.onChange(self.props.value + 1)
            }} >{self.props.value}</button>
        )
    }
}
Count = reactDefaultValue(Count)
class Basic extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 1
        }
    }
    render () {
        const self = this
        return (
            <div className="basicDemo" >
                <Count defaultValue={20} />
                <hr />
                <Count
                    value={self.state.value}
                    onChange={function(value) {
                        self.setState({
                            value: value
                        })
                    }}
                />
            </div>
        )
    }
}
/*ONFACE-DEL*/Basic = require("react-hot-loader").hot(module)(Basic)
module.exports = Basic
