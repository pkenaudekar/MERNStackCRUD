import {
  FETCH_TOPICS,
  ADD_TOPICS,
  DELETE_TOPICS,
  UPDATE_TOPICS,
} from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_TOPICS:
      return action.payload;
    case ADD_TOPICS:
      return action.payload;
    case DELETE_TOPICS:
      return action.payload;
    case UPDATE_TOPICS:
      return action.payload;
    default:
      return state;
  }
}
