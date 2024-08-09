/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import './CardContentOv.css'; // Ensure this file contains your CSS styles

const CardContentOv = ({ title, cards }) => {
    return (
        <div>
            <div className="text-center" style={{ marginTop: '70px', background: 'linear-gradient(90deg, rgba(2,0,25,1) 19%, rgba(0,0,0,1) 100%, rgba(0,212,255,1) 100%)', color: 'white', height: '70px' }}>
                <div className="text-center">
                    <h2 style={{ paddingTop: '10px' }}>{title}</h2>
                </div>
            </div>
            <div className="about">
                <a className="bg_links social portfolio" href="https://www.rafaelalucas.com" target="_blank" rel="noopener noreferrer">
                    <span className="icon"></span>
                </a>
                <a className="bg_links social dribbble" href="https://dribbble.com/rafaelalucas" target="_blank" rel="noopener noreferrer">
                    <span className="icon"></span>
                </a>
                <a className="bg_links social linkedin" href="https://www.linkedin.com/in/rafaelalucas/" target="_blank" rel="noopener noreferrer">
                    <span className="icon"></span>
                </a>
                <a className="bg_links logo"></a>
            </div>
            <div className="content">
                {cards.map((card, index) => (
                    <div key={index} className="card">
                        <div className="icon">
                            <img src={card.image} alt={card.title} style={{ width: '150px', height: '160px', borderRadius: '110px', marginBottom: '25px' }} />
                        </div>
                        <p className="title">{card.title}</p>
                        <p className="text">{card.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Define prop types for CardContentOv
CardContentOv.propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired
};

export default CardContentOv;
