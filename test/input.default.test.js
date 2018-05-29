import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { expect } from 'chai';
import { mount } from 'enzyme';
import React, { Component } from "react"
import Tip from "./Tip"

describe('<Tip />', () => {
    it('default value true', () => {
        var btn = mount(<Tip>message</Tip>).find('button')
        expect(
            btn.html()
        ).to.equal('<button>提示：message</button>')
    })
    it('default value false', () => {
        var btn = mount(<Tip defaultShow={false} >message</Tip>).find('button')
        expect(
            btn.html()
        ).to.equal('<button>提示：</button>')
    })
})
