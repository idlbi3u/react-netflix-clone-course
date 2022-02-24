import { ThemeProvider } from '@emotion/react';
import { AppBar, Card, Container, Toolbar, Typography } from '@mui/material';
import { createTheme } from '@mui/system';
import React from 'react';
import Header from './Components/Basic/Header';
import Footer from './Components/Basic/Footer';
import Login from './Components/Login';

  
const App = () => {
    return (
        <div>
            
                <Header />

                <div className='main-page'>
                    <Login />
                </div>

                <Footer />
                
        </div>

    )
}

export default App;