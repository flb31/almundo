import initialState from './initialState';
import * as actionTypes from 'Redux/actions/hotels/actions';

const hotels = (state = initialState, action) => {
    switch (action.type) {
       
        case actionTypes.API_FETCH:
            console.log(action.type, state);
            return {
                ...state,
                fetching: true,
                mounting: false,
                working: true,
            }

        case actionTypes.API_MOUNT:
            console.log(action.type, state);
            return {
                ...state,
                fetching: false,
                mounting: true,
                working: true,
                ...action.payload
            }

        case actionTypes.API_STANDBY:
            console.log(action.type, state);
            return {
                ...state,
                fetching: false,
                mounting: false,
                working: false,
                ...action.payload
            }
        default:
            return state;
    }
};

export default hotels;
