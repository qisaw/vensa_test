import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import ScrollPane from './components/ScrollPane';
import Messages from './Messages/components/Messages';

import configureStore from './store/configureStore';
import App from './App';

const My404Component = () => (
  <div>
    <h1> Page not implemented </h1>
  </div>
);

// @TODO import messages from messages/index

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Messages} />
    <Route path="*" component={My404Component} />
  </Route>
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('react')
);
