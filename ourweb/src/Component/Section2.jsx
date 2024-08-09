/* eslint-disable no-unused-vars */
// Section2.jsx
import React from 'react';
import './Section2.css'; // Make sure this path is correct
import p1 from '../assets/Vedio/ml.jpg';
import A3 from '../assets/A3.jpg';
import p3 from '../assets/pic13.jpg';
import p4 from '../assets/pic12.jpg';
import p5 from '../assets/pic23.jpg';
import p6 from '../assets/Vedio/recommcationengine.jpg';

const Section2 = () => {
    return (
        <div>
        <div className="section-2" id="section-2">
            <div className="section-2-content">
                <h2>Next Gen AI Solution We Offer</h2>
                <p>Our decades of expertise and experience channeled towards building the perfect AI solution.</p>
            </div>
            <div className="staircase">
                <div className="staircase-level">
                    <div className="staircase-image-container">
                        <div className="staircase-heading">Machine Learning Services</div>
                        <img src={p1} alt="Image 1" className="staircase-image" />
                    </div>
                </div>
                <div className="staircase-level">
                    <div className="staircase-image-container">
                        <div className="staircase-heading">Natural Language Processing (NLP)</div>
                        <img src={A3} alt="Image 2" className="staircase-image" />
                    </div>
                    <div className="staircase-image-container">
                        <div className="staircase-heading">Robotic Process Automation</div>
                        <img src={p3} alt="Image 3" className="staircase-image" />
                    </div>
                </div>
                <div className="staircase-level">
                    <div className="staircase-image-container">
                        <div className="staircase-heading">Computational Vision</div>
                        <img src={p4} alt="Image 4" className="staircase-image" />
                    </div>
                    <div className="staircase-image-container">
                        <div className="staircase-heading">Conversational AI</div>
                        <img src={p5} alt="Image 5" className="staircase-image" />
                    </div>
                    <div className="staircase-image-container">
                        <div className="staircase-heading">Recommendation Engine</div>
                        <img src={p6} alt="Image 6" className="staircase-image" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Section2;
