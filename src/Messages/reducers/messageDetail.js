import { actionTypes as t } from '../actions/messageDetails';

const initMessage = {
  isFetching: false,
  message: null,
  error: null,
};

function messageDetail(state=initMessage, action) {
  switch (action.type) {
    case t.messageDetails_get: {
      return {
        ...state,
        isFetching: true,
      }
    }
    case t.messageDetails_success: {
      return {
        ...state,
        isFetching: false,
        message: action.payload,
        error: null,
      }
    }
    case t.messageDetails_failure: {
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    }
    case t.messageDetails_clear: {
      return {
        ...state,
        isFetching: false,
        error: null,
        message: null,
      }
    }
    default: {
      return state;
    }
  }
};

export default messageDetail;
