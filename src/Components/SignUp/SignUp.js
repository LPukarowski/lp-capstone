import { Box, TextField } from '@mui/material';
import { useState } from 'react';
import { ThemeProvider } from '@mui/system';
import theme from '../Theme/Theme';

const SignUp = () => {
    const [newUser, setNewUser] = useState({});
    return (
        <ThemeProvider theme={theme}>
            <Box className='login signup' sx={{color:'whitesmoke'}} spellCheck='false' autoComplete="off">
                <TextField
                    required 
                    label='First name' 
                    id="standard-firstname-required" 
                    placeholder='John'
                    variant='standard'
                    sx={{mb:'2rem'}}
                />
                <TextField
                    required 
                    label='Last name' 
                    id="standard-lastname-required" 
                    placeholder='Smith'
                    variant='standard'
                    sx={{mb:'2rem'}}
                />
                <TextField
                    required 
                    label='Username' 
                    id="standard-user-required" 
                    variant='standard'
                    sx={{mb:'2rem'}}
                />
                <TextField
                    required 
                    label='Email' 
                    id="standard-email-required"
                    type='email'
                    placeholder='johnsmith@gmail.com'
                    variant='standard'
                    sx={{mb:'2rem'}}
                />
                <TextField 
                    required
                    label='Password'
                    id="standard-password-input"
                    type='password'
                    variant='standard'
                    sx={{mb:'2rem'}}
                />
                <TextField 
                    required
                    label='Confirm Password'
                    id="standard-confirm-password-input"
                    type='password'
                    variant='standard'
                    sx={{mb:'2rem'}}
                />
                <button className="button">Sign Up Now</button>
            </Box> 
        </ThemeProvider>
    );
};

export default SignUp;