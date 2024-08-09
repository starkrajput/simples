/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Simp_Banner.css'; // Import the CSS file

const Simp_Banner = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % items.length); // Adjust based on the number of items
        }, 5000); // Adjust the timing as needed

        return () => clearInterval(interval);
    }, [items.length]); // Dependency array includes items.length to update when items change

    return (
        <div>
            <div className="banner">
                <div className="carousel">
                    {items.map((item, index) => (
                        <div key={index} className={`carousel-item ${activeIndex === index ? 'active' : ''}`}>
                            <img src={item.image} className="carousel-video" alt={`Carousel ${index}`} />
                            <div className="carousel-content">
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                                <button>{item.buttonText}</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Define prop types for Banner
Simp_Banner.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            buttonText: PropTypes.string.isRequired,
        })
    ).isRequired
};

export default Simp_Banner;
