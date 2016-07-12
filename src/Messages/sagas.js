import { takeEvery, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

function api() {
  return new Promise((resolve, reject) => {
    // @todo resolve properly
    const response = {
      todos: [
        {
          text: 'Use Redux',
          completed: false,
        },
        {
          text: 'Use Saga',
          completed: false,
        },
      ],
    };
    resolve(response);
  });
}

const actionTypes = {
  getMessages_get: 'getMessages/get',
  getMessages_success: 'getMessages/success',
  getMessages_failure: 'getMessages/failure',
};

const actions = {
  getMessages_get: () => ({
    type: actionTypes.getMessages_get,
  }),
  getMessages_success: (messages) => ({
    type: actionTypes.getMessages_success,
    payload: messages,
  }),
  getMessages_failure: (err) => ({
    type: actionTypes.getMessages_failure,
    payload: err,
    error: true,
  }),
};

function* saga(action) {
  try {
    const { response } = yield call(api);
    yield put(actions.getMessages_success(response));
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
  actions,
  actionTypes,
  takeEverySaga,
  takeLatestSaga,
};

