import axios from 'axios';
import {
  FETCH_GAMES,
  FETCH_SINGLE_GAME
} from './types';

const CONFIG = {
  headers: {
    'user-key': 'bf8104148a7a0dc5e1fe492ab6be34f8',
    'Accept': 'application/json'
  }
};

export const fetchGames = () => {
  const request = axios.get('/games/', CONFIG);

  return {
    type: FETCH_GAMES,
    payload: request
  };
};

export const fetchSingleGame = (id) => {
  const request = axios.get(`/games/${id}`);

  return {
    type: FETCH_SINGLE_GAME,
    payload: request
  };
};
