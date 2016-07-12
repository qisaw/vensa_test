import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store/configureStore';
import App from './App';

// @TODO import messages from messages/index
const Messages = () => <div> messsages </div>;
const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Messages} />
  </Route>
);
ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('react')
);
