/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import handleActions from 'utils/handleActions';

import { LOAD_REPOS_SUCCESS, LOAD_REPOS, LOAD_REPOS_ERROR } from './constants';

// The initial state of the App
const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
};

export default handleActions(
  {
    [LOAD_REPOS]() {
      this.loading = true;
      this.error = false;
      this.userData.repositories = false;
    },
    [LOAD_REPOS_SUCCESS](action) {
      this.loading = action.repos;
      this.error = false;
      this.currentUser = action.username;
    },
    [LOAD_REPOS_ERROR](action) {
      this.loading = false;
      this.error = action.error;
    },
  },
  initialState,
);
