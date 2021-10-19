import React from 'react';
import './Hero.css';
import hero from '../../images/hero.svg'

const Hero = () => {
    return (
        <section className="container hero-section">
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <h1 className="heroHeading">
                            Virtual healthcare for you
                        </h1>
                        <p className="heroDes">
                            <b>Doctors' House</b> provides progressive, and affordable
                            healthcare, accessible on mobile and online for everyone.
                        </p>
                        <button className="btn-regular">Consult Today</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={hero} alt="Health is Wealth" />
                </div>
            </div>
        </section>
    );
};

export default Hero;