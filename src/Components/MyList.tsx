import { IconButton, Typography } from '@mui/material';
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Movie from "./Movies/Movie";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { removeMovieFromList } from '../actions/MyListActions';
import { useDispatch } from 'react-redux';

const baseURL = "https://image.tmdb.org/t/p/original/";

const MyMoviesList = () => 
{
    
    const [movies, setMovies] = useState<any>([]);
    const [open, setOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState<any>(null);

    const myListMovies: any[] = useSelector((state: any) => state.myList);
    const dispatch = useDispatch();

    const launchModal = (movie: any) =>
    {
        setSelectedMovie(movie);
        setOpen(true);
    }

    useEffect(() => {
        console.log(myListMovies);
        setMovies(myListMovies);
    }, [myListMovies])

    return (
        <Box
            display="flex"
            flexDirection="column"
            sx={{ ml: "20px", mt: "20px" }}
        >
            <Typography variant="h5">MY LIST</Typography>
            <Box
                display="flex"
                overflow="scroll"
                className="row"
                
            >                
                {movies.map((movie: any, index: number) => (
                    <Box
                    key={index}
                    sx={{ mr: "20px", ml: "20px"}}                    
                    >
                        <img onClick={() => launchModal(movie)} className="row_poster" src={baseURL + movie.poster_path} alt={movie.title} />
                        <IconButton onClick={() => {
                            dispatch(removeMovieFromList(movie))
                        }
                        }><DeleteForeverIcon /></IconButton>
                    </Box>
                ))}
               
            </Box>
            <Movie open={open} setOpen={setOpen} baseURL={baseURL} movie={selectedMovie} />
            
        </Box>
    );

}

export default MyMoviesList;