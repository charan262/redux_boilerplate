
var jsdom = require('jsdom').jsdom;
var exposedProperties = ['window', 'navigator', 'document'];
import _$ from 'jquery';
import chai from 'chai'
import chaiJquery from 'chai-jquery'
global.document = jsdom('');
global.window = document.defaultView;
const $ = _$(window);
chaiJquery(chai, chai.util, $);
Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});

global.navigator = {
    userAgent: 'node.js'
};
