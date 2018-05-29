import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { expect } from 'chai';
import { mount } from 'enzyme';
import React, { Component } from "react"
import Tooltip from "./Tooltip"
class ControlledTooltip extends React.Component {
    constructor(props) {
        super(props)
        this.state = { show: false }
    }
    render () {
        const self = this
        return (
            <Tooltip
                show={self.state.show}
                onChange={function (value) {
                    self.setState({
                        show: value
                    })
                }}
            >
            controlled
            </Tooltip>
        )
    }
}

describe('<Tooltip />', () => {
    it('defaultShow', () => {
        var root = mount(<Tooltip>message</Tooltip>)
        expect(
            root.html()
        ).to.equal('<div><button>Tooltip</button></div>')
        root.find('button').simulate('click');
        expect(
            root.html()
        ).to.equal('<div><button>Tooltip</button>message</div>')
        root.find('button').simulate('click');
        expect(
            root.html()
        ).to.equal('<div><button>Tooltip</button></div>')
    })
    it('defaultShow={true}', () => {
        var root = mount(<Tooltip defaultShow={true}>message</Tooltip>)
        expect(
            root.html()
        ).to.equal('<div><button>Tooltip</button>message</div>')
        root.find('button').simulate('click');
        expect(
            root.html()
        ).to.equal('<div><button>Tooltip</button></div>')
        root.find('button').simulate('click');
        expect(
            root.html()
        ).to.equal('<div><button>Tooltip</button>message</div>')
    })
    it('controlled', () => {
        var root = mount(<ControlledTooltip />)
        expect(
            root.html()
        ).to.equal('<div><button>Tooltip</button></div>')
        root.find('button').simulate('click');
        expect(
            root.html()
        ).to.equal('<div><button>Tooltip</button>controlled</div>')
        root.find('button').simulate('click');
        expect(
            root.html()
        ).to.equal('<div><button>Tooltip</button></div>')
    })
})
