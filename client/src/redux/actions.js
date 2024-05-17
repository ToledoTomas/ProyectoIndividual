import axios from 'axios';


export function getVideogames() {
    return async function(dispatch){
        const response = await axios.get("http://localhost:3001/videogames");
        return dispatch({
            type:'GET_VIDEOGAMES',
            payload: response.data
        })
    };
}

export function getGenres(){
    return async function (dispatch){
        const response = await axios.get('http://localhost:3001/genres');
        return dispatch({
            type: 'GET_GENRES',
            payload: response.data
        })
    }
}

export function getPlatforms(){
    return async function(dispatch){
        const response = await axios.get('http://localhost:3001/platforms');
        return dispatch({
            type: 'GET_PLATFORMS',
            payload: response.data
        })
    }
}

export function postVideogame(payload){
    return async function(dispatch){
        const response = await axios.post('http://localhost:3001/videogames', payload);
        return response;
    }
}