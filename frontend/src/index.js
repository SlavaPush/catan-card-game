import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import { Provider } from 'react-redux'
import store from '../src/Redux/store'
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import Room from './components/Room';
import {sagaMiddleware} from './Redux/store';
import setupSocket from './sockets/socket';
import sagaWatcher from './Redux/saga/saga-watcher'




  const socket = setupSocket(store.dispatch, () => {
      ReactDOM.render(
        <Router>
          <Provider store={store}>
            <Switch>
              <Route path="/game/:id/:player">
                <App />
              </Route>
              <Route path="/">
                <Room/>
              </Route>
            </Switch>
          </Provider>
        </Router>,
        document.getElementById('root'));
  })

  sagaMiddleware.run(sagaWatcher, socket)

