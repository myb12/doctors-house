import React from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { SiMinutemailer } from 'react-icons/si';
import { BsGoogle } from 'react-icons/bs';
import logo from '../../images/myb_footer.svg'
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    const handleScroll = () => {
        window.scrollTo(0, 0);
    }
    return (
        <footer className="footer-section">
            <hr className="devider" />
            <div className="container">
                <div className="footer-content pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 mb-50">
                            <div className="footer-widget">
                                <div className="footer-logo">
                                    <Link to="/">
                                        <img src={logo} className="img-fluid" alt="logo" />
                                    </Link>
                                </div>
                                <div className="footer-text">
                                    <p>Doctors' House provides progressive, and affordable healthcare, accessible on mobile and online for everyone.</p>
                                </div>
                                <div className="footer-social-icon">
                                    <p>Follow us</p>
                                    <div className="d-flex">
                                        <span className="facebook-bg">
                                            <FaFacebookF />
                                        </span>
                                        <span className="twitter-bg">
                                            <FaTwitter />
                                        </span>
                                        <span className="google-bg">
                                            <BsGoogle />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 my-4">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    <li onClick={handleScroll}><Link to="/">Home</Link></li>
                                    <li onClick={handleScroll}><Link to="latest-articles">Articles</Link></li>
                                    <li onClick={handleScroll}><Link to="#">Services</Link></li>
                                    <li onClick={handleScroll}><Link to="/contact-us">Contact</Link></li>
                                    <li onClick={handleScroll} ><Link to="/login">Login</Link></li>
                                    <li onClick={handleScroll}><Link to="#">Doctor</Link></li>
                                    <li onClick={handleScroll}><Link to="#">Primary Care</Link></li>
                                    <li onClick={handleScroll}><Link to="#">Orthopadic Care</Link></li>
                                    <li onClick={handleScroll}><Link to="#">Gynecology Care</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Subscribe</h3>
                                </div>
                                <div className="footer-text mb-25">
                                    <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                </div>
                                <div className="subscribe-form">
                                    <div>
                                        <input type="text" placeholder="Email Address" />
                                        <button>
                                            <SiMinutemailer style={{ color: '#fff' }} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                            <div className="copyright-text">
                                <p>Copyright &copy; 2021, All Right Reserved <a href="https://mohammad-yasin.netlify.app/" target="_blank" rel="noreferrer">Mohammad Yasin</a></p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                            <div className="footer-menu">
                                <ul>
                                    <li onClick={handleScroll}>
                                        <Link to="/" >Home</Link>
                                    </li>
                                    <li onClick={handleScroll}>
                                        <Link to="/latest-articles" >Articles</Link>
                                    </li>
                                    <li onClick={handleScroll}>
                                        <Link to="contact-us">Contact</Link>
                                    </li>
                                    <li onClick={handleScroll}>
                                        <Link to="login">Login</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;