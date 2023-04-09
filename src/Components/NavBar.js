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
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


function NavBar() {
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
            history.push('/about')
        }).catch((error) => {
            // An error happened.
            console.log(error)
        });

    }

    const settings = [
        <Button variant="text" onClick={handleGoogleSignOut}>
            Log Out
        </Button>
    ];

    const theme = createTheme({
        components: {
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        width: '93%',
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
                <Container maxWidth="xl">
                    <Toolbar disableGutters
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Box>
                            <InputBase
                                startAdornment={
                                    <SearchIcon
                                        sx={{
                                            px: 1.5,
                                        }}
                                        fontSize="medium"
                                    />
                                }
                                placeholder="Search"
                                color="default"
                                sx={{
                                    // border: '1px solid',
                                    background: "#f5f4f6",
                                    borderRadius: "10px",
                                    py: 0.7,
                                    width: "25vw",
                                    fontSize: "1.3vw"
                                }}
                            />
                        </Box>



                        {user ? <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt={user?.displayName} src={user?.photoURL} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box> : null}
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}
export default NavBar;