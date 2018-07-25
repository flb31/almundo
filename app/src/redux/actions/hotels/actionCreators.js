import axios from 'axios';
import * as actionTypes from './actions';

export function listHotels(apiData) {
  return { type: actionTypes.API_MOUNT, payload: apiData };
}

export function getListHotels() {
    return (dispatch) => {
        dispatch({
            type: actionTypes.API_FETCH
        });


        axios
            .get(`${process.env.REACT_APP_API_URL}/hotels`)
            .then(response => {

                dispatch(
                    listHotels({
                            items: response.data,
                            status: response.status,
                    })
                );

                dispatch({
                    type: actionTypes.API_STANDBY,
                });
            })
            .catch(error => {
                dispatch({
                    type: actionTypes.API_STANDBY,
                    payload: {
                        error: error.message,
                        items: [],
                    }
                });

            });
    };
}
