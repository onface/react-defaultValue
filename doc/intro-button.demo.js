import ReactDOM from "react-dom"
import React , { Component } from "react"
class Button extends Component {
    constructor (props) {
        super(props)
        const self = this
        self.state = {
            value: props.defaultValue
        }
    }
    render() {
        const self = this
        return (
            <button
                onClick={() => {
                    if (typeof self.props.onChange === 'function') {
                        self.props.onChange(self.props.value + 1)
                    }
                    else {
                        self.setState({value: self.state.value + 1})
                    }
                }}
            >
                {self.props.value || self.state.value}
            </button>
        )
    }
}
class Demo extends Component {
    constructor (props) {
        super(props)
        const self = this
        self.state = {
            value: 10
        }
    }
    render() {
        const self = this
        return (
            <Button
                value={self.state.value}
                onChange={function (value) {
                    self.setState({value: value})
                }}
             />
        )
    }
}


ReactDOM.render(
    <Demo />,
    document.getElementById('intro-button-demo')
)
