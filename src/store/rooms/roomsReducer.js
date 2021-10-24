import { FETCH_ROOMS, FETCH_ROOMS_ERROR, FETCH_ROOMS_SUCCESS } from './const';

const initialState = {
  rooms: null,
  isRoomsLoading: false,
  roomsError: null,
};

export const roomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROOMS:
      return {
        ...state,
        isRoomsLoading: true,
        rooms: null,
        roomsError: null,
      };
    case FETCH_ROOMS_SUCCESS:
      return {
        ...state,
        isRoomsLoading: false,
        rooms: action.payload,
        roomsError: null,
      };
    case FETCH_ROOMS_ERROR:
      return {
        ...state,
        isRoomsLoading: false,
        rooms: null,
        roomsError: action.payload,
      };
    default:
      return state;
  }
};
