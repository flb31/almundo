import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const defaultState = {
  hotels: []
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
