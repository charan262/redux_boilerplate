import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import allReducers from '.';
const store=createStore(allReducers);