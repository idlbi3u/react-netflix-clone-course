import React from 'react';
import Layout from './Components/Basic/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage';
import Movies from './Pages/Movies';
import MyList from './Pages/MyList';
import { useSelector, useDispatch } from 'react-redux';
import { isLoggedAction } from './actions/isLoggedAction';
import NewTrending from './Pages/NewTrending';



  
const App = () => {
    
    return (
        
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
              
        

    )
}

export default App;