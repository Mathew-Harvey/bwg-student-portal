import React from 'react';
import logo from './assets/logo.png'

const Login = (props) => {

    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError
    } = props



    return (
        <section className='login'>
       
            <div className="loginContainer"> 
            <div ><img src={logo} className="loginLogo" /></div>
                <label>Email Address</label>
                <input
                    type="text"
                    autoFocus
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input
                    type="password"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>

                <div className='btnContainer'>
                    {hasAccount ? (
                        <>
                            <button id="signinBtn" onClick={handleLogin}>Sign in</button>
                            <p>Don't have an account ?
                                <span onClick={() => setHasAccount(!hasAccount)}>Register</span></p>
                        </>
                    ) : (
                            <>
                                <button id="signinBtn" onClick={handleSignup}>Register</button>
                                <p>Have an account?
                                <span onClick={() => setHasAccount(!hasAccount)} >Sign in</span></p>
                            </>
                        )}
                </div>

            </div>
        </section>
    )
}

export default Login;