import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { expect } from 'chai';
import { mount } from 'enzyme';
import React, { Component } from "react"
import DatePicker from "./DatePicker"

describe('<DatePicker />', () => {
    it('default value', (done) => {
        var input = mount(<DatePicker defaultValue="2012-11-11" />).find('input')
        expect(
            input.get(0).props.value
        ).to.equal('2012-11-11')
        done()
    })
    it('controlled', () => {

    })
})
