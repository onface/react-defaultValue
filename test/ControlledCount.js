import React, { Component } from "react"
import Count from "./Count"
class ControlledCount extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: 10 }
    }
    render () {
        const self = this
        return (
            <Count
                value={self.state.value}
                onChange={function (value) {
                    self.setState({
                        value: value
                    })
                }}
            />
        )
    }
}
module.exports = ControlledCount
