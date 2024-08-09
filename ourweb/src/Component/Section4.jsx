/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import './Section4.css'; // Ensure your CSS is in the same directory or adjust the path
import groupphoto from '../assets/Vedio/rsvgroup.jpg';
import F1 from '../assets/Vedio/A1.jpg';
import F2 from '../assets/Vedio/A2.jpg';
import F3 from '../assets/Vedio/A3.jpg';
import F4 from '../assets/Vedio/A4.jpg';
const Section4 = () => {
    useEffect(() => {
        const updateLayout = () => {
            const container = document.getElementById('section-container');
            const width = window.innerWidth;

            const isSmall = width <= 480;
            const isMedium = width <= 768;
            const isMedium2 = width <= 780;
            const isMedium3 = width <= 805;
            const isMedium4 = width <= 830;
            const isMedium5 = width <= 880;
            const isMedium6 = width <= 950;
            const isMedium7 = width <= 970;
            const isLarge = width <= 1024;
            const isXLarge = width <= 1168;
            const isFullSize = width > 1168;

            container.style.flexDirection = isSmall || isMedium || isLarge || isXLarge ? 'column' : 'row';
            container.style.alignItems = isSmall || isMedium || isLarge || isXLarge ? 'center' : 'flex-start';
            container.style.width = isFullSize ? '100%' : getWidth();
            container.style.margin = isSmall || isMedium || isLarge || isXLarge ? '0 130px 0 0' : 'auto';
        };

        const getWidth = () => {
            const width = window.innerWidth;
            if (width <= 480) return '100.5%';
            if (width <= 768) return '100%';
            if (width <= 780) return '100%';
            if (width <= 805) return '100%';
            if (width <= 830) return '100%';
            if (width <= 880) return '100%';
            if (width <= 950) return '100%';
            if (width <= 970) return '100%';
            if (width <= 1024) return '100%';
            if (width <= 1168) return '100%';
            return '100%';
        };

        window.addEventListener('resize', updateLayout);
        window.addEventListener('load', updateLayout);

        return () => {
            window.removeEventListener('resize', updateLayout);
            window.removeEventListener('load', updateLayout);
        };
    }, []);

    return (
        <div style={{margin:'100px'} }>
        <div className="section-container" id="section-container">
            <div className="content-container">
                <div className="content-item">
                    <img src={groupphoto} alt="Photo" className="photo-image" />
                    <div className="text-content">
                        <h2 className="heading">Join Our Crew, Come Build the Future With RSV</h2>
                        <div className="border-style"></div>
                        <p>
                            At RSV Technologies, our greatest assets are our employees. Come join a diverse community of talented individuals who work together to deliver excellence and bring software solutions to life.
                            <br />
                            <br />
                            We provide a workplace that is collaborative, and fosters productivity and teamwork. The leadership provides learning and growth opportunities for every individual to thrive professionally. Come join our talented group of testing experts and grow your career with us!!
                        </p>
                        <a href="/careers" className="button">Explore Careers</a>
                    </div>
                </div>
            </div>

           {/* <div className="box-container">
                    <img src={F1} alt="Image 1" className="box-image" />
                <img src={F2} alt="Image 2" className="box-image" />
                <img src={F3} alt="Image 3" className="box-image" />
                <img src={F4} alt="Image 4" className="box-image" />
            </div>*/}
            </div>
        </div>
    );
};

export default Section4;
