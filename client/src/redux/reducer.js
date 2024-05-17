
const initialState = {
    videogames : [],
    allVideogames: [],
    genres: [],
    platforms: []
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case 'GET_VIDEOGAMES':
            return { 
                ...state,
                videogames: action.payload
            };

        case 'GET_GENRES': 
            return{
                ...state,
                genres: action.payload
            };

        case 'GET_PLATFORMS':
            return{
                ...state,
                platforms: action.payload
            }
        case 'POST_VIDEOGAME':
            return{
                ...state,
            }
        
        default:
             return state;
    }
}


export default rootReducer;