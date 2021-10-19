import React from 'react';
import { CgMoreO } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, desc, imgURL } = service;
    return (
        <div className="col-md-6 col-lg-4 mb-4">

            <div className="card text-center d-flex justify-content-between">
                <div>
                    <img className="service-image" src={imgURL} alt="service" />
                    <div className="card-body">
                        <h5>{name}</h5>
                        <p>{desc}</p>
                    </div>
                </div>
                <div>
                    <Link to={`/service/${id}`}>
                        <button className="service-button d-flex align-items-center justify-content-center">
                            <CgMoreO className="me-2" />
                            <span>Learn More</span>
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Service;