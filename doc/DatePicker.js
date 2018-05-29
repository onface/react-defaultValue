import React , { Component } from "react"
class DatePicker extends Component {
    constructor (props) {
        super(props)
        const self = this
        self.state = {

        }
    }
    render() {
        const self = this
        return (
            <input
                type="date"
                value={self.props.value}
                onChange={function (e) {
                    self.props.onChange({
                        date: e.target.value,
                        time: new Date(e.target.value).getTime()
                    })
                }}
            />
        )
    }
}
DatePicker  = require('react-defaultvalue')(DatePicker, {
    output: {
        key: 'onChange',
        sync: function (value) {
            return value.date
        }
    }
})
module.exports = DatePicker
