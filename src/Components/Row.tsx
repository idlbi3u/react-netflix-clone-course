import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import instance from "../axios";
import Movie from "./Movies/Movie";

interface RowProps 
{
    title: string;
    fetchUrl: string;
}



const baseURL = "https://image.tmdb.org/t/p/original/";

const Row = (props: RowProps) => 
{
    const { title, fetchUrl } = props;
    const [movies, setMovies] = useState<any>([]);
    const [open, setOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState<any>(null);

    const launchModal = (movie: any) =>
    {
        setSelectedMovie(movie);
        setOpen(true);
    }

    useEffect(() => {
        instance.get(fetchUrl)
            .then(response => {
                setMovies(response.data.results);
            })
        
    }, [fetchUrl])

    return (
        <Box
            display="flex"
            flexDirection="column"
            sx={{ ml: "20px", mt: "20px" }}
        >
            <Typography variant="h5">{title}</Typography>
            <Box
                display="flex"
                overflow="scroll"
                className="row"
                
            >                
                {movies.map((movie: any, index: number) => (
                    <Box
                    key={movie.id}
                    sx={{ mr: "20px", ml: "20px"}}
                    onClick={() => launchModal(movie)}
                    >
                        <img className="row_poster" src={baseURL + movie.poster_path} alt={movie.title} />
                    </Box>
                ))}
               
            </Box>
            <Movie open={open} setOpen={setOpen} baseURL={baseURL} movie={selectedMovie} />
            
        </Box>
    );

}

export default Row;