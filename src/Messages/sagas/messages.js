import { takeEvery, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import superagent from 'superagent';
import { actionTypes, actions } from '../actions/messages.js';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function api() {
  return superagent
    .get('/message')
    .set('Accept', 'application/json')
    .then(response => response.body);
}

function* saga() {
  try {
    yield call(delay, 1000);
    const messages = yield call(api);
    yield put(actions.getMessages_success(messages));
  } catch (error) {
    yield put(actions.getMessages_failure(error));
  }
}

/**
 * Start this saga if you'd prefer to process every action
 */
function* takeEverySaga() {
  yield* takeEvery(actionTypes.getMessages_get, saga);
}

/**
 * Start this saga if you'd prefer to process only the latest action
 */
function* takeLatestSaga() {
  yield* takeLatest(actionTypes.getMessages_get, saga);
}

export {
  takeEverySaga,
  takeLatestSaga,
};

