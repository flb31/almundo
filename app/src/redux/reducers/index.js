import { combineReducers } from 'redux';
import hotels from './hotels';
import filters from './filters';

const rootReducer = combineReducers({
    hotels,
    filters
});

export default rootReducer;
