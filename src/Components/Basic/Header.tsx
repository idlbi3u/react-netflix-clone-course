import React, { useState } from 'react';
import { 
    AppBar, 
    Avatar, 
    Card, 
    Container, 
    Toolbar, 
    Typography,
    MenuItem,
    Menu,
    Box,
    Tooltip,
    IconButton
     } from '@mui/material';

import { createTheme } from '@mui/system';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from 'react-router-dom';

import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { FlashOnOutlined } from '@material-ui/icons';
import { EventType } from '@testing-library/react';
  

// --------------------------------------------------------------------------------------------------------------------- 
interface MenuLink{
    name: string;
    path: string;
}


const theme = createTheme({
    palette: {
        mode: 'dark',
    }
});

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(20),
        width: 'auto',
    },
}));
  
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
  
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(3)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
        width: '50ch',
        },
    },
}));

const Header = () => {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [Links, setLinks] = useState<MenuLink[]>([
        {
            name: 'Accueil',
            path: '/'
        },
        {
            name: 'Series',
            path: '/series'
        },
        {
            name: 'Films',
            path: '/films'
        }
    ]);

    const [Setting, setSetting] = useState<MenuLink[]>([
        {
            name: 'Profile',
            path: '/profile',
        },
        {
            name: 'Logout',
            path: '/logout',
        },
        {
            name: 'Login',
            path: '/login',
        }
    ]);

    const handleOpenUserMenu = (event: React.MouseEventHandler<HTMLAnchorElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    }
    return (
        <Router>
            {/* Defining Routes */}
            <Routes>
                <Route path="/series"/>
                <Route path="/films"/>
                <Route path="/" />
                <Route path="/profile" />
                <Route path="/logout" />
                <Route path="/login" />
            </Routes>

            {/* App Bar - Navigation bar */}
                <AppBar
                position="absolute"
                >
                    <Container
                    disableGutters
                    >
                        <Toolbar
                        disableGutters={true}
                        >
                            <Link 
                            to="/"
                            style={{ textDecoration: 'none', color: 'white' }}
                            >
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="div"
                                    sx={{ ml: -15, mr: 10, display: { xs: 'none', md: 'flex' } }}
                                >
                                    <img className='logo' src="/assets/logoNetflix.png" alt="" />
                                </Typography>
                            </Link>
                            { Links.map((link: MenuLink, index) => {
                                return(
                                    <Link 
                                    key={index} 
                                    to={link.path}
                                    style={{ textDecoration: 'none', color: 'white' }}
                                    >
                                        <Typography
                                            variant="h6"
                                            noWrap
                                            component="div"
                                            sx={{ mr: 5, display: { xs: 'none', md: 'flex' } }}
                                        >
                                            {link.name}
                                        </Typography>
                                    </Link>
                                )
                            })}
                            <Search
                            sx={{ mr: 10, display: { xs: 'none', md: 'flex' } }}
                            >
                                <SearchIconWrapper>
                                    <img className='icon-search' src="https://img.icons8.com/fluency-systems-regular/48/000000/search--v1.png" alt='search-icon'/>
                                </SearchIconWrapper>
                                <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                            
                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Profile Pic" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                                </Tooltip>
                                <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
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
                                {Setting.map((setting: MenuLink, index) => (
                                    <Link 
                                    key={index} 
                                    to={setting.path}
                                    >
                                        <MenuItem key={index}>
                                        <Typography textAlign="center">{setting.name}</Typography>
                                        </MenuItem>
                                    </Link>
                                ))}
                                </Menu>
                            </Box>
                
                        </Toolbar>
                    </Container>
                </AppBar>
        </Router> 
    )
}

export default Header;