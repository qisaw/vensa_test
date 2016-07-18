const actionTypes = {
  getMessages_get: 'getMessages/get',
  getMessages_success: 'getMessages/success',
  getMessages_failure: 'getMessages/failure',
  getMessages_filterToggle: 'getMessages/filterToggle',
  getMessages_filterDelete: 'getMessages/filterDelete',
  getMessages_clear: 'getMessages/clear',
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
  getMessages_filterToggle: (colName) => ({
    type: actionTypes.getMessages_filterToggle,
    payload: colName,
  }),
  getMessages_filterDelete: (colName) => ({
    type: actionTypes.getMessages_filterDelete,
    payload: colName,
  }),
  getMessages_clear: () => ({
    type: actionTypes.getMessages_clear,
  }),
};

export {
  actionTypes,
  actions,
};

