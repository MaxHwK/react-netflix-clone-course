const API_KEY = process.env.REACT_APP_API_KEY;

const languages = "en-US";

const Requests = {
    fetchTrendingMovies: `/trending/all/week?api_key=${API_KEY}&language=${languages}&page=1`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=${languages}&page=1`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=${languages}&page=1`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=${languages}&page=1`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=${languages}&page=1`,

    fetchTrendingSeries: `/tv/popular?api_key=${API_KEY}&language=${languages}&page=1`,
    fetchTopRatedSeries: `/tv/top_rated?api_key=${API_KEY}&language=${languages}&page=1`,
    fetchAnimeSeries: `/discover/tv?api_key=${API_KEY}&with_genres=16&sort_by=popularity.desce&language=${languages}&page=1`,
    fetchRomanticSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10749&sort_by=popularity.desce&language=${languages}&page=1`,
};

export default Requests;