import Requests from '../../requests/Requests';
import Row from './Row';

const MoviesCategories = () => {
    return (
        <div className="row_container">
            <Row title="Trending Now" fetchUrl={Requests.fetchTrendingMovies} displayed />
            <Row title="Top Rated" fetchUrl={Requests.fetchTopRatedMovies} displayed />
            <Row title="Netflix Originals" fetchUrl={Requests.fetchNetflixOriginals} displayed />
            <Row title="Action Movies" fetchUrl={Requests.fetchActionMovies} displayed />
            <Row title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies} displayed />
        </div>
    )
}
export default MoviesCategories
