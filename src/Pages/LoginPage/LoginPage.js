
import LoginForm from '../../Components/LoginForm/LoginForm';
import './LoginPage.scss'

const LoginPage = () => {
    return (
        <div className='login-page'>
            <div className='login-page__tabs'>
                
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;