import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './SignUp.css'

const SignUp = () => {
    const { signInUsingGoogle, setIsLoading, setName, setEmail, email, password, setPassword, setUserName, error, setError, registerNewUser, loginWithEmailAndPassword } = useAuth();
    const [returnUser, setReturnUser] = useState(true);
    const history = useHistory();
    const location = useLocation();

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(({ user }) => {
                history.push(location.state?.from || '/');
                setError('');
                window.scrollTo(0, 0);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }


    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        registerNewUser(email, password)
            .then(({ user }) => {
                setUserName();
                history.push(location.state?.from || '/');
                setError('');
                window.scrollTo(0, 0);
                //=====this will reload page to show newly registered  user's information=====//
                window.location.reload();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        loginWithEmailAndPassword(email, password)
            .then(({ user }) => {
                history.push(location.state?.from || '/');
                setError('');
                window.scrollTo(0, 0);
            })
            .catch(error => {
                setError(error.message);
            })

    }

    return (
        <section className="sign-up-container">
            {
                returnUser ?
                    <div className="container">
                        <div className="row justify-content-center px-2">
                            <div className="col-md-6 form-container">
                                <form onSubmit={handleSignIn}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                        <input onBlur={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input onBlur={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" required />
                                    </div>
                                    <button type="submit" className="btn btn-regular">Login</button>
                                    <span className="btn btn-regular ms-3" onClick={handleGoogleSignIn}>Sign in with Google</span>
                                    <p className="mt-3 mb-0">
                                        <span onClick={() => setReturnUser(false)} className="return-user">
                                            Create a new Account</span>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="container">
                        <div className="row justify-content-center px-2">
                            <div className="col-md-6 form-container">
                                <form onSubmit={handleSignUp}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputName" className="form-label">Name</label>
                                        <input onBlur={handleNameChange} type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                        <input onBlur={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input onBlur={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" required />
                                    </div>
                                    <button type="submit" className="btn btn-regular">Sign up</button>
                                    <span type="submit" className="btn btn-regular ms-3" onClick={handleGoogleSignIn}>Sign in with Google</span>
                                    <p className="mt-3 mb-0">
                                        <span onClick={() => setReturnUser(true)} className="return-user">Already Have an Account</span>
                                    </p>
                                </form>

                            </div>
                        </div>
                    </div >
            }
            <div className="row text-danger justify-content-center mt-3 w-100">{error}</div>

        </section >
    );
};

export default SignUp;