import {
    NOTES_REQUEST,
    NOTES_SUCCESS,
    NOTES_FAILURE } from '../actions/notes';



export default function notes(state = {
  isFetching: false,
  list: [],
  error: null,
}, action) {
  switch (action.type) {
    case NOTES_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case NOTES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        list: action.list,
        error: null,
      });
    case NOTES_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error,
      });
    default:
      return state;
  }
}

