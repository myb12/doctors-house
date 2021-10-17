import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/myb.svg'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light  fixed-top">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="Logo" />
                    </Link>

                    <ul className="navbar-nav align-items-center ms-auto">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/latest-articles" className="nav-link">
                                Latest Articles
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/about-us" className="nav-link">
                                About Us
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/login" className="nav-link">
                                <button className="btn btn-rounded ">Sign Up</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;