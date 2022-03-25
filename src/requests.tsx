const API_KEY = "1e2edb1a12fb91d35d69ac81f2c29b00";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,  
    fetchMovieDetails: (id: number) => `/movie/${id}?api_key=${API_KEY}&language=en-US`, 
    fetchTopRatedTV: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchPopularTV: `/tv/popular?api_key=${API_KEY}&language=en-US`,
    fetchOnAirTV: `/tv/on_the_air?api_key=${API_KEY}&language=en-US`,
    fetchAiringTodayTV: `/tv/airing_today?api_key=${API_KEY}&language=en-US`,
    fetchTVDetails: (id: number) => `/tv/${id}?api_key=${API_KEY}&language=en-US`,
       
}
export default requests;
