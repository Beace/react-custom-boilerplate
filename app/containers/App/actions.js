import { createAction } from 'redux-actions';
import { LOAD_REPOS, LOAD_REPOS_SUCCESS, LOAD_REPOS_ERROR } from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export const loadRepos = createAction(LOAD_REPOS);

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export const reposLoaded = createAction(
  LOAD_REPOS_SUCCESS,
  (repos, username) => ({ repos, username }),
);

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export const repoLoadingError = createAction(LOAD_REPOS_ERROR, error => error);
