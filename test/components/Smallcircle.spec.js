import React from 'react';
import Smallcircle from '../../src/components/Smallcircle';
describe('Testing the App Component',()=> {
    let component;
    beforeEach(() => {
        component = shallow(<Smallcircle/>);
    })
    it('check component', () => {
        expect(component).to.exist;
    })
})