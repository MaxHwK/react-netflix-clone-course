import React, { useEffect, useState } from 'react'
import { Avatar, Box, Button, Grid, Stack, Typography } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Info from '@mui/icons-material/Info';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';

import axios from "../../../requests/Axios";
import Requests from '../../../requests/Requests';

const Trending = () => {

    const [movie, setMovie] = useState<any>([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(Requests.fetchNetflixOriginals);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
            return request;
        }
        fetchData();
    }, [])

    return (
        <>
            <Box sx={{ justifyContent: 'center', alignItems: 'center', position: 'relative', display: 'flex', height: '80vh',
                '&::after': { backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`, backgroundSize: 'cover',
                    content: '""', position: 'absolute', left: 0, top: 0, height: '100%', width: '100%'  
                }
            }}>
                <Grid zIndex={1000} mt={40} ml={2} container direction="row" alignItems="space-between" justifyContent="space-between">
                    <Grid xs={12} item>
                        <Typography style={{ fontWeight: 'bold', textShadow: 'rgb(0 0 0 / 90%) 0px 0px 14px' }} mb={2} ml={5} component="h2" variant="h2" >
                            {movie?.title || movie?.name || movie?.original_title || movie?.original_name}
                        </Typography>
                    </Grid>

                    <Grid item >
                        <Stack spacing={2} ml={5} direction="row">
                            <Button color="secondary" size="large" startIcon={<PlayArrowIcon/>} variant="contained"> Play </Button>
                            <Button sx={{ bgcolor: "#525352" }} size="large" startIcon={<Info/>} variant="contained"> Infos </Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Trending