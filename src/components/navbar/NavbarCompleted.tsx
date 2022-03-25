import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AppBar, Grid, Toolbar, Box, IconButton, Typography, styled, InputBase, alpha, Stack } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        width: '100%',
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        padding: theme.spacing(1, 1, 1, 0), 
    },
    color: 'inherit'
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    position: 'absolute',
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    pointerEvents: 'none',
    justifyContent: 'center',
    padding: theme.spacing(0, 2)
}));

const Search = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: '100%',
    position: 'relative',
    marginLeft: 0,
    marginRight: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
}));

const NavbarCompleted = () => {
    const [colorChange, setColorchange] = useState(false);
    const colorNavbar = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', colorNavbar);

    return (
        <AppBar sx={{ backgroundImage: `linear-gradient( to top, rgba(255, 40, 40, 0) 0, rgba(40, 40, 40, 0.80) 100% );`, position: 'fixed',
             padding: '25px', transition: '1s', background: colorChange ? 'black' : 'transparent',  height: '95px', opacity: '1'           
            }}
        elevation={0}>
            <Toolbar>
                <Grid container spacing={2} alignItems="center" >
                    <Grid item xs >
                        <Toolbar>
                            <Link to="/">
                                <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
                                    width="180px" height="50px" alt="Netflix"/>
                            </Link>
                            <Box sx={{ display: { md: 'flex', xs: 'none' } }} ml={10}>
                                <Stack direction='row' spacing={3}>
                                    <Typography sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                                        noWrap component="div" variant="h6">
                                        <Link to="/">Home</Link>
                                    </Typography>

                                    <Typography sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                                        noWrap component="div" variant="h6">
                                        <Link to="../moviesList">Movies</Link>
                                    </Typography>
                                    
                                    <Typography sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                                        noWrap component="div" variant="h6">
                                        <Link to="../seriesList">Series</Link>
                                    </Typography>
                                </Stack>
                            </Box>
                        </Toolbar>
                    </Grid>

                    <Toolbar>
                        <Box sx={{ flexGrow: 1 }} />
                        <Search>
                            <Link to="../search">
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase inputProps={{ 'aria-label': 'search' }} placeholder="Search something"/>
                            </Link>
                        </Search>

                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton aria-label="Display notifications" color="inherit" size="large"/>
                            <Link to="../profiles">
                                <IconButton aria-label="Account" edge="end" aria-haspopup="true"  color="inherit" size="large">
                                    <img src="../../img/avatar1.png" alt="Avatar" width="50px" height="50px"/>
                                </IconButton>
                            </Link>
                        </Box>
                    </Toolbar>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default NavbarCompleted