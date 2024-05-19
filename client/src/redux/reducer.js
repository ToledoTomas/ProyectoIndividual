const initialState = {
  videogames: [],
  allVideogames: [],
  genres: [],
  detail: {},
  platforms: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_VIDEOGAMES':
      return {
        ...state,
        videogames: action.payload,
      };

    case 'GET_GENRES':
      return {
        ...state,
        genres: action.payload,
      };

    case 'GET_PLATFORMS':
      return {
        ...state,
        platforms: action.payload,
      };
    case 'POST_VIDEOGAME':
      return {
        ...state,
      };
    case 'GET_DETAILS':
      return {
        ...state,
        detail: action.payload,
      };
    case 'FILTER_BY_GENRE':
      const allGames = state.videogames;
      const genresFiltered =
        action.payload === 'All'
          ? state.allVideogames
          : allGames.filter(el => {
              return el.genres.find(el => {
                return el.name === action.payload;
              });
            });
      return {
        ...state,
        videogames: genresFiltered,
      };

    case 'ORDER_BY_NAME':
      let sortName =
        action.payload === 'Asc'
          ? state.videogames.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (a.name < b.name) {
                return -1;
              }
              return 0;
            })
          : state.videogames.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (a.name < b.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        videogames: sortName,
      };

    case 'ORDER_BY_RATING':
      let sortRating =
        action.payload === 'Low'
          ? state.videogames.sort(function (a, b) {
              if (a.rating > b.rating) {
                return 1;
              }
              if (a.rating < b.rating) {
                return -1;
              }
              return 0;
            })
          : state.videogames.sort(function (a, b) {
              if (a.rating > b.rating) {
                return -1;
              }
              if (a.rating < b.rating) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        videogames: sortRating,
      };

    case 'FILTER_CREATED':
      const filterCreated =
        action.payload === 'Created'
          ? state.allVideogames.filter(el => el.createdInDb)
          : state.allVideogames.filter(el => !el.createdInDb);
      return {
        ...state,
        videogames:
          action.payload === 'All' ? state.allVideogames : filterCreated,
      };

    default:
      return state;
  }
}

export default rootReducer;
