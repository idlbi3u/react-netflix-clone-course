import { Button, Input, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useDispatch} from 'react-redux';
import { useState } from 'react';
import { logInAction } from '../../actions/isLoggedAction';


const Login = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleDisabled = () => {
        if(username === '' || password === '') {
            return true;
        }else{
            return false;
        }
    }
    
    return (
        <Box
            width={"100%"}
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{
                padding: '50px',
                backgroundColor: '#1B1B1B',
                borderRadius: '10%',
            }}
        >
            <Typography variant='h3' component='div'>LOG IN</Typography>
            <Box>
                <Typography>Username</Typography>
                <Input autoFocus={true} onChange={event => {
                        setUsername(event.target.value);
                        
                        }
                    }  
                />
                <Typography>Password</Typography>
                <Input  onChange={event  => {
                        setPassword(event.target.value);
                                                  
                        }   
                    } 
                />
            </Box>

            <Box>
                <Button 
                variant='contained' 
                disabled={handleDisabled()} 
                sx={{
                    mt: '20px',
                }}
                onClick={() => dispatch(logInAction())}
                >Log In</Button>
            </Box>
        </Box>
    )
}

export default Login;