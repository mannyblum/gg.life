import {
  FETCH_GAMES,
  FETCH_SINGLE_GAME
} from '../actions/types';

const initialState = {
  games: [],
  currentGame: null
};

export default function(state=initialState, action) {
  switch(action.type) {
  case FETCH_GAMES: {
    const result = Object.assign({}, state, {
      games: action.payload
    });

    return result;
  }
  case FETCH_SINGLE_GAME: {
    const result = Object.assign({}, state, {
      currentGame: action.payload.data
    });

    return result;
  }
  default:
    return state;
  }
}
