import { Link } from 'react-router-dom'
import { AppBar, Grid, Toolbar } from '@mui/material'

const principalStyle = {
  backgroundImage: `linear-gradient( to top, rgba(255, 40, 40, 0) 0, rgba(40, 40, 40, 0.80) 100% );`,
  background: 'transparent',
  position: 'absolute',
  padding: '25px',
}

const Header = () => {
  return (
    <AppBar sx={principalStyle} elevation={0}>
      <Toolbar>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs>
            <Link to="/">
              <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
                width="180px" height="50px" alt="Netflix"/>
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
