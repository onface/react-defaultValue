import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { expect } from 'chai';
import { mount } from 'enzyme';
import React, { Component } from "react"
import OutputSync from "./OutputSync"

describe('<OutputSync />', () => {
    it('default value', () => {
        var btn = mount(<OutputSync defaultValue={1} />).find('button')
        expect(
            btn.html()
        ).to.equal('<button>1</button>')
        btn.simulate('click');
        expect(
            btn.html()
        ).to.equal('<button>2</button>')
    })
    it('controlled', () => {
        class Controlled extends Component {
            constructor(props) {
                super(props)
                this.state={value:11}
            }
            render () {
                const self = this
                return (
                    <OutputSync value={self.state.value} onMount={(value) => {
                        self.setState({
                            value: value.number
                        })
                    }} />
                )
            }
        }
        var btn = mount(<Controlled />).find('button')
        expect(
            btn.html()
        ).to.equal('<button>11</button>')
        btn.simulate('click');
        expect(
            btn.html()
        ).to.equal('<button>12</button>')
    })
})
