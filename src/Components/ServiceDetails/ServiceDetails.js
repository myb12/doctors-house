import React from 'react';
import { useHistory, useParams } from 'react-router';
import useServices from '../../hooks/useServices';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const history = useHistory();
    const [services] = useServices();

    const specificService = services.find(service => service.id === +serviceId);
    console.log(specificService);

    const handleClick = () => {
        history.push('/');
    }

    return (
        <section className="container mt-4">

            {
                specificService &&
                <div className="row my-5">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img className="img-fluid" src={specificService.imgURL} alt="" />
                        </div>
                        <div className="col-md-6">
                            <h1 className="heroHeading">
                                {specificService.name}
                            </h1>
                            <p className="heroDes">
                                {specificService.desc}
                            </p>
                            <button onClick={handleClick} className="btn-regular">Back to All Services</button>
                        </div>
                    </div>
                </div>
            }


        </section>
    );
};

export default ServiceDetails;