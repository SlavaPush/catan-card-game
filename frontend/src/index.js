import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import { Provider } from 'react-redux'
import store from '../src/Redux/store'
import { BrowserRouter as Router, Route, /* Switch */ } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import {sagaMiddleware} from './Redux/store';
import setupSocket from './sockets/socket';
import sagaWatcher from './Redux/saga/saga-watcher'

ReactDOM.render(
  <Router>
    <Provider store={store}>

      <Route path="/auth/register" component={SignUp} />
      <Route path="/auth/login" component={SignIn} />
      <Route path="/" exact component={App} />

    </Provider>
  </Router>,
  document.getElementById('root'));

  const socket = setupSocket(store.dispatch, "Petya") //@saga_step_1

  sagaMiddleware.run(sagaWatcher, socket)

