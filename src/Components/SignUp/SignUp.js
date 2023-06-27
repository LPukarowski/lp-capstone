import { Box, TextField } from '@mui/material';
import { useState } from 'react';
import '../../partials/global.scss';



const SignUp = () => {
    const [newUser, setNewUser] = useState({});

    return (
            <Box component='form' className='login signup' sx={{boxShadow: 10, borderRadius: '16px', width: '100%'}} spellCheck='false' autoComplete="off">
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
                <button className="button" variant='contained'>Sign Up Now</button>
            </Box>
    );
};

export default SignUp;