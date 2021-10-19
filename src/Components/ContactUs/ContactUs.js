import React from 'react';
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa"
import { AiTwotoneMail } from "react-icons/ai"
import './ContactUs.css';
const ContactUs = () => {
    return (
        <section className="container contact-us-container">
            <div className="row">

                <div className="col-sm-12 mb-4 col-md-5">

                    <div className="card rounded-0">
                        <div className="card-header p-0">
                            <div className="card-header text-white text-center py-2">
                                <h3><i className="fa fa-envelope"></i> Write to us:</h3>
                                <p className="m-0">We’ll write rarely, but only the best content.</p>
                            </div>
                        </div>
                        <div className="card-body p-3">

                            <div className="form-group">
                                <div className="input-group">
                                    <input type="text" name="data[name]" className="form-control" id="inlineFormInputGroupUsername" placeholder="Your name" />
                                </div>
                            </div>
                            <div className="form-group mt-2">
                                <div className="input-group mb-2 mb-sm-0">
                                    <input type="email" name="data[email]" className="form-control" id="inlineFormInputGroupUsername" placeholder="Email" />
                                </div>
                            </div>
                            <div className="form-group mt-2">
                                <div className="input-group mb-2 mb-sm-0">
                                    <input type="text" name="data[subject]" className="form-control" id="inlineFormInputGroupUsername" placeholder="Subject" />
                                </div>
                            </div>
                            <div className="form-group mt-2">
                                <div className="input-group mb-2 mb-sm-0">
                                    <textarea className="form-control" name="" id="" cols="30" rows="5" placeholder="Message"></textarea>
                                </div>
                            </div>
                            <div className="text-center mt-2">
                                <input type="submit" name="submit" value="submit" className="btn btn-regular py-2" />
                            </div>

                        </div>

                    </div>
                </div>

                <div className="col-sm-12 col-md-7">

                    <div className="mb-3">
                        <iframe title="This is a unique title" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14607.605510543724!2d90.38426189999998!3d23.75089605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1634623431110!5m2!1sen!2sbd" width="100%" height="350" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>

                    </div>

                    <div className="row text-center">
                        <div className="col-md-4">
                            <span className="contact-icons px-3 py-2 rounded text-white mb-2 d-inline-block">
                                <FaMapMarkerAlt />
                            </span>
                            <p>Farmgate, Dhaka</p>
                        </div>
                        <div className="col-md-4">
                            <span className="contact-icons px-3 py-2 rounded text-white mb-2 d-inline-block">
                                <FaPhone />
                            </span>
                            <p>+8801674687835</p>
                        </div>
                        <div className="col-md-4">
                            <span className="contact-icons px-3 py-2 rounded text-white mb-2 d-inline-block">
                                <AiTwotoneMail />
                            </span>
                            <p>yasin@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;