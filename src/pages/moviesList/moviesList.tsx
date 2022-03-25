import NavbarCompleted from '../../components/navbar/NavbarCompleted'
import MoviesCategories from '../../components/row/MoviesCategories'
import Trending from './trending/trending'
import Footer from '../../components/footer/Footer'

const MoviesList = () => {
  return (
    <>
      <NavbarCompleted />
      <Trending />
      <MoviesCategories />
      <Footer />
    </>
  )
}

export default MoviesList
