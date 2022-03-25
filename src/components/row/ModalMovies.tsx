import React, { useState } from 'react'
import { Avatar, Box, Button, Fade, Grid, Modal, Stack, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';

interface PosterInfo {
    movieInfo: MovieData,
    displayed: boolean
}

interface MovieData {
    id: number
    name: string
    title: string
    original_name: string
    original_title: string
    original_language: string
    popularity: number
    sign_path: string
    backdrop_path: string
    overview?: string
    first_air_date: Date
    vote_average: number
}

const principalStyle = {
    outline: 'none',
    p: 0,
    boxShadow: 20,
    position: 'absolute' as 'absolute',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    left: '50%',
    top: '50%',
    bgcolor: '#262626'
}

const principalColor = {
    color: '#6e6e6e', textShadow: 'rgb(0 0 0 / 90%) 0px 0px 12px'
}

const secondaryColor = {
    color: 'white', textShadow: 'rgb(0 0 0 / 90%) 0px 0px 12px'
}

const StyleGrid = {
    height: '46vh',
    width: '59vw',
    position: 'relative',
    background: 'linear-gradient( to bottom, rgba(255, 38, 38, 0) 0, rgba(40, 40, 40, 0.78) 100% )'
}

const StyleButton = {
    '&:hover': {
        backgroundColor: 'rgb(135, 135, 135)'
    },
    fontWeight: 'bold',
    backgroundColor: 'white',
    color: 'black',
}

const displayAvatar = {
    border: "1px solid #a1a1a1", bgcolor: "transparent" 
}

const ModalMovies = ({ movieInfo }: PosterInfo) => {

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w500${movieInfo.sign_path}`} onClick={handleOpen} 
                alt={movieInfo.name} className="row_sign"/>

            <Modal open={open} onClose={handleClose} closeAfterTransition style={{ overflowY: 'scroll' }}
                BackdropProps={{timeout: 480}} aria-describedby="trans_description"
                aria-labelledby="transition-modal-title">
                <Fade in={open}>

                    <Box sx={principalStyle}>
                        <Box sx={{ height: '46vh', display: 'flex', justifyContent: 'center', position: 'relative', alignItems: 'center',
                            '&::after': { backgroundImage: `url("https://image.tmdb.org/t/p/original/${movieInfo?.backdrop_path}")`, backgroundSize: 'cover',
                                height: '100%', width: '100%', content: '""', position: 'absolute', left: 0, top: 0    
                            }
                        }}>

                            <Box>
                                <Grid p={4} direction="row" container zIndex={1000} justifyContent="space-between" sx={StyleGrid} alignItems="space-between">
                                    <Grid xs={12} item>
                                        <Typography component="h1" variant="h4" mb={2} style={{ fontWeight: 'bold', paddingTop: '24%', textShadow: 'rgb(0 0 0 / 90%) 0px 0px 14px' }} >
                                            {movieInfo?.title || movieInfo?.original_title || movieInfo?.name || movieInfo?.original_name}
                                        </Typography>
                                    </Grid>

                                    <Grid item >
                                        <Stack spacing={2} direction="row">
                                            <Button variant="contained" size="large" sx={StyleButton} startIcon={<PlayArrowIcon />}>Play</Button>
                                            <Avatar sx={displayAvatar}> <AddIcon/> </Avatar>
                                            <Avatar sx={displayAvatar}> <ThumbUpOutlinedIcon/> </Avatar>
                                            <Avatar sx={displayAvatar}> <ThumbDownAltOutlinedIcon/> </Avatar>
                                        </Stack>
                                    </Grid>

                                    <Grid mr={2} item>
                                        <Stack spacing={2} direction="row">
                                            <Avatar sx={displayAvatar}> <VolumeUpOutlinedIcon sx={{ color: "#a6a6a6" }}/> </Avatar>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>

                        <Grid container>
                            <Grid xs={6} item>
                                <Stack my={2} ml={3} spacing={1} direction="row">
                                    <Typography style={secondaryColor}> Release date : </Typography>
                                    <Typography style={principalColor}> {movieInfo?.first_air_date ? movieInfo?.first_air_date : "No data"} </Typography>
                                </Stack>

                                <Stack my={2} ml={3} spacing={1} direction="row">
                                    <Typography style={secondaryColor}> Popularity : </Typography>
                                    <Typography style={principalColor}> {movieInfo?.popularity ? movieInfo?.popularity : "No data"} views</Typography>  
                                </Stack>
                            </Grid>

                            <Grid xs={6} item>
                                <Stack my={2} ml={3}  spacing={1} direction="row">
                                    <Typography style={secondaryColor}>VO language : </Typography>
                                    <Typography style={principalColor}> {movieInfo?.original_language ? movieInfo?.original_language : "No data"} </Typography>
                                </Stack>

                                <Stack my={2} ml={3} spacing={1} direction="row">
                                    <Stack direction="row">
                                        <Typography style={secondaryColor}> Note : &nbsp;</Typography>
                                        <Typography style={principalColor}> {movieInfo?.vote_average ? movieInfo?.vote_average : "No data"} </Typography>
                                    </Stack>
                                </Stack>
                            </Grid>
                        </Grid>

                        <Typography sx={{ px: 2, mt: 2 }} component="h2" variant="h4" id="trans_description">
                            {movieInfo?.name || movieInfo?.title || movieInfo?.original_name || movieInfo?.original_title}
                        </Typography>

                        <Typography sx={{ p: 2, mt: 1 }} id="trans_description" > {movieInfo.overview} </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}

export default ModalMovies
