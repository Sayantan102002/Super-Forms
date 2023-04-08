import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase.config";
import { useHistory } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import logo from '../assets/logo/png/logo_140x140.png'
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function SideNavBar() {
    const history = useHistory();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const dispatch = useDispatch();
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleGoogleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            dispatch({
                type: "REMOVE_AUTH_USER"
            })
            history.push('/')
        }).catch((error) => {
            // An error happened.
            console.log(error)
        });

    }

    const settings = [<Button variant="outlined" onClick={handleGoogleSignOut}>
        Log Out
    </Button>];

    const theme = createTheme({
        components: {
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        width: '7%',
                        height: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        left: 0,
                        right: "auto",
                        border: '1px solid #CDCDCD',
                        boxShadow: "none"
                    }
                }
            }
        }
    })

    const { user } = useSelector(state => (state.auth));
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="fixed" color="inherit">
                <Container maxWidth="xl"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        // border: '1px solid'
                        mt: 3
                    }}
                >
                    <Toolbar disableGutters
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            // border: '1px solid'
                        }}
                    >
                        {/* <InsertDriveFileIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                        <Box>
                            <img src={logo}
                                style={
                                    {
                                        // width: '100px',
                                        height: '50px',
                                        objectFit: 'contain',
                                        borderRadius: '3px'
                                    }
                                }
                            />
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            mt: 2,
                            // border: "1px solid red",
                        }}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                mt: 2
                            }}>
                                <DashboardIcon color='disabled' fontSize='large' />
                                <Typography
                                    variant="subtitle1"
                                    color="GrayText"
                                >
                                    Dashboard
                                </Typography>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                mt: 5
                            }}>
                                <AccountCircleIcon color='disabled' fontSize='large' />
                                <Typography
                                    variant="subtitle1"
                                    color="GrayText"
                                >
                                    Account
                                </Typography>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                mt: 5
                            }}>
                                <SettingsIcon color='disabled' fontSize='large' />
                                <Typography
                                    variant="subtitle1"
                                    color="GrayText"
                                >
                                    Settings
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}
export default SideNavBar;