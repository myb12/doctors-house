import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './SignUp.css'

const SignUp = () => {
    const { user, signInUsingGoogle, setIsLoading, setName, setEmail, email, password, setPassword, registerNewUser } = useAuth();
    const [returnUser, setReturnUser] = useState(false);
    const history = useHistory();
    const location = useLocation();

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(({ user }) => {
                history.push(location.state?.from || '/');
            })
            .finally(() => setIsLoading(false))
    }
    console.log(user);

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    const handleSignUp = () => {
        registerNewUser(email, password);
    }

    return (
        <section style={{ marginTop: 150 }}>
            {
                returnUser ?
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <div onSubmit={(e) => e.preventDefault()}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <button type="submit" className="btn btn-regular">Login</button>
                                    <button type="submit" className="btn btn-regular ms-3" onClick={handleGoogleSignIn}>Sign in with Google</button>
                                    <span onClick={() => setReturnUser(false)} className="ms-3 return-user">Create a new Account</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <div onSubmit={(e) => e.preventDefault()}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputName" className="form-label">Name</label>
                                        <input onBlur={handleNameChange} type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                        <input onBlur={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input onBlur={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <button onClick={handleSignUp} type="submit" className="btn btn-regular">Sign up</button>
                                    <button type="submit" className="btn btn-regular ms-3" onClick={handleGoogleSignIn}>Sign in with Google</button>
                                    <div className="text-center mt-2">
                                        <span onClick={() => setReturnUser(true)} className="ms-3 return-user">Already Have an Account</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
            }


        </section>
    );
};

export default SignUp;