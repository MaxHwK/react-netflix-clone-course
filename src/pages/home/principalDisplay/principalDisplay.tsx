import { Link } from 'react-router-dom'
import { Box, Button, Container, Grid, TextField, Typography, } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import './principalDisplay.css'

const PrincipalDisplay = () => {
  return (
    <>
      <Box sx={{ display: 'flex', height: '800px', alignItems: 'center', position: 'relative', justifyContent: 'center',
          '&::after': { background: 'rgba(0, 0, 0, 0.4)', position: 'absolute', height: '100%', width: '100%', content: '""',
            left: 0, top: 0, backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%,
            to bottom)`
          }
      }} >

      <Box sx={{ paddingTop: 25, }} className="background">
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1000 }}>
            <Typography color="common.white" textAlign="center" fontWeight="600" component="h1" variant="h2">
              Unlimited movies, TV shows, and more.
            </Typography>

            <Typography color="white" textAlign="center" gutterBottom component="p" variant="h5">
              Watch anywhere. Cancel anytime.
            </Typography>

            <Typography sx={{ my: 3 }} color="white" textAlign="center" component="p" variant="h6">
              Ready to watch ? Enter your email to create or restart your membership.
            </Typography>

            <Grid container>
              <Grid item xs>
                <TextField sx={{ bgcolor: 'white' }} fullWidth label="Enter your email just here ..." variant="filled"/>
              </Grid>

              <Grid item xs="auto">
                <Link to="login">
                  <Button sx={{ height: '100%', borderRadius: '2px' }} size="large" color="primary" variant="contained">
                    Get started <ChevronRightIcon />
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default PrincipalDisplay
