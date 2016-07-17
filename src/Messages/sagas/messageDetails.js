import { takeEvery, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import superagent from 'superagent';
import { actionTypes, actions } from '../actions/messageDetails';

function api(id) {
  return superagent
    .get(`/message/${id}`)
    .set('Accept', 'application/json')
    .then(response => response.body)
}

function* saga(action) {
  try {
    const messages = yield call(api, action.payload);
    yield put(actions.messageDetails_success(messages));
  } catch (error) {
    console.log(error);
    yield put(actions.messageDetails_failure(error));
  }
}

/**
 * Start this saga if you'd prefer to process every action
 */
function* takeEverySaga() {
  yield* takeEvery(actionTypes.messageDetails_get, saga);
}

/**
 * Start this saga if you'd prefer to process only the latest action
 */
function* takeLatestSaga() {
  yield* takeLatest(actionTypes.messageDetails_get, saga);
}

export {
  takeEverySaga,
  takeLatestSaga,
};

