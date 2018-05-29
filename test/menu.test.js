import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { expect } from 'chai';
import { mount } from 'enzyme';
import React, { Component } from "react"
import Menu from "./Menu"
class ControlledMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: 'egg' }
    }
    render () {
        const self = this
        return (
            <Menu
                value={self.state.value}
                onPick={function (value) {
                    self.setState({
                        value: value
                    })
                }}
            />
        )
    }
}

describe('<Menu />', () => {
    it('defaultValue', () => {
        var root = mount(<ControlledMenu />)
        expect(
            root.html()
        ).to.equal('<div><strong>egg</strong><button>meat</button><button>juice</button><button>egg</button></div>')
        root.find('button').at(0).simulate('click');
        expect(
            root.html()
        ).to.equal('<div><strong>meat</strong><button>meat</button><button>juice</button><button>egg</button></div>')
        root.find('button').at(1).simulate('click');
        expect(
            root.html()
        ).to.equal('<div><strong>juice</strong><button>meat</button><button>juice</button><button>egg</button></div>')
    })
    it('controlled', () => {
        var root = mount(<Menu defaultValue="egg" />)
        expect(
            root.html()
        ).to.equal('<div><strong>egg</strong><button>meat</button><button>juice</button><button>egg</button></div>')
        root.find('button').at(0).simulate('click');
        expect(
            root.html()
        ).to.equal('<div><strong>meat</strong><button>meat</button><button>juice</button><button>egg</button></div>')
        root.find('button').at(1).simulate('click');
        expect(
            root.html()
        ).to.equal('<div><strong>juice</strong><button>meat</button><button>juice</button><button>egg</button></div>')
    })
})
