import {
  FETCH_GAMES
} from '../actions/types';

export default function(state={}, action) {
  switch(action.type) {
  case FETCH_GAMES: {

    const result = Object.assign({}, state, {
      games: action.payload.data
    });

    return result;
  }
  default:
    return state;
  }
}
