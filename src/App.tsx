import { ThemeProvider } from '@emotion/react';
import { AppBar, Card, Container, Toolbar, Typography } from '@mui/material';
import { createTheme } from '@mui/system';
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  
const App = () => {
    return (
        <div>
            
                <Header />

                <div className='main-page'>
                    
                </div>

                <Footer />
                
        </div>

    )
}

export default App;