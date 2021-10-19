import React from 'react';
import { BsFillHeartFill, BsShareFill } from 'react-icons/bs';
import { CgMoreO } from 'react-icons/cg';
import './Article.css';

const Article = ({ article }) => {
    const { name, desc, imgURL } = article;
    return (
        <div className="col">
            <div className="cardContainer article-card">
                <div className="article-cart-header">
                    <div className="imageContainer">
                        <img src={imgURL} alt="Health is Wealth" />
                    </div>
                    <div className="infoContainer">
                        <h3 className="articleHeading">{name}</h3>
                        <p className="articleText text-light-gray">
                            {desc}
                        </p>
                        {/* <Link to="/#">Learn More</Link> */}
                    </div>
                </div>
                <div className="row w-100 mx-0 article-footer">
                    <div className="col-md-3 px-0">
                        <button className="w-100 article-btn-love">
                            <BsFillHeartFill />
                        </button>
                    </div>
                    <div className="col-md-3 px-0">
                        <button className="w-100 article-btn-share">
                            <BsShareFill />
                        </button>
                    </div>
                    <div className="col-md-6 px-0">
                        <button className="w-100 article-btn-learn-more d-flex align-items-center justify-content-center">
                            <CgMoreO className="me-2" />
                            <span>Learn More</span>
                        </button>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Article;