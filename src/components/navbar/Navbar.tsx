import { Link } from 'react-router-dom'
import { AppBar, Grid, Select, Toolbar, MenuItem, Button, } from '@mui/material'

const principalStyle = {
  position: 'absolute',
  backgroundColor: 'transparent',
  padding: '25px'
}

const secondaryStyle = {
  color: 'common.white',
  '& .MuiSelect-icon': {
    color: 'common.white'
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  },
  borderWidth: '1px',
  borderColor: 'common.white',
  borderStyle: 'solid'
}

const Navbar = () => {
  return (
    <>
      <AppBar sx={principalStyle} elevation={0}>
        <Toolbar>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <Link to="/">
                <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
                  width="180px" height="50px" alt="Netflix"/>
              </Link>
            </Grid>

            <Grid item xs="auto">
              <Select sx={secondaryStyle} variant="outlined" defaultValue="EN" name="lang" size="small">
                <MenuItem value="EN">English</MenuItem>
                <MenuItem value="FR">Français</MenuItem>
              </Select>
            </Grid>

            <Grid item xs="auto">
              <Link to="login">
                <Button  variant="contained" color="primary">Sign in</Button>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
