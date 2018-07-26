import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

import initialHotels from './reducers/hotels/initialState';

const defaultState = {
  hotels: initialHotels,
  filters: {}
};

const store = createStore(
  reducer,
  defaultState,
  applyMiddleware(thunk),
  compose(
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )
);

export default store;
