import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { expect } from 'chai';
import { mount } from 'enzyme';
import React, { Component } from "react"
import reactDefaultValue from "../lib/index"
var utilRef = function (app) {
    app.$refs = app.$refs || {}
    return function (name){
        // ref={ref`root`}
        if (Array.isArray(name)) {
            name = name[0]
        }
        var React = require('react')
        app.$refs[name] = React.createRef()
        return app.$refs[name]
    }
}
class Ref extends React.Component {
    componentWillMount () {
        const self = this
        self.root = React.createRef()
    }
    render () {
        const self = this
        const ref = utilRef(self)
        return (
            <div ref={ref`wrap`} className="wrap" >
                <span ref={self.root}>some</span>
            </div>

        )
    }
}
Ref = reactDefaultValue(Ref)
class RefWrap extends React.Component {
    componentWillMount () {
        const self = this
        self.one = React.createRef()
    }
    componentDidMount () {
        const self = this
        expect(
            self.one.current.$refs.wrap.current.getAttribute('class')
        ).to.equal('wrap')

        expect(
            self.one.current.root.current.innerHTML
        ).to.equal('some')
    }
    render () {
        const self = this
        return (
            <div >
                <Ref value="1"  ref={self.one} />
            </div>
        )
    }
}
describe('Ref', () => {
    it('$refs.root', () => {
        var node = document.createElement('div')
        document.body.appendChild(node)
        require('react-dom').render(
            <RefWrap />,
            node
        )
        expect('RefWrap has expect').to.equal('RefWrap has expect')
    })
})
