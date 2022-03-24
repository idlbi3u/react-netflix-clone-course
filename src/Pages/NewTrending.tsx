import React from 'react';
import Row from '../Components/Row';
import TopPage from '../Components/TopPage';
import requests from '../requests';

const NewTrending = () => {
    return (
        <div>
            <TopPage fetchUrl={requests.fetchTrending} />

            <Row title='TRENDING NOW' fetchUrl={requests.fetchTrending}/>
            
            <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
        </div>
    )
}

export default NewTrending;