import React from 'react';
import App from '../../src/components/App';
describe('Testing the App Component',()=> {
    let component;
    beforeEach(() => {
        component = shallow(<App/>);
    })
    it('check component', () => {
        expect(component).to.exist;
    })
    it('check for className ',()=>{
        expect(component).to.have.class('rectangle');
    })
})