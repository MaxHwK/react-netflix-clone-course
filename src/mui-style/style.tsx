import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { red } from '@mui/material/colors'

const base = createTheme({
  palette: {
    primary: {
      main: '#ff000d',
    },
    secondary: {
      main: '#fff5f5',
    },
    error: {
      main: red[400]
    }
  }
})

const style = responsiveFontSizes(base)

export default style