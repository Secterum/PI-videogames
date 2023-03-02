import {
  AXIOS_VIDEOGAMES,
  GET_DETAILS,
  CHANGE_PAGE,
  TOTAL_PAGE,
  GET_GENRES,
  ORDERING,
  FILTER_BY_GENRES,
  FILTER_CREATED,
  POST_VIDEOGAMES,
  SEARCH_NAME,
  SEARCH_NAMERESET,
} from "./actions";

const initialState = {
  //generales
  videogames: [], // es la que muto y la que renderiza
  genres: [],
  //paginado
  totalPage: 0,
  currentPage: 1,
  gamesPerPage: 10,
  //details
  details: [],
  //render
  gamesRender: [], //nunca inmuto siempre contiene todos lo juegos
  //ordenamiento
  sortAscending: false,
  sortDescending: false,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case AXIOS_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
        gamesRender: action.payload,
        totalPage: Math.ceil(action.payload.length / state.gamesPerPage),
      };
    case POST_VIDEOGAMES:
      return {
        ...state,
        videogames: [...state.videogames, action.payload.game],
        gamesRender: [...state.gamesRender, action.payload.game],
        totalPage: Math.ceil(
          (state.videogames.length + 1) / state.gamesPerPage
        ),
      };

    case CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };
    case TOTAL_PAGE:
      return {
        ...state,
        totalPage: action.pages,
      };
    case TOTAL_PAGE:
      return {
        ...state,
        details: action.data,
      };
    case GET_DETAILS:
      return {
        ...state,
        details: action.payload,
        idDetails: action.idDetails,
      };
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case ORDERING:
      let sortedArray;
      if (action.payload === "upward") {
        sortedArray = state.videogames.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (b.name > a.name) {
            return -1;
          }
          return 0;
        });
      }
      if (action.payload === "descendant") {
        sortedArray = state.videogames.sort(function (a, b) {
          if (a.name > b.name) {
            return -1;
          }
          if (b.name > a.name) {
            return 1;
          }
          return 0;
        });
      }
      if (action.payload === "HighRating") {
        sortedArray = state.videogames.sort(function (a, b) {
          if (a.rating > b.rating) {
            return -1;
          }
          if (b.rating > a.rating) {
            return 1;
          }
          return 0;
        });
      }
      if (action.payload === "LowRating") {
        sortedArray = state.videogames.sort(function (a, b) {
          if (a.rating > b.rating) {
            return 1;
          }
          if (b.rating > a.rating) {
            return -1;
          }
          return 0;
        });
      }
      if (action.payload === "normal") {
        sortedArray = state.gamesRender;
      }
      return {
        ...state,
        videogames: [...sortedArray],
      };

    case SEARCH_NAME:
      return {
        ...state,
        videogames: action.payload,
        totalPage: Math.ceil(action.payload.length / state.gamesPerPage),
        currentPage: 1,
      };
    case SEARCH_NAMERESET:
      return {
        ...state,
        totalPage: Math.ceil(state.gamesRender.length / state.gamesPerPage),
        currentPage: 1,
        videogames: state.gamesRender,
      };

    case "CLEAR_DETAILS":
      return {
        ...state,
        details: [],
      };

    case FILTER_BY_GENRES:
      const AllVideogames = state.gamesRender;
      const statusFiltered =
        action.payload === "All"
          ? AllVideogames
          : AllVideogames.filter((el) => el.genres.includes(action.payload));

      return {
        ...state,
        videogames: statusFiltered.length
          ? statusFiltered
          : [`${action.payload} AAA`],
        totalPage: Math.ceil(statusFiltered.length / state.gamesPerPage),
        currentPage: 1,
      };

    case FILTER_CREATED:
      let AllVideogames2 = state.gamesRender;
      let result;

      if (action.payload === "Created") {
        result = AllVideogames2.filter((el) => el.id.length > 1);
      }
      if (action.payload === "All") {
        result = AllVideogames2;
      }
      if (action.payload === "Api") {
        result = AllVideogames2.filter((el) => typeof el.id === "number");
      }

      return {
        ...state,
        videogames: result,
        totalPage: Math.ceil(result.length / state.gamesPerPage),
        currentPage: 1,
      };

    default:
      return state;
  }
}
