/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = state => state.home;

const makeSelectTodos = () =>
  createSelector(selectHome, homeState => homeState.todos);

export { selectHome, makeSelectTodos };
