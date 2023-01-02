import { AXIOS_VIDEOGAMES } from "./actions";

const gamesPerPage = 15

const initialState = {
    videogames: [],
    totalPage: 0, 
    landingPage: 1,
}

export function reducer(state = initialState, action){
    switch (action.type) {
        case AXIOS_VIDEOGAMES:
            return {
                ...state,
                videogames: action.payload,
                totalPage: Math.ceil(action.payload.length)
            }
                
        default: return state
    }

}