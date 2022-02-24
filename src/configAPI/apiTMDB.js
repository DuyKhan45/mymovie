
import apiConfig from "./apiConfig";


const ApiTMDB = {
    "apiMovieNow": `
        ${apiConfig.baseURL}movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`,
    "apiMoviePopular":`
        ${apiConfig.baseURL}movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`,
    "apiMovieTopRate":`
        ${apiConfig.baseURL}movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`,
    "apiTVPopular": `
        ${apiConfig.baseURL}tv/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`,
    "apiTVTopRate": `
        ${apiConfig.baseURL}tv/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`,
    "apiTVOnTheAir": `
        ${apiConfig.baseURL}tv/on_the_air?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`,
    "apiMovieTab": `
        ${apiConfig.baseURL}trending/all/day?api_key=${process.env.REACT_APP_TMDB_KEY}`,
    "apiTvTab" : `${apiConfig.baseURL}tv/airing_today?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`,
}

export default ApiTMDB 
