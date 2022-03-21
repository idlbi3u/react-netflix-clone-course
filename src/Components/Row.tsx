import { CardMedia, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import requests from "../requests";
import instance from "../axios";

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

    useEffect(() => {
        instance.get(fetchUrl)
            .then(response => {
                setMovies(response.data.results);
            })
        
    }, [fetchUrl])

    console.log(movies)
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
                    
                    >
                        <img className="row_poster" src={baseURL + movie.poster_path} alt={movie.title} />   

                    </Box>
                ))}
               
            </Box>
        </Box>
    );

}

export default Row;