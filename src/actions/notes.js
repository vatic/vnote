import { callApi } from '../utils/apiUtils';

export const NOTES_REQUEST = 'NOTES_REQUEST';
export const NOTES_SUCCESS = 'NOTES_SUCCESS';
export const NOTES_FAILURE = 'NOTES_FAILURE';

function notesRequest() {
  return {
    type: NOTES_REQUEST
  };
}

// This is a curried function,
// and expects payload as argument to be passed upon API call success.
function notesSuccess() {
  return function (payload) {
    return {
      type: NOTES_SUCCESS,
      list: payload,
    };
  };
}

// This is a curried function,
// and expects error as argument to be passed upon API call failure.
function notesFailure() {
  return function (error) {
    return {
      type: NOTES_FAILURE,
      error
    };
  };
}

const API_ROOT = 'http://localhost:3004';

export function fetchNotes() {
  const url = `${API_ROOT}/notes/`;
  return callApi(url, null, notesRequest(), notesSuccess(), notesFailure());
}

