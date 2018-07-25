import axios from 'axios';

import { LIST_HOTELS, FILTER_HOTELS } from './actions';

export function listHotels(apiData) {
  return { type: LIST_HOTELS, payload: apiData };
}

export function getListHotels() {
    return (dispatch) => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/hotels`)
        .then(response => {
            dispatch(listHotels(response.data));
        })
        .catch(error => {
            console.error('axios error', error);
        });
    };
}
