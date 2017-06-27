import React from 'react';
import Data from '../../src/containers/data';
describe('Testing the App Component',()=> {
    let component;
    beforeEach(() => {
        component = shallow(<Data/>);
    })
    it('check component', () => {
        expect(component).to.exist;
    })
})