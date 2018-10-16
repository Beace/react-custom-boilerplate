import { createAction } from 'redux-actions';
import {
  GET_ARTICLES,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_ERROR,
  SET_TODOS,
} from './constants';

export const getArticles = createAction(GET_ARTICLES);
export const getArticlesSuccess = createAction(GET_ARTICLES_SUCCESS);
export const getArticlesError = createAction(GET_ARTICLES_ERROR);
export const setTodos = createAction(SET_TODOS, todos => {
  console.log(todos);
  return todos;
});
