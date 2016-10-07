import { callApi } from '../utils/apiUtils';

export const NOTES_REQUEST = 'REPOS_REQUEST';
export const NOTES_SUCCESS = 'REPOS_SUCCESS';
export const NOTES_FAILURE = 'REPOS_FAILURE';

export function notesRequest(page) {
  return {
    type: NOTES_REQUEST,
    page,
  };
}
