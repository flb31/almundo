import { combineReducers } from 'redux';
import { SET_FILTER } from 'Redux/actions/filters/actions';

const filters = (state = {}, action) => {
    switch (action.type) {
        case SET_FILTER: {
         
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }
};

export default filters;
