import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducers as messagesReducers } from '../Messages/reducer';

export default combineReducers({
  routing,
  messagesReducers,
});
