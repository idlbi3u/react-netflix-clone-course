import React, { useEffect } from 'react';
import Carousel from 'react-material-ui-carousel'
import instance from '../axios';
import CarouselItem from './CarouselItem';

interface TopPageProps {
    fetchUrl: string;
}

const TopPage = (props: TopPageProps) => {
    const [TopMovies, setTopMovies] = React.useState<any>([]);
    const { fetchUrl } = props;

    useEffect(() => {
        instance.get(fetchUrl)
            .then(response => {
                setTopMovies(response.data.results);
            })   
    }, [fetchUrl])

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
                    name={movie.name || movie.title} 
                    key={movie.id}
                    movie={movie}
                    />
                ))}
            </Carousel>
        </div>
    )
}

export default TopPage;