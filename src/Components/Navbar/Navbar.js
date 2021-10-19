import React from 'react';
import { Link, NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/myb.svg'
import './Navbar.css'

const Navbar = () => {
    const { user, logOut } = useAuth();
    const location = useLocation();
    const history = useHistory();

    //=========styles for active nav link========// 
    const activeStyle = {
        color: "#FFCE31",
        borderBottom: '3px solid #FFCE31',
    }

    const handleScroll = () => {
        window.scrollTo(0, 0);
    }

    const handleLogOut = () => {
        logOut();
        history.push('/');
    }
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
                            <span className="brand-name">Doctors' House</span>
                        </div>
                    </Link>

                    <ul className="navbar-nav align-items-center ms-auto">
                        <li>
                            <span className="d-flex align-items-center  me-3">
                                {
                                    user?.photoURL && <img width="30" className="rounded-circle me-2" src={user.photoURL} alt="" />
                                }
                                {user?.displayName}
                            </span>
                        </li>
                        {
                            location.pathname === '/' ? <li className="nav-item">
                                <NavLink onClick={handleScroll} activeStyle={activeStyle} to="/" className="nav-link">
                                    Home
                                </NavLink>
                            </li>
                                :
                                <li className="nav-item">
                                    <NavLink onClick={handleScroll} activeStyle={activeStyle} to="/home" className="nav-link">
                                        Home
                                    </NavLink>
                                </li>
                        }

                        <li className="nav-item">
                            <NavLink onClick={handleScroll} activeStyle={activeStyle} to="/latest-articles" className="nav-link">
                                Articles
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink onClick={handleScroll} activeStyle={activeStyle} to="/contact-us" className="nav-link">
                                Contact Us
                            </NavLink>
                        </li>
                        {
                            user.email ?
                                <li className="nav-item">
                                    <button onClick={handleLogOut} className="btn btn-rounded nav-link">Log out</button>
                                </li>
                                :
                                <li className="nav-item">
                                    <NavLink onClick={handleScroll} activeStyle={activeStyle} to="/login" className="nav-link">Login</NavLink>
                                </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;