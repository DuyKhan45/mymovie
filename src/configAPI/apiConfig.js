const apiConfig = {
    Key_API: process.env.REACT_APP_TMDB_KEY,
    baseURL: "https://api.themoviedb.org/3/",
    videoMovie: (id) => `https://www.2embed.ru/embed/tmdb/movie?id=${id}`,
    tvVideo: (id, season, episode) =>
        `https://www.2embed.ru/embed/tmdb/tv?id=${id}&s=${season}&e=${episode}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
    w200Image: (imgPath) => `https://image.tmdb.org/t/p/w200/${imgPath}`,
}

export default apiConfig
