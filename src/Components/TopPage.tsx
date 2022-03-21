import React, { useEffect } from 'react';
import Carousel from 'react-material-ui-carousel'
import instance from '../axios';
import requests from '../requests';
import Row from './Row';

const TopPage = () => {
    const [TopMovies, setTopMovies] = React.useState<any>([]);

    useEffect(() => {
        instance.get(requests.fetchNetflixOriginals)
            .then(response => {
                setTopMovies(response.data.results);
            })   
    }, [])

    console.log(TopMovies);
    return (
        <div>
            <Carousel
                autoPlay={true}
                animation="slide"
                indicators={false}
                interval={5000}
                

            >
                {TopMovies.map((movie: any, index: number) => (
                    <div key={movie.id}>
                        <img className='topPagePoster' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie.title} />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default TopPage;