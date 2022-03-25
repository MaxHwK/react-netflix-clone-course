import NavbarCompleted from '../../components/navbar/NavbarCompleted'
import Trending from '../moviesList/trending/trending'
import SeriesCategories from '../../components/row/SeriesCategories'
import Footer from '../../components/footer/Footer'

const SeriesList = () => {
    return (
        <>
            <NavbarCompleted />
            <Trending />
            <SeriesCategories />
            <Footer />
        </>
    )
}

export default SeriesList
