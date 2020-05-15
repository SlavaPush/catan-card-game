import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from '../src/Redux/store'

ReactDOM.render(
  <Provider store={store}>
  <h1>Hello World!</h1>
</Provider>
  // <React.StrictMode>
  //   <h1>Hello World!</h1>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);
