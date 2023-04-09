import './App.css';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';
import AppRoutes from './routes/app.routes';
import { Box, Container, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import NavBar from './Components/NavBar';
import SideNavBar from './Components/SideNavBar';
import GuestRoutes from './routes/auth.routes';
import GuestNavBar from './Components/GuestNavBar';
import { useSelector } from 'react-redux';
// import useFormApis from './Components/Helper/form.hooks';
// import { useEffect } from 'react';


function App(props) {
  const theme = useTheme()
  // const { createForm } = useFormApis();
  // useEffect(() => {
  //   createForm({
  //     name: "Form 3",
  //     description: "Desc",
  //     user: "6414d0bf2fdd39855faa410d"
  //   })
  // })
  const { user } = useSelector(state => state.auth);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  console.log(process.env.REACT_APP_mode);
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        {!user ? <Box>
          <GuestNavBar />
          <Box sx={{
            mt: "10vh",
          }}>
            {GuestRoutes()}
          </Box>
        </Box> :
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            // border: "1px solid red",
            width: '100%',
            // display: { xs: 'none', md: 'flex' },
          }}>
            <SideNavBar />
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              // width: '100%',
              width: {
                xs: "100%",
                md: "93%"
              },
              ml: { md: "7%" },
              // border: "1px solid red"
            }}>
              <NavBar />
              <Box
                sx={{
                  mt: "10vh",
                  background: "#f5f5f5",
                  width: "100%",
                  // display: 'flex',
                  // flexDirection: 'column',
                  // alignItems: 'center',
                }}

              >
                {AppRoutes()}
              </Box>
            </Box>
          </Box>}

      </Switch>
    </ConnectedRouter >
  );
}

export default App;
