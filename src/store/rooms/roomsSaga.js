import { put, takeEvery } from 'redux-saga/effects';

import { Api } from 'Src/services/api/Api';

import { FETCH_ROOMS } from './const';
import { roomsFetchSuccess, roomsFetchError } from './roomsActions';

function* roomsFetchWorker() {
  const { rooms } = new Api();

  try {
    let json = yield rooms.fetchRooms();
    json = json.response;
    yield put(roomsFetchSuccess(json));
  } catch (error) {
    yield put(roomsFetchError(error));
  }
}

export function* roomsWatcher() {
  yield takeEvery(FETCH_ROOMS, roomsFetchWorker);
}
