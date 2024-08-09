/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Section2.css';

const Section2 = ({ title, boxes }) => {
    useEffect(() => {
        // Placeholder for any JavaScript functionality if needed
    }, []);

    return (
        <div className="TheContent">
            <div
                className="text-center"
                style={{
                    marginTop: '70px',
                    background:
                        'linear-gradient(90deg, rgba(2,0,25,1) 19%, rgba(0,0,0,1) 100%, rgba(0,212,255,1) 100%)',
                    color: 'white',
                    height: '70px',
                }}
            >
                <div className="text-center">
                    <h2 style={{ paddingTop: '10px' }}>{title}</h2>
                </div>
            </div>
            <div className="conatiner" style={{ marginTop: '90px' }}>
                <div className="conatiner">
                    <div className="wrapa">
                        {/* Boxes */}
                        {boxes.map((box, index) => (
                            <div key={index} className={`boxa ${box.className}`}>
                                <div className="date">
                                    <h4>6/29/18</h4>
                                </div>
                                <h1>{box.title}</h1>
                                <div className={`poster ${box.posterClass}`}>
                                    <h4>{box.posterClass.charAt(1).toUpperCase()}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Define prop types for Section2
Section2.propTypes = {
    title: PropTypes.string.isRequired,
    boxes: PropTypes.arrayOf(
        PropTypes.shape({
            className: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            posterClass: PropTypes.string.isRequired
        })
    ).isRequired
};

export default Section2;
