import { FETCH_ROOMS, FETCH_ROOMS_ERROR, FETCH_ROOMS_SUCCESS } from './const';

const roomsFetch = () => ({
  type: FETCH_ROOMS,
});

const roomsFetchSuccess = (rooms) => ({
  type: FETCH_ROOMS_SUCCESS,
  payload: rooms,
});

const roomsFetchError = (error) => ({
  type: FETCH_ROOMS_ERROR,
  payload: error,
});

export { roomsFetch, roomsFetchSuccess, roomsFetchError };
