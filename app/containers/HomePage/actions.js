import { createAction } from 'redux-actions';
import { SET_TODOS } from './constants';

export const setTodos = createAction(SET_TODOS, todo => todo);
