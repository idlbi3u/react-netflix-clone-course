import React from 'react';
import Layout from './Components/Basic/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage';
import Movies from './Pages/Movies';
import MyList from './Pages/MyList';
import NewTrending from './Pages/NewTrending';
import Login from './Components/Basic/Login';
import { useSelector } from 'react-redux';




  
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
                        <Route path="/logout" />
                        <Route path="/login" />
                        <Route path="/mylist" element={<MyList />} />
                        <Route path="/new-trending" element={<NewTrending />} />
                    </Routes>
                </div>
            ) : (
                <div>
                    <Layout />
                    <Login />
                </div>
            )
        }
            
            
        </div>
              
        

    )
}

export default App;