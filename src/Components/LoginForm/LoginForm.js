import { Box, TextField } from '@mui/material';
import '../../partials/global.scss';
import './LoginForm.scss'
const LoginForm = () => {
    return (
        <>
        <Box component='form' className='login' spellCheck='false' autoComplete='off'>
            
                <TextField
                    required 
                    label='Username' 
                    id="standard-required" 
                    variant='standard'
                    sx={{mb:'2rem'}}
                />
            
                <TextField 
                    label='Password'
                    id="standard-password-input"
                    type='password'
                    variant='standard'
                    sx={{mb:'10rem'}}
                /> 
            <button className='button'>Login</button>
        </Box>
        </>
    );
};

export default LoginForm;