import React from 'react';
import Article from '../Article/Article';
import articleData from '../../data/articles.json';
import './Articles.css';

const Articles = () => {

    return (
        <section className="container articles-container">
            <div className="d-flex justify-content-center">
                <h1 className="articleMainHeading">Check out our latest Articles</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {
                    articleData.map(article => <Article key={article.id} article={article} />)
                }
            </div>
        </section>
    );
};

export default Articles;