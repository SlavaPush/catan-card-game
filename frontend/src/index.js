import React from 'react';
import ReactDOM from 'react-dom';
import ButtonAppBar from "./App";

import {Provider} from 'react-redux'
import store from '../src/Redux/store'


ReactDOM.render(
  <Provider store={store}>
   <ButtonAppBar />
  </Provider>,
document.getElementById('root')
);
