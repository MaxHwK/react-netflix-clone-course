import { Box } from '@mui/material';

import Header from '../../components/header/Header';
import { Form } from './form/form';
import Footer from '../../components/footer/Footer';

const Login = () => {
  return (
    <>
      <Header/>

      <Box sx={{ display: 'flex', height: '750px', position: 'relative', justifyContent: 'center', alignItems: 'center',
        '&::after': { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%, to bottom)`,
          background: 'rgba(0, 0, 0, 0.6)', content: '""', position: 'absolute', height: '110%', width: '100%', left: 0, top: 0
        }
      }} >

        <Box className="background" sx={{paddingTop: 35,}} >
          <Form />
        </Box>
      </Box>

      <br/> <br/>
      <Footer/>
    </>
  );
}

export default Login
