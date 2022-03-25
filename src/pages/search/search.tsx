import React, { useEffect, useState } from 'react'
import { Box, Button, Container, Divider, Grid, Tab, Tabs, TextField} from '@mui/material';
import axios from 'axios';

import NavbarCompleted from '../../components/navbar/NavbarCompleted';
import Trending from '../moviesList/trending/trending';
import ModalMovies from '../../components/row/ModalMovies';
import "../../components/row/row.css";

const principalStyle = {
    height: '7px',
    bgcolor: '#1c1c1c',
}

const Search = () => {
    const [searchText, setSearchText] = useState<string>("");
    const [content, setContent] = useState([]);
    const [type, setType] = useState<number>(0);

    const fetchSearch = async () => {
        try {
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${process.env.REACT_APP_API_KEY
                }&language=en-US&query=${searchText}&include_adult=false&page=1`
            );
            setContent(data.results);
        } catch (error) {
            console.error('There is an error :', error);
        }
    };

    useEffect(() => {
        window.scroll(0, 0);
        fetchSearch();
    }, [type,]);

    return (
        <>
            <NavbarCompleted />
            <Trending/>
            <Divider sx={principalStyle} />
            <Box sx={{ height: '110px' }}></Box>
            <Box sx={{ height: '3800px' }}>
                <Container sx={{ zIndex: 1000, position: 'relative' }} maxWidth='md'>
                    <Grid container>
                        <Grid xs item>
                            <TextField fullWidth sx={{ bgcolor: 'white' }} variant='filled' label="Just search anything you want ..."
                                onChange={(e) => setSearchText(e.target.value)} />
                        </Grid>

                        <Grid xs="auto" item>
                            <Button sx={{ height: '100%', borderRadius: '4px' }} color='primary' variant='contained' size='large'
                                onClick={fetchSearch} >
                                Search
                            </Button>
                        </Grid>
                    </Grid>
                </Container>

                <Container maxWidth="lg">
                    <Box sx={{ margin: '16px 0'}}>
                        <Tabs indicatorColor='primary' textColor='secondary' value={type} 
                            onChange={(event, newValue) => { setType(newValue); }}>
                            <Tab label="Movies" style={{ color: 'azure'}} />
                            <Tab label="Series" style={{ color: 'azure'}}  />
                        </Tabs>

                        <div className="row_signs">
                            {content && content.map((movie: any, index) => (
                                <ModalMovies movieInfo={movie} displayed={true} key={index} />
                            ))}
                            {searchText && content ? <h2> </h2> : <h2> Oops ! Nothing found yet ...</h2>}
                        </div>

                        <p>{content.length} result(s) found</p>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Search
