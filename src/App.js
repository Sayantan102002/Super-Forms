import './App.css';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';
import AppRoutes from './routes/app.routes';
import { Box, Container } from '@mui/material';
import NavBar from './Components/NavBar';
import SideNavBar from './Components/SideNavBar';
import GuestRoutes from './routes/auth.routes';
import GuestNavBar from './Components/GuestNavBar';
import { useSelector } from 'react-redux';
// import useFormApis from './Components/Helper/form.hooks';
// import { useEffect } from 'react';


function App(props) {
  // const { createForm } = useFormApis();
  // useEffect(() => {
  //   createForm({
  //     name: "Form 3",
  //     description: "Desc",
  //     user: "6414d0bf2fdd39855faa410d"
  //   })
  // })
  const { user } = useSelector(state => state.auth);
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
          }}>
            <SideNavBar />
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '93%',
              ml: "7%"
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
    </ConnectedRouter>
  );
}

export default App;
