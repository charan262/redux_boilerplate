import {combineReducers} from  'redux';
import Data from './MockAPI';
const allReducers=combineReducers({
    items:Data
})
export default allReducers;