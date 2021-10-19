import React from 'react';
import useArticles from '../../hooks/useArticles';
import Article from '../Article/Article';
import './Articles.css';

const Articles = () => {
    const [articles] = useArticles();

    return (
        <section className="container articles-container">
            <div className="d-flex justify-content-center">
                <h1 className="articleMainHeading">Check out our latest Articles</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {
                    articles.map(article => <Article key={article.id} article={article} />)
                }
            </div>
        </section>
    );
};

export default Articles;