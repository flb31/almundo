import { SET_FILTER } from './actions';

export function setFilter(filter) {
  return { type: SET_FILTER, payload: filter };
}
