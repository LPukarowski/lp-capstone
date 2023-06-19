

const LoginForm = () => {
    return (
        <form>
            <label name="username">Username:
                <input type='text' id="username"/>
            </label>
            <label name="password">Password:
                <input type='password'id="password"/> 
            </label> 
        </form>
    );
};

export default LoginForm;