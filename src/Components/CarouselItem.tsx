import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';

import React from 'react';

interface CarouselItemProps {
    name: string;
    imageSrc: string;

}

const CarouselItem = (props: CarouselItemProps) => {
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
                    <Button variant="contained" sx={{ ml: "10px"}}>More Info<InfoIcon /></Button>
                </Box>
            </Box>
        </Box>
    )
}

export default CarouselItem;