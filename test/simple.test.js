import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { expect } from 'chai';
import { mount } from 'enzyme';
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

describe('<Count />', () => {
    it('render count', () => {
        expect(
            mount(<Count />).find('button').length
        ).to.equal(1)
    })
    it('default value', () => {
        var btn = mount(<Count defaultValue={20} />).find('button')
        expect(
            btn.html()
        ).to.equal('<button>20</button>')
        btn.simulate('click');
        expect(
            btn.html()
        ).to.equal('<button>21</button>')
        btn.simulate('click');
        expect(
            btn.html()
        ).to.equal('<button>22</button>')
    })
    it('controlled', () => {
        var btn = mount(<ControlledCount/>).find('button')
        expect(
            btn.html()
        ).to.equal('<button>10</button>')
        btn.simulate('click');
        expect(
            btn.html()
        ).to.equal('<button>11</button>')
        btn.simulate('click');
        expect(
            btn.html()
        ).to.equal('<button>12</button>')
    })
})
