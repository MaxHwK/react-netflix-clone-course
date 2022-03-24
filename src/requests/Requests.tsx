const API_KEY = process.env.REACT_APP_API_KEY;

const languages = "en-US";

const Requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=${languages}&page=1`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=${languages}&page=1`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=${languages}&page=1`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=${languages}&page=1`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=${languages}&page=1`,
};

export default Requests;