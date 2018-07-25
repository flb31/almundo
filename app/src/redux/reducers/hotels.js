import { LIST_HOTELS, FILTER_HOTELS } from '../actions/hotels/actions';

const hotels = (state = [], action) => {
    switch (action.type) {
        case LIST_HOTELS: {
            return Object.assign({}, state, action.payload);
        }
        case FILTER_HOTELS: {
            return Object.assign({}, state, action.payload);
        }
        default:
            return state;
    }
};

export default hotels;
