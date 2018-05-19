import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import { alertOctagon as icon } from './feather/alertOctagon'
import { SvgIcon } from './SvgIcon'

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe('SvgIcon test', () =>{
    it('sets svg attribs to camelCase', () => {
        
        const svgIconEl = shallow(<SvgIcon icon={icon} />)
        //this icon has 3 fields needed to be camel cased, this should not have -
        
        const svgEl = svgIconEl.find('svg')
        
        const propsWithDash = Object.keys(svgEl.props()).filter( key => key.indexOf('-') >= 0 )

        //we should not find anything with a dash on it
        expect(propsWithDash.length).toBe(0)

    })
})