/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './VerticalSection.css'; // Import the CSS file

const VerticalSection = ({ title, cards }) => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                } else {
                    entry.target.classList.remove('in-view');
                }
            });
        });

        const uniqueCards = document.querySelectorAll('.unique-card');
        uniqueCards.forEach((card) => {
            observer.observe(card);
        });

        return () => {
            uniqueCards.forEach((card) => {
                observer.unobserve(card);
            });
        };
    }, []);

    return (

        <div>
            <div className="text-center" style={{ marginTop: '70px', background: 'linear-gradient(90deg, rgba(2,0,25,1) 19%, rgba(0,0,0,1) 100%, rgba(0,212,255,1) 100%)', color: 'white', height: '70px' }}>
                <h2 style={{ paddingTop: '10px' }}>{title}</h2>
            </div>
            <div className="unique-card-section">
                {cards.map((card, index) => (
                    <div key={index} className={` ${index % 2 === 1 ? 'reverse' : 'unique-card'}`}>
                        <div className="unique-image-container">
                            <img src={card.image} alt={`Image ${index + 1}`} />
                        </div>
                        <div className="unique-content">
                            <h2>{card.heading}</h2>
                            <p>{card.content}</p>
                            <button>{card.buttonText}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Define prop types for VerticalSection
VerticalSection.propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            heading: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            buttonText: PropTypes.string.isRequired,
        })
    ).isRequired
};

export default VerticalSection;
