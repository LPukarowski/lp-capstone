

const SignUp = () => {
    return (
        <>
            <h1 className='page-header'>Sign Up</h1>
            <form className='login' spellCheck='false'>
                <label name="first-name">First name:
                    <input type="text" id="first-name" className="input login_input" />
                </label>
                <label name="last-name">Last name:
                    <input type="text" id="last-name" className="input login_input" />
                </label>
                <label name="email">Email:
                    <input type='email'id="email" className='input login__input'/> 
                </label>
                <label name="username">Username:
                    <input type='text' id="username" className='input login__input'/>
                </label>
                <label name="password">Password:
                    <input type='password'id="password" className='input login__input'/> 
                </label>
                <label name="confirm-password">Confirm Password:
                    <input type='password'id="confirm-password" className='input login__input'/> 
                </label>
                <button className="button">Sign Up Now</button>
            </form> 
        </>
    );
};

export default SignUp;