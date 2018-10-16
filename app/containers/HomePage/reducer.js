import handleActions from 'utils/handleActions';

import { SET_TODOS } from './constants';

// The initial state of the App
export const initialState = {
  article: {
    loading: false,
    data: [],
    error: false,
  },
  todos: [],
};

export default handleActions(
  {
    [SET_TODOS](action) {
      this.todos.push(action.payload);
    },
  },
  initialState,
);
