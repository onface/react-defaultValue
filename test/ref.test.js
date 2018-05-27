import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { expect } from 'chai';
import { mount } from 'enzyme';
import React, { Component } from "react"
import reactDefaultValue from "../lib/index"

class Ref extends React.Component {
    render () {
        const self = this
        return (
            <span ref={(node) => {
                self.node = node
            }}>some</span>
        )
    }
}
Ref = reactDefaultValue(Ref)
class RefWrap extends React.Component {
    componentDidMount () {
        const self = this
        expect(
            self.node.$refs.root.props.value
        ).to.equal('1')
    }
    render () {
        const self = this
        return (
            <Ref value="1" ref={(node) => {
                self.node = node
            }} />
        )
    }
}
describe('Ref', () => {
    it('$refs.root', () => {
        mount(<RefWrap />)
    })
})
