import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import store from './store';

import './index.scss';

import { Home } from './routes/home';
import { TodoList } from './routes/todo';

ReactDOM.render(<Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/todo" component={TodoList} />
    </Switch>
  </BrowserRouter>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
