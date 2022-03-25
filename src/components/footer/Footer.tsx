import {Box, Container, Stack, Typography, Grid} from '@mui/material'

const Footer = () => {
  return (
    <Box sx={{ color: 'white' }}>
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Stack spacing={5}>
          <Typography> Netflix US </Typography>

          <Box>
            <Grid container spacing={5}>
              <Grid item xs={6} md={3}>
                <Stack spacing={3}>
                  <Typography component="a" href="#"> FAQ </Typography>
                  <Typography component="a" href="#"> Help Center </Typography>
                </Stack>
              </Grid>

              <Grid item xs={6} md={3}>
                <Stack spacing={3}>
                  <Typography component="a" href="#"> Contact Us </Typography>
                  <Typography component="a" href="#"> Jobs </Typography>
                </Stack>
              </Grid>

              <Grid item xs={6} md={3}>
                <Stack spacing={3}>
                  <Typography component="a" href="#"> Account </Typography>
                  <Typography component="a" href="#"> Privacy </Typography>
                </Stack>
              </Grid>

              <Grid item xs={6} md={3}>
                <Stack spacing={3}>
                  <Typography component="a" href="#"> Legal Notices </Typography>
                  <Typography component="a" href="#"> Media Center </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer
