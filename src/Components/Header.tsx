import React, { useState } from 'react';
import { 
    AppBar, 
    Card, 
    Container, 
    Toolbar, 
    Typography } from '@mui/material';

import { createTheme } from '@mui/system';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from 'react-router-dom';

import { styled, alpha, ThemeProvider } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
  

// --------------------------------------------------------------------------------------------------------------------- 
interface Tab{
    name: string;
    path: string;
}

interface Props {
    children: React.ReactNode;
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
      marginLeft: theme.spacing(3),
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
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

const Header = () => {
    const [Links, setLinks] = useState<Tab[]>([
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
    return (
        <Router>
                {/* Defining Routes */}
                <Routes>
                    <Route path="/series"/>
                    <Route path="/films"/>
                    <Route path="/" />
                </Routes>

                {/* App Bar - Navigation bar */}
                    <AppBar
                    position="static"
                    >
                        <Container>
                            <Toolbar
                            disableGutters={true}
                            >
                                <Link to="/"
                                    style={{ textDecoration: 'none', color: 'white' }}
                                >
                                    <Typography
                                        variant="h6"
                                        noWrap
                                        component="div"
                                        sx={{ mr: 20, display: { xs: 'none', md: 'flex' } }}
                                    >
                                        <img className='logo' src="/assets/logoNetflix.png" alt="" />
                                    </Typography>
                                </Link>
                                { Links.map((link, index) => {
                                    return(
                                        <Link key={index} to={link.path}
                                        style={{ textDecoration: 'none', color: 'white' }}
                                        >
                                            <Typography
                                                variant="h6"
                                                noWrap
                                                component="div"
                                                sx={{ mr: 7, display: { xs: 'none', md: 'flex' } }}
                                            >
                                                {link.name}
                                            </Typography>
                                        </Link>
                                    )
                                })}
                                <Search>
                                    <SearchIconWrapper>
                                        
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                    />
                                </Search>
                    
                    
                            </Toolbar>
                        </Container>
                    </AppBar>
            </Router> 
    )
}

export default Header;