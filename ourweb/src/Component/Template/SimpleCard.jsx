/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import './SimpleCard.css'; // Ensure the CSS is imported

const SimpleCard = ({ title, articles }) => {
    return (
        <div className="container" style={{ height: 'auto' }}>
            {/* Header Section */}
            <div
                className="header-section"
                style={{
                    marginTop: '70px',
                    background:
                        'linear-gradient(90deg, rgba(2,0,25,1) 19%, rgba(0,0,0,1) 100%, rgba(0,212,255,1) 100%)',
                    color: 'white',
                    height: '70px',
                    marginBottom: '30px'
                }}
            >
                <div className="text-center">
                    <h2 style={{ paddingTop: '10px' }}>{title}</h2>
                </div>
            </div>

            {/* Articles Section */}
            <section className="articles">
                {articles.map((article, index) => (
                    <article key={index}>
                        <div className="article-wrapper">
                            <figure>
                                <img src={article.image} alt={article.alt} />
                            </figure>
                            <div className="article-body">
                                <h2>{article.heading}</h2>
                                <p>{article.description}</p>
                                <a href={article.link} className="read-more">
                                    Read more
                                    <span className="sr-only">about {article.heading}</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    );
};

// Define prop types for SimpleCard
SimpleCard.propTypes = {
    title: PropTypes.string.isRequired,
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
            heading: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default SimpleCard;
