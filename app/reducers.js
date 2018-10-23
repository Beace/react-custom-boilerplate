/**
 * Combine all reducers in this file and export the combined reducers.
 */

// import { fromJS } from 'immutable';
import { combineReducers } from 'redux';
import { LOCATION_CHANGE } from 'react-router-redux';
import handleActions from 'utils/handleActions';

import globalReducer from 'containers/App/reducer';

/**
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@5
 *
 */

// Initial routing state
const routeInitialState = {
  location: null,
};

/**
 * Merge route into the global application state
 */
export const routeReducer = handleActions(
  {
    [LOCATION_CHANGE](action) {
      this.location = action.payload;
    },
  },
  routeInitialState,
);

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
  return combineReducers({
    route: routeReducer,
    global: globalReducer,
    ...injectedReducers,
  });
}
