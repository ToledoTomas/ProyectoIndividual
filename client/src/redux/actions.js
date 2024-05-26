import axios from 'axios';

export function getVideogames() {
  return async function (dispatch) {
    const response = await axios.get('http://localhost:3001/api/videogames');
    return dispatch({
      type: 'GET_VIDEOGAMES',
      payload: response.data,
    });
  };
}

export function getVideogameName(name) {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/videogames?name=` + name,
      );
      return dispatch({
        type: 'GET_VIDEOGAME_NAME',
        payload: response.data,
      });
    } catch (error) {
      alert('Game not found');
    }
  };
}

export function getGenres() {
  return async function (dispatch) {
    const response = await axios.get('http://localhost:3001/api/genres');
    return dispatch({
      type: 'GET_GENRES',
      payload: response.data,
    });
  };
}

export function getPlatforms() {
  return async function (dispatch) {
    const response = await axios.get('http://localhost:3001/api/platforms');
    return dispatch({
      type: 'GET_PLATFORMS',
      payload: response.data,
    });
  };
}

export function postVideogame(payload) {
  return async function (dispatch) {
    const response = await axios.post(
      'http://localhost:3001/api/videogames',
      payload,
    );
    return response;
  };
}

export function filterVideogamesByGenre(payload) {
  return {
    type: 'FILTER_BY_GENRE',
    payload,
  };
}

export function filterCreated(payload) {
  return {
    type: 'FILTER_CREATED',
    payload,
  };
}

export function orderByName(payload) {
  return {
    type: 'ORDER_BY_NAME',
    payload,
  };
}

export function orderByRating(payload) {
  return {
    type: 'ORDER_BY_RATING',
    payload,
  };
}

export function getDetails(id) {
  if (id) {
    return async function (dispatch) {
      try {
        const detail = await axios.get(
          `http://localhost:3001/api/videogames/${id}`,
        );
        dispatch({
          type: 'GET_DETAILS',
          payload: detail.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }
  return {
    type: 'RESET',
  };
}
