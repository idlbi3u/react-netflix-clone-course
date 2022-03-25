import ModalUnstyled from '@mui/base/ModalUnstyled';
import { Button, IconButton, Typography } from '@mui/material';
import { styled, Box } from '@mui/system';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import React, {useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovieToList } from '../../actions/MyListActions';
import instance from '../../axios';
import requests from '../../requests';


interface StyledModalProps {
    open: boolean;
    movie?: any;
    baseURL: string;
    setOpen: (value: React.SetStateAction<boolean>) => void;

}

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 1000,
  bgcolor: 'background.paper',
  position: 'relative',
};
const Movie = (props: StyledModalProps) => 
{
    const { open, movie, setOpen, baseURL } = props;    
    const handleClose = () => {
        setOpen(false);
    }
    const dispatch = useDispatch();
    
    // const [selected, setSelected] = useState<any>(null);


    // useEffect(() => {
    //     console.log(selected);
    //     if(movie){
    //       instance.get(requests.fetchMovieDetails(movie?.id))
    //           .then(response => {
    //             setSelected(response.data.results);
    //         })
    //     }

    // }, [movie, selected, movie?.id])
    // je n'arrive pas a recuperer les infos du film ??? je ne sais pas pourquoi

    return (
        <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
        >
        <Box sx={style}>
          <Box>
            <img className='modal-poster' src={baseURL + movie?.backdrop_path} alt={movie?.title} />
          </Box>
          <Box 
            sx={{
                display: 'absolute',
                padding: '20px',
            }}
          >
            <Typography variant='h3' component="div">{movie?.name || movie?.title}</Typography>
            <Box
                display="flex"
                justifyContent="space-between"
            >   <Box>
                    <Typography variant='body1' component="div">{movie?.overview}</Typography>
                </Box>
            </Box>
            <Box
                display={'flex'}                              
            >
                <Button sx={{ mr: "10px" }} variant="contained"><PlayArrowIcon />Watch</Button>
                <IconButton onClick={() => {dispatch(addMovieToList(movie))}}><AddIcon /></IconButton>
                <IconButton><ThumbUpOffAltIcon /></IconButton>
                <IconButton><ThumbDownOffAltIcon /></IconButton>
            </Box>
          </Box>
          <Box>
            
          </Box>
            <Button onClick={handleClose}>Close</Button>
        </Box>
      </StyledModal>
    )
}

export default Movie;