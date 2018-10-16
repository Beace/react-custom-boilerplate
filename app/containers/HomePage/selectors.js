/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = state => state.home;

const makeSelectArticle = () =>
  createSelector(selectHome, homeState => homeState.todos);

export { selectHome, makeSelectArticle };
