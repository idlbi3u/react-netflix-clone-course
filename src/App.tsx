import React from 'react';
import Layout from './Components/Basic/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage';
import Movies from './Pages/Movies';
import MyList from './Pages/MyList';
import NewTrending from './Pages/NewTrending';
import Login from './Components/Basic/Login';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import Series from './Pages/Series';




  
const App = () => {
    const isLogged = useSelector((state: any) => state.isLogged);

    
    return (
        
        <div>
            {isLogged ? (
                <div>
                    <Layout />
                    
                    <Routes>
                        <Route path="/movies" element={<Movies />}/>
                        <Route path="/"element={<Home />} />
                        <Route path="/series" element={<Series />} />
                        <Route path="/mylist" element={<MyList />} />
                        <Route path="/new-trending" element={<NewTrending />} />
                    </Routes>
                </div>
            ) : (
                <div>
                    <Layout />
                    <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    pt={4}
                    >

                        <Grid item xs={3}>
                            <Login />
                        </Grid>   
                    
                    </Grid> 
                </div>
            )
        }
            
            
        </div>
              
        

    )
}

export default App;