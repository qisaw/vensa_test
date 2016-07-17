import { List, OrderedMap } from 'immutable';
import { actionTypes as t } from '../actions/messages';
// define initial state shape
const initObj = {
  isFetching: false,
  messages: [],
  error: null,
};

// update is not a side effecting method. It creates a new instance of the object
function messages(state = initObj, action) {
  switch (action.type) {
    case t.getMessages_get: {
      return {
        ...state,
        isFetching: true,
      }
    }
    case t.getMessages_success: {
      return {
        ...state,
        isFetching: false,
        messages: action.payload,
        error: null,
      }
    }
    case t.getMessages_failure: {
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    }
    default: {
      return state;
    }
  }
}


export default messages;

