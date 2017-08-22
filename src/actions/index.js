import axios from 'axios';
import {
  FETCH_GAMES,
  FETCH_SINGLE_GAME,
  SELECT_GAME
} from './types';

const CONFIG = {
  headers: {
    'user-key': 'bf8104148a7a0dc5e1fe492ab6be34f8',
    'Accept': 'application/json'
  }
};

export const fetchGames = () => {
  let gamesWithFullData = [];
  const request = axios.get('/games/', CONFIG)
    .then(function(response) {

      let promises = [];
      let listOfGames = response.data;

      for (let i = 0; i < response.data.length; i++) {
        promises.push(axios.get(`/games/${listOfGames[i].id}`, CONFIG));
      }

      const allRequest = axios.all(promises)
        .then(function(arr) {
          gamesWithFullData = arr;

          return gamesWithFullData;
        });

      return allRequest;

    })
    .catch(function(error) {
    });

  return {
    type: FETCH_GAMES,
    payload: request
  };
};

export const fetchSingleGame = (id) => {
  const request = axios.get(`/games/${id}`, CONFIG);

  return {
    type: FETCH_SINGLE_GAME,
    payload: request
  };
};

export const selectGame = (game) => {
  console.log('selectGame');
  return {
    type: SELECT_GAME,
    game
  };
};
