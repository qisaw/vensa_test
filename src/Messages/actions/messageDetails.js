const actionTypes = {
  messageDetails_get: 'getMessagDetails/get',
  messageDetails_success: 'getMessagDetails/success',
  messageDetails_failure: 'getMessagDetails/failure',
  messageDetails_clear: 'getMessageDetails/clear',
};

const actions = {
  messageDetails_get: (id) => ({
    type: actionTypes.messageDetails_get,
    payload: id,
  }),
  messageDetails_success: (messageDetails) => ({
    type: actionTypes.messageDetails_success,
    payload: messageDetails,
  }),
  messageDetails_failure: (err) => ({
    type: actionTypes.messageDetails_failure,
    payload: err,
    error: true,
  }),
  messageDetails_clear: () => ({
    type: actionTypes.messageDetails_clear,
  }),
};

export {
  actionTypes,
  actions,
};

