import '../../partials/global.scss';
import './LoginForm.scss'
const LoginForm = () => {
    return (
        <>
        <h1 className='page-header'>Login</h1>
        <form className='login' spellCheck='false'>
            <label name="username">Username:
                <input type='text' id="username" className='input login__input'/>
            </label>
            <label name="password">Password:
                <input type='password'id="password" className='input login__input'/> 
            </label> 
        </form>
        </>
    );
};

export default LoginForm;