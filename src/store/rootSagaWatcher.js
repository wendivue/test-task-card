import { all } from 'redux-saga/effects';

import { roomsWatcher } from './rooms/roomsSaga';

export function* rootWatcher() {
  yield all([roomsWatcher()]);
}
