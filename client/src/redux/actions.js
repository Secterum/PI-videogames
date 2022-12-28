import axios from 'axios'

export const AXIOS_VIDEOGAMES = "AXIOS_VIDEOGAMES";


export const getVideogames = () => {
    return async function(dispacth){
        const result = await axios.get('http://localhost:3001/videogames')
        console.log (result)
        return dispacth({
            type: AXIOS_VIDEOGAMES,
            payload: result.data
        })

    }
}