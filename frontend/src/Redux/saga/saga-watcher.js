import { takeEvery } from 'redux-saga/effects';


function* sagaWatcher(socket) {
  yield takeEvery('SAGA_STATE_TRANSFER', (action) => {
    console.log(action,'SAGA_STATE_TRANSFERSAGA_STATE_TRANSFERSAGA_STATE_TRANSFERSAGA_STATE_TRANSFER')
    console.log(socket, 'paramsparamsparamsparamsparamsparamsparams')
    socket.send(JSON.stringify({action}));
  });
}

export default sagaWatcher;
