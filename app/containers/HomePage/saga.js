import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_ARTICLES } from 'containers/HomePage/constants';

import request from 'utils/request';

import { getArticlesSuccess, getArticlesError } from './actions';

function* getArticles() {
  const requestURL = 'https://beace.tech/api/articles';

  try {
    // Call our request helper (see 'utils/request')
    const result = yield call(request, requestURL);
    yield put(getArticlesSuccess(result.data));
  } catch (err) {
    yield put(getArticlesError(err));
  }
}

function* rootSaga() {
  yield [takeLatest(GET_ARTICLES, getArticles)];
}

/**
 * Root saga manages watcher lifecycle
 */
export default rootSaga;
