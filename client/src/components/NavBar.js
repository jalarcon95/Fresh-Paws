// import an app bar from MUI

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Auth from '../utils/auth';

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

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

    const logout = (event) => {
        Auth.logout()
    }

    return (
        <AppBar position="static" sx={{ background: "#3D5C60" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <i className="fa-solid fa-paw paw-icon" ></i>

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
                            <MenuItem onClick={handleCloseNavMenu} sx={{ display: "flex", flexDirection: "column" }} >
                                {/* <Link to={`/`}><Typography textAlign="center">About</Typography></Link>
                                <Link to={`/services`}><Typography textAlign="center">Services</Typography></Link>
                                <Link to={`/contact`}><Typography textAlign="center">Contact</Typography></Link> */}
                                <Button
                                    href='/'
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: '#3D5C60', display: 'block' }}
                                >
                                    ABOUT
                                </Button>
                                <Button
                                    href='/services'
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: '#3D5C60', display: 'block' }}
                                >
                                    SERVICES
                                </Button>
                                <Button
                                    href='/contact'
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: '#3D5C60', display: 'block' }}
                                >
                                    CONTACT
                                </Button>
                            </MenuItem>
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            href='/'
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            ABOUT
                        </Button>
                        <Button
                            href='/services'
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            SERVICES
                        </Button>
                        <Button
                            href='/contact'
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            CONTACT
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <i className="fa-solid fa-dog pet"></i>
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

                            <MenuItem onClick={handleCloseUserMenu} sx={{ display: "flex", flexDirection: "column" }}>
                                <Button
                                    href='/login'
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: '#3D5C60', display: 'block' }}
                                >
                                    LOGIN
                                </Button>
                                <Button
                                    href='/signup'
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: '#3D5C60', display: 'block' }}
                                >
                                    SIGNUP
                                </Button>

                                {/* If logged in, profile and logout render */}
                                {Auth.loggedIn() ? (
                                    <Button
                                        href='/profile'
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: '#3D5C60', display: 'block' }}
                                    >
                                        PROFILE
                                    </Button>
                                ) : ("")}
                                {Auth.loggedIn() ? (
                                    <Button
                                        onClick={logout}
                                        sx={{ my: 2, color: '#3D5C60', display: 'block' }}
                                    >
                                        LOGOUT
                                    </Button>
                                ) : ("")}

                            </MenuItem>

                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;