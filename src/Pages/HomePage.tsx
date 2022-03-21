import React from 'react';
import Row from '../Components/Row';
import TopPage from '../Components/TopPage';
import requests from '../requests';

const Home = () => {
    return (
        <div>
            <TopPage />
            
            <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} />

            <Row title='TRENDING NOW' fetchUrl={requests.fetchTrending}/>

            <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />

        </div>

    )
}

export default Home;

