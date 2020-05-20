import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import { Provider } from 'react-redux'
import store from '../src/Redux/store'
import { BrowserRouter as Router, Route, /* Switch */ } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Room from './components/Room';
import {sagaMiddleware} from './Redux/store';
import setupSocket from './sockets/socket';
import sagaWatcher from './Redux/saga/saga-watcher'




  const socket = setupSocket(store.dispatch, () => {
      ReactDOM.render(
        <Router>
          <Provider store={store}>
      
            <Route path="/auth/register" component={SignUp} />
            <Route path="/auth/login" component={SignIn} />
            <Route path="/" exact component={Room} />
            <Route path="/game/:id/:player" component={App} />
      
          </Provider>
        </Router>,
        document.getElementById('root'));
  })

  sagaMiddleware.run(sagaWatcher, socket)

