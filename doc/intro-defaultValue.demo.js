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
                    if (typeof self.props.onChange === 'undefined') {
                        self.setState({value: self.state.value + 1})
                    }
                    else {
                        self.props.onChange(self.props.value + 1)
                    }
                }}
            >
                {
                    typeof self.props.value !== 'undefined'?
                    self.props.value:
                    self.state.value
                }
            </button>
        )
    }
}


ReactDOM.render(
    (
        <Button defaultValue={20} />
    ),
    document.getElementById('intro-defaultValue-demo')
)
