import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services] = useServices();
  
    return (
        <section className="services-area my-5">
            <div className="container">
                <div className="d-flex flex-column align-items-center">
                    <h1 className="heroHeading serviceHeading">Our services</h1>
                    <p className="heroDes">
                        We provide to you the best choiches for you. Adjust it to
                        your health needs and make sure your undergo treatment with
                        our highly qualified doctors you can consult with us which
                        type of service is suitable for your health
                    </p>
                </div>
                <div className="row my-5">
                    {
                        services.map(service => <Service key={service.id} service={service} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;