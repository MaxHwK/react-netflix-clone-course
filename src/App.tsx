import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import style from './mui-style/style';

import Home from './pages/home/home';
import Login from './pages/login/login'
import Profile from './pages/profile/profile';
import MoviesList from "./pages/moviesList/moviesList"
import SeriesList from './pages/seriesList/seriesList';
import Search from './pages/search/search';

const App = () => {
    return (
        <>
            <ThemeProvider theme={style}>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="login" element={<Login />} />
                        <Route path="profiles" element={<Profile />} />
                        <Route path="moviesList" element={<MoviesList />} />
                        <Route path="seriesList" element={<SeriesList />} />
                        <Route path="search" element={<Search />} />
                    </Routes>
                </Router>
            </ThemeProvider>
        </>
    )
}

export default App
