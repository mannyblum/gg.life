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
  console.log('action.type', action.type);
  switch(action.type) {
  case FETCH_GAMES: {
    console.log('action.payload.data', action.payload.data);
    return {
      ...state,
      ...action.payload.data
    };
  }
  default:
    return state;
  }
}
