import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import React, { useState } from 'react';
import Movie from './Movies/Movie';

interface CarouselItemProps {
    name: string;
    imageSrc: string;
    movie: any;

}

const baseURL = "https://image.tmdb.org/t/p/original/";

const CarouselItem = (props: CarouselItemProps) => {

    const [open, setOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState<any>(null);

    const launchModal = (movie: any) =>
    {
        console.log(movie);
        setSelectedMovie(movie);
        setOpen(true);
    }
    return(
        <Box
            display="flex"
            flexDirection="row"

            sx={{
                backgroundImage: `url(${props.imageSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                                
                height: "1000px",
                width: "100%",
            }}
            >

            <Box
               
                sx={{
                    width: "100%",
                    height: "100%",
                }}
            >
                <Box
                    sx={{
                        mt: "400px",
                        ml: "100px",
                    }}
                >
                    <Typography variant='h2' component="div">{props.name}</Typography>
                    <Button variant="contained"><PlayArrowIcon />Watch</Button>
                    <Button onClick={() => launchModal(props.movie)} variant="contained" sx={{ ml: "10px"}}>More Info<InfoIcon /></Button>
                </Box>
            </Box>
            <Movie open={open} setOpen={setOpen} baseURL={baseURL} movie={selectedMovie}/>
        </Box>
    )
}
export default CarouselItem;