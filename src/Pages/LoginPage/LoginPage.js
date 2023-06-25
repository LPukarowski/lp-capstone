import { Box, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import LoginForm from '../../Components/LoginForm/LoginForm';
import SignUp from '../../Components/SignUp/SignUp';
import './LoginPage.scss';
import '../../partials/global.scss';

const LoginPage = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const handleTabChange = (event, newTabIndex) => {
        setTabIndex(newTabIndex);
    }

    return (
            <Box className='login-page'>
                <Box className='login-page__tabs' sx={{width:'100%', display:'flex', justifyContent:'center'}}>
                    <Tabs value={tabIndex} onChange={handleTabChange}>
                        <Tab label='Login'/>
                        <Tab label='Sign Up'/>
                    </Tabs>  
                </Box>
                <Box>
                    {tabIndex === 0 && (
                        <Box sx={{boxShadow: 10, borderRadius: '16px'}}>
                            <Typography><LoginForm /></Typography>
                        </Box>
                    )}
                    {tabIndex === 1 && (
                        <Box sx={{display: 'flex', justifyContent: 'space-evenly'}}>
                            <Typography><SignUp /></Typography>
                        </Box>
                    )}
                </Box>
            </Box>
    );
};

export default LoginPage;