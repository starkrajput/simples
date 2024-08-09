/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Section0.css';

const Section0 = ({ title, cards }) => {
    useEffect(() => {
        const handleScroll = () => {
            const cards = document.querySelectorAll('.news-card');
            const windowHeight = window.innerHeight;

            cards.forEach(card => {
                const cardTop = card.getBoundingClientRect().top;

                if (cardTop < windowHeight * 0.8) {
                    card.classList.add('in-view');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check on component mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <div className="text-center" style={{ marginTop: '70px', background: 'linear-gradient(90deg, rgba(2,0,25,1) 19%, rgba(0,0,0,1) 100%, rgba(0,212,255,1) 100%)', color: 'white', height: '70px' }}>
                <div className="text-center">
                    <h2 style={{ paddingTop: '10px' }}>{title}</h2>
                </div>
            </div>
            <div className="content-wrapper">
                {cards.map((card, index) => (
                    <div key={index} className="news-card">
                        <a href={card.link} className="news-card__card-link"></a>
                        <img src={card.image} alt="" className="news-card__image" />
                        <div className="news-card__text-wrapper">
                            <h2 className="news-card__title">{card.title}</h2>
                            <div className="news-card__post-date">{card.date}</div>
                            <div className="news-card__details-wrapper">
                                <p className="news-card__excerpt">{card.excerpt}</p>
                                <a href={card.link} className="news-card__read-more">Read more <i className="fas fa-long-arrow-alt-right"></i></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Define prop types for Section0
Section0.propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            excerpt: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired
        })
    ).isRequired
};

export default Section0;
