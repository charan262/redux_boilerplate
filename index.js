import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './src/store/createstore';
import App from './src/components/App';
import './index.css'
ReactDOM.render(
    <Provider store={store} >
        <App/></Provider>,
    document.getElementById('app')
);
