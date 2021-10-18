import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/myb.svg'
import './Navbar.css'

const Navbar = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "#FFCE31",
    }
    const { user, logOut } = useAuth();
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: '#fff' }}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link to="/" className="navbar-brand">
                        <div className="d-flex justify-content-center align-items-center mt-3 mt-lg-0 ">
                            <img src={logo} alt="Logo" className=" me-2" />
                            <span className="bran-name">Doctors' <span style={{ color: '#FFCE31' }}>House</span></span>
                        </div>
                    </Link>

                    <ul className="navbar-nav align-items-center ms-auto">
                        <li>
                            <span className="d-flex align-items-center me-3">
                                <img width="30" className="rounded-circle me-2" src={user.photoURL} alt="" />{user?.displayName}
                            </span>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={activeStyle} to="/home" className="nav-link">
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink activeStyle={activeStyle} to="/latest-articles" className="nav-link">
                                Latest Articles
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink activeStyle={activeStyle} to="/about-us" className="nav-link">
                                About Us
                            </NavLink>
                        </li>
                        {
                            user.email ?

                                <li className="nav-item">
                                    <button onClick={logOut} className="btn btn-rounded nav-link">Log out</button>
                                </li>
                                :
                                <li className="nav-item">
                                    <NavLink activeStyle={activeStyle} to="/login" className="nav-link">Login</NavLink>
                                </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;