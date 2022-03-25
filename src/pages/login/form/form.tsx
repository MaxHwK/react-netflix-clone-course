import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Box, Button, Checkbox, Container, FormControl, FormHelperText, Grid, InputAdornment, TextField, Typography } from '@mui/material'

import './form.css'

const principalStyle = { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%, to bottom)`,
    background: 'rgba(0, 0, 0, 0.6)', p: 7, boxShadow: 20, left: '50%', top: '50%', position: 'absolute', width: 480, transform: 'translate(-50%, -50%)' 
}

const secondaryStyle = { zIndex: 1000, position: 'relative', padding: 20 }

export const Form = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false)

    return (
        <Container maxWidth="md" sx={secondaryStyle}>
            <Box sx={principalStyle}>
                <Typography sx={{ mb: 4, fontWeight: 600 }} component="h1" variant="h4"> Sign in </Typography>

                <Grid sx={{ mb: 2 }}>
                    <form>
                        <FormControl fullWidth sx={{ mb: 2, }}>
                            <TextField sx={{ input: { color: 'white' }, backgroundColor: '#242424' }} name='email' id='email' variant='filled'
                                InputLabelProps={{ style: { color: '#5e5e5e', } }} className='container_login' label="Email"/>
                        </FormControl>

                        <FormControl fullWidth sx={{ mb: 4 }}>
                            <TextField sx={{ input: { color: 'white' }, backgroundColor: '#242424' }} name='password' id='password' variant='filled'
                                InputLabelProps={{ style: { color: '#5e5e5e' } }} className='container_login' label="Password"
                                type={showPassword ? 'text' : 'password'}
                                InputProps={{ endAdornment: (
                                    <InputAdornment position="end">
                                        <Button sx={{ color: '#5e5e5e' }} onClick={() => setShowPassword(!showPassword)} variant="text" >
                                            {showPassword ? 'Hide' : 'Display'}
                                        </Button>
                                    </InputAdornment>
                                ),
                            }} />
                        </FormControl>

                        <Link to="../profiles">
                            <Button fullWidth size="large" variant="contained" type="submit"> Sign in </Button>
                        </Link>
                    </form>
                </Grid>
                
                <Grid>
                    <Typography color="#6e6e6e" component="span"> New to Netflix ? &nbsp; </Typography>
                    <Typography color="white" component="a" href="#"> Sign up </Typography>
                </Grid>
            </Box>
        </Container>
    )
}
