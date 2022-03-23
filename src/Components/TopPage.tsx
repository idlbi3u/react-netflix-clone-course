import React, { useEffect } from 'react';
import Carousel from 'react-material-ui-carousel'
import instance from '../axios';
import requests from '../requests';
import CarouselItem from './CarouselItem';

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
                sx={{
                    height: "600px",
                }}
                            
            >
                {TopMovies.map((movie: any) => (   
                    <CarouselItem 
                    imageSrc={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                    name={movie.name}
                    key={movie.id}
                    />
                ))}
            </Carousel>
        </div>
    )
}

export default TopPage;