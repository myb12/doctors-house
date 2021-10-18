import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, desc, imgURL } = service;
    return (
        <div className="col-md-6 col-lg-4 mb-4">
            <Link to={`/service/${id}`}>
                <div className="card text-center">
                    <img src={imgURL} alt="service" />
                    <div className="card-body">
                        <h5>{name}</h5>
                        <p>{desc}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Service;