import React, { useState } from 'react';
import { 
    AppBar, 
    Avatar,  
    Container, 
    Toolbar, 
    Typography,
    MenuItem,
    Menu,
    Box,
    Tooltip,
    IconButton,
} from '@mui/material';



import {
    Link,
  } from 'react-router-dom';

import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { useDispatch, useSelector } from 'react-redux';
import { logOutAction } from '../../actions/isLoggedAction';

//--------------------------------------------------------------------------------------------------------------------- 


interface MenuLink{
    name: string;
    path: string;
    
}

export interface LayoutProps{
    children: React.ReactNode;
}

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

const Layout = () => {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const isLogged = useSelector((state: any) => state.isLogged);
    const dispatch = useDispatch();
    const [Links] = useState<MenuLink[]>([
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'Movies',
            path: '/movies',
        },
        {
            name: 'New Trending',
            path: '/new-trending',
        },
        {
            name: 'My List',
            path: '/mylist'
        },
    ]);

    const [Settings] = useState<MenuLink[]>([
        {
            name: 'Profile',
            path: '/profile',
        },
        {
            name: 'Logout',
            path: '/logout',
        },
    ]);

    const handleOpenUserMenu = (event: any) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    }
    return (
        <div>
            {isLogged ? (
                <div>
                    <AppBar
                    position="sticky"
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
                                sx={{ mr: 20, display: { xs: 'none', md: 'flex' } }}
                                >
                                    <SearchIconWrapper>
                                        <img className='icon-search' src="https://img.icons8.com/fluency-systems-regular/48/000000/search--v1.png" alt='search-icon'/>
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                    />
                                </Search>
            
                                
                                <div
                                aria-controls="profile-menu-appbar"

                                >
                                    <Box
                                    sx={{ flexGrow: 0 }}
                                    aria-controls="profile-menu-appbar"
                                    >
                                        <Tooltip title="Open settings">
                                        <IconButton
                                        sx={{ p: 0 }}
                                        onClick={handleOpenUserMenu}
                                    
                                    
                                        >
                                            <Avatar alt="Profile Pic" src="/static/images/avatar/2.jpg" />
                                        </IconButton>
                                        </Tooltip>
                                    </Box>
                                    
                                    <Menu
                                    sx={{ mt: '2px' }}
                                    id="menu-appbar"
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    anchorEl={anchorElUser}
                                    onClose={handleCloseUserMenu}
                                    >
                                        
                                        <Link
                                        to='/profile'
                                        style={{ textDecoration: 'none', color: 'white' }}
                                        >
                                            <MenuItem>                                            
                                                <Typography textAlign="center">Profile</Typography>
                                            </MenuItem>
                                        </Link>
                                        
                                        <MenuItem onClick={() => dispatch(logOutAction())}>                                            
                                            <Typography textAlign="center">Logout</Typography>
                                        </MenuItem>
                                        
                                        
                                    </Menu>
                                </div>
                                        
                            </Toolbar>
                        </Container>
                    </AppBar>
                </div>
            ) : (
                <div>
                    <AppBar
                    position="sticky"
                    >
                        <Container
                        disableGutters
                        >
                            <Toolbar
                            disableGutters={true}
                            >                                
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="div"
                                    sx={{ ml: -15, mr: 10, display: { xs: 'none', md: 'flex' } }}
                                >
                                    <img className='logo' src="/assets/logoNetflix.png" alt="" />
                                </Typography>                                
                            </Toolbar>
                        </Container>
                    </AppBar>
                </div>
            )}
        {/* App Bar - Navigation bar */}
            
        </div> 
    )   
}

export default Layout;