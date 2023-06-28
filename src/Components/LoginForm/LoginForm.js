import { Box, TextField } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import '../../partials/global.scss';
import './LoginForm.scss'

const LoginForm = ({setIsLoggedIn, setLoginError}) => {
const [loginAttempt, setLoginAttempt] = useState({
    user_name: "",
    password: ""
})
const navigate = useNavigate();
console.log(loginAttempt)
    const handleLogin = (e) => {
        e.preventDefault();

        console.log(e);

        axios.post("http://localhost:8080/login", {
            user_name: loginAttempt.user_name,
            password: loginAttempt.password
        })
        .then(({data}) => {
            console.log(data)
            sessionStorage.setItem('token', data.token)
            setIsLoggedIn(true)
            setLoginError("")
        })
        .catch((err) => {
            setLoginError(err)
            console.log(err)
        })
        navigate('/')
    }
    const handleChange = (e) => {
        setLoginAttempt({...loginAttempt, [e.target.id]: e.target.value})
    }
    return (
        <Box component='form' className='login' sx={{boxShadow: 10, borderRadius: '16px'}} spellCheck='false' autoComplete='off'>
            
                <TextField
                    required 
                    label='Username' 
                    id="user_name" 
                    variant='standard'
                    sx={{mb:'2rem', color:'#090B17'}}
                    value={loginAttempt.user_name}
                    onChange={e => handleChange(e)}
                />
            
                <TextField 
                    label='Password'
                    id="password"
                    type='password'
                    variant='standard'
                    sx={{mb:'10rem'}}
                    value={loginAttempt.password}
                    onChange={e => handleChange(e)}
                /> 
            <button className='button' onClick={e => handleLogin(e)}>Login</button>
        </Box>
    );
};

export default LoginForm;