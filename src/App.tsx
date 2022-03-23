import React from 'react';
import Layout from './Components/Basic/Layout';
import { Route, Routes } from 'react-router-dom';
import Series from './Pages/Series';
import Home from './Pages/HomePage';
import Films from './Pages/Films';



  
const App = () => {
    return (
        
        <div>
            <Layout />
            
            <Routes>
                <Route
                path="/series" element={<Series />}/>
                <Route path="/films" element={<Films />}/>
                <Route path="/"element={<Home />} />
                <Route path="/Profile" />
                <Route path="/logout" />
                <Route path="/login" />
            </Routes>
            
            
        </div>
              
        

    )
}

export default App;