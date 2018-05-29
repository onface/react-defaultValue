import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { expect } from 'chai';
import { mount } from 'enzyme';
import React, { Component } from "react"
import Paging from "./Paging"

describe('<Paging />', () => {
    it('defaultValue', () => {
        var root = mount(<Paging defaultPage={2} defaultPageSize={50} />)
        expect(
            root.find('button').at(0).html()
        ).to.equal('<button>2</button>')
        root.find('select').at(0).simulate('change', {
            target: {
                value: '3'
            }
        })
        expect(
            root.find('button').at(0).html()
        ).to.equal('<button>3</button>')

        expect(
            root.find('button').at(1).html()
        ).to.equal('<button>50</button>')
        root.find('select').at(1).simulate('change', {
            target: {
                value: '10'
            }
        })
        expect(
            root.find('button').at(1).html()
        ).to.equal('<button>10</button>')
    })
})
