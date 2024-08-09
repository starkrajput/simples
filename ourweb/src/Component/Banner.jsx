/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Banner.css';
import V1 from '../assets/V22.mp4';
import V2 from '../assets/V1.mp4';
import V3 from '../assets/V3.mp4';
import V4 from '../assets/V4.mp4';


const videos = [
    {
        src: V1,
        title: 'AI - ML Solutions',
        description: 'Enable peak performance and automation for your systems and operations with our AI solutions.'
    },
    {
        src: V2,
        title: 'Digital Transformation',
        description: 'Leverage our decades of experience transforming businesses of all shapes and sizes.'
    },
    {
        src: V3,
        title: 'Software Consulting',
        description: 'Consult with the experts to get an optimal product for your business requirements.'
    },
    {
        src: V4,
        title: 'Enterprise Mobility',
        description: 'We build solutions that can be accessed from the device of your choice anywhere and anytime.'
    }
];

const words = [
    'Artificial Intelligence',
    'Digital Transformation',
    'Software Consulting',
    'Enterprise Mobility'
];

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div >
        <div className="banner">
            <div className="carousel">
                {videos.map((video, index) => (
                    <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
                        <video
                            src={video.src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="carousel-video"
                        />
                        <div className="carousel-content">
                            <h1>{video.title}</h1>
                            <p>{video.description}</p>
                            <button>Learn More</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="words-container">
                {words.map((word, index) => (
                    <div key={index} className={`word ${index === currentIndex ? 'active' : ''}`}>
                        <span>{word}</span>
                        <div className={`loading-bar ${index === currentIndex ? 'active' : ''}`}></div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;
