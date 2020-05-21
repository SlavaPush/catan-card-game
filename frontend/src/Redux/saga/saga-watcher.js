import { takeEvery, all } from 'redux-saga/effects';

function* worker1(socket,action) {
  yield socket.send(JSON.stringify(action));
}
function* sagaWatcher1(socket) {
  yield takeEvery('SAGA_STATE_TRANSFER', worker1,socket);
}

function* sagaWatcher2(socket) {
  yield takeEvery('STEP_CHANGE', function* () {
    yield socket.send(JSON.stringify({
      type: 'STEP_CHANGE'
    }));
  });
}

function* sagaWatcher3(socket) {
  yield takeEvery('SAGA_SEARCH_ROOM_IN_DB', function* (action) {
    yield socket.send(JSON.stringify(action));
  });
}

function* sagaWatcherWinner(socket) {
  yield takeEvery('SAGA_WINNER_NOW', function* (action) {
    yield socket.send(JSON.stringify(action));
  });
}
function* sagaRemoveOpponentCardWatcher(socket) {
  yield takeEvery('SAGA_REMOVE_OPPONENT_CARD', function* (action) {
    yield socket.send(JSON.stringify(action));
  });
}
function* sagaCityLogicWatcher(socket) {
  yield takeEvery('SAGA_CITY_LOGIC', function* (action) {
    yield socket.send(JSON.stringify(action));
  });
}

function* sagaWatcherMessage(socket) {
  yield takeEvery('ADD_MESSAGE', function* (action) {
    yield socket.send(JSON.stringify(action));
  });
}

export default function* (socket) {
  yield all([
    sagaWatcher1(socket),
    sagaWatcher2(socket),
    sagaWatcher3(socket),
    sagaWatcherWinner(socket),
    sagaRemoveOpponentCardWatcher(socket),
    sagaCityLogicWatcher(socket),
    sagaWatcherMessage(socket)
  ]);
}
