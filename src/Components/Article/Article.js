import React from 'react';
import { Link } from 'react-router-dom';
import './Article.css';

const Article = ({ article }) => {
    console.log(article);
    const { name, desc, imgURL } = article;
    return (
        <div className="col">
            <div className="cardContainer article-card">
                <div className="imageContainer">
                    <img src={imgURL} alt="Health is Wealth" />
                </div>
                <div className="infoContainer">
                    <h3 className="articleHeading">{name}</h3>
                    <p className="articleText text-light-gray">
                        {desc}
                    </p>
                    <Link to="/#">Learn More</Link>
                </div>
            </div >
        </div>
    );
};

export default Article;