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

export {
  actionTypes,
  actions
}

