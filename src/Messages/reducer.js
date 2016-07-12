import { List, OrderedMap } from 'immutable';
import { actionTypes as t } from './reducer.js';
// define initial state shape
const initObj = {
  isFetching: false,
  messages: new List(),
  error: null,
};
const messagesMap = new OrderedMap(initObj);
const initState = messagesMap;

// update is not a side effecting method. It creates a new instance of the object
function messages(state = initState, action) {
  switch (action.type) {
    case t.getMessages_get: {
      return state.update('isFetching', true);
    }
    case t.getMessages_success: {
      return state.update('messages', action.payload).update('error', null);
    }
    case t.getMessages_failure: {
      return state.update('error', action.payload);
    }
    default: {
      return state;
    }
  }
}

export default messages;
