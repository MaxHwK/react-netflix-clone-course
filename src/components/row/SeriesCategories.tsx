import Requests from '../../requests/Requests'
import Row from './Row'

const SeriesCategories = () => {
    return (
        <div className="row_container">
            <Row title="Trending Now" fetchUrl={Requests.fetchTrendingSeries} displayed />
            <Row title="Top Rated" fetchUrl={Requests.fetchTopRatedSeries} displayed />
            <Row title="Anime Series" fetchUrl={Requests.fetchAnimeSeries} displayed />
            <Row title="Romantic Series" fetchUrl={Requests.fetchRomanticSeries} displayed />
        </div>
    )
}

export default SeriesCategories
