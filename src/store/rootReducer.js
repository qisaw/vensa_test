import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import messagesReducers from '../Messages/reducers/message';
import messageDetailReducers from '../Messages/reducers/messageDetail';

export default combineReducers({
  routing,
  messagesReducers,
  messageDetailReducers,
});
