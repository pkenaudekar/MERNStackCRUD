import {
  FETCH_COURSES,
  ADD_COURSES,
  DELETE_COURSES,
  UPDATE_COURSES,
} from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_COURSES:
      return action.payload;
    case ADD_COURSES:
      return action.payload;
    case DELETE_COURSES:
      return action.payload;
    case UPDATE_COURSES:
      return action.payload;
    default:
      return state;
  }
}
