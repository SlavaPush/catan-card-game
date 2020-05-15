import React from 'react';
import ReactDOM from 'react-dom';
import ButtonAppBar from "./component/app-bar";

import {Provider} from 'react-redux'
import store from '../src/Redux/store'


ReactDOM.render(
  <Provider store={store}>
   <ButtonAppBar />
  </Provider>,
document.getElementById('root')
);
