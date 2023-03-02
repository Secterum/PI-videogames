import axios from "axios";

export const AXIOS_VIDEOGAMES = "AXIOS_VIDEOGAMES";
export const CHANGE_PAGE = "CHANGE_PAGE";
export const TOTAL_PAGE = "TOTAL_PAGE";
export const GET_DETAILS = "GET_DETAILS";
export const CREATE_GAMES = "CREATE_GAMES";
export const GET_GENRES = "GET_GENRES";
export const ORDERING = "ORDERING";
export const FILTER_BY_GENRES = "FILTER_BY_GENRES"
export const FILTER_CREATED = "FILTER_CREATED"
export const POST_VIDEOGAMES = "POST_VIDEOGAMES"
export const SEARCH_NAME = "SEARCH_NAME"
export const SEARCH_NAMERESET = "SEARCH_NAMERESET"
export const CLEAR_DETAILS = "CLEAR_DETAILS"

export const createGames = () => {};

export const getVideogames = () => {
  return async function (dispacth) {
    const result = await axios.get("http://localhost:3001/videogames");

    return dispacth({
      type: AXIOS_VIDEOGAMES,
      payload: result.data,
    });
  };
};

export const searchName = (name) => {
  return async function (dispacth) {
  const result = await axios.get(`http://localhost:3001/videogames?name=${name}`)
  return dispacth({
    type: SEARCH_NAME,
    payload: result.data
  })
  }
}

  
 export const searchNameReset = () => {
  return {
    type: SEARCH_NAMERESET,
  };
};



export const postVideogame = (data) => {
  return async function (dispacth) {
    const result = await axios.post("http://localhost:3001/videogames", data);

    return dispacth({
      type: POST_VIDEOGAMES,
      payload: result.data,
    });
  };
};




export const getGenres = () => {
  return async function (dispacth) {
    const genres = await axios.get("http://localhost:3001/genres");
    return dispacth({
      type: GET_GENRES,
      payload: genres.data,
    });
  };
};

export const changePage = (page) => {
  return {
    type: CHANGE_PAGE,
    page,
  };
};
export const totalPage = (pages) => {
  return {
    type: TOTAL_PAGE,
    pages,
  };
};

export function getDetails(id) {
  return async function (dispatch) {
    try {
      const result = await axios.get(`http://localhost:3001/videogame/${id}`);
      return dispatch({
        type: GET_DETAILS,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const ordening = (payload) => {
  return {
    type: ORDERING,
    payload,
  };
};

export const filterByGenres = (payload) => {
return {
  type: FILTER_BY_GENRES,
  payload,
}
}
export const filterCreated = (payload) => {
  return {
    type: FILTER_CREATED,
    payload,
  }}

export const clearDetails = () => {
  return {
    type: CLEAR_DETAILS,
  }}





