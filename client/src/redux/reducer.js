import { AXIOS_VIDEOGAMES } from "./actions";

const initialState = {
    videogames: []
}

export function reducer(state = initialState, action){

    switch (action.type) {
        case AXIOS_VIDEOGAMES:
            return {
                ...state,
                videogames: action.payload
            }
                
        default: return state
    }

}