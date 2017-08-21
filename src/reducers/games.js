import {
  FETCH_GAMES
} from '../actions/types';

const initialState = {
  games: [{
    id: 1
  },{
    id: 1
  },{
    id: 1
  },{
    id: 1
  },{
    id: 1
  }]
};

export default function(state=initialState, action) {
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
