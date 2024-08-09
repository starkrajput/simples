/*import React, { useEffect, useRef } from 'react';
import Swiper, { Autoplay, EffectCoverflow, Pagination } from 'swiper';
import '../../node_modules/swiper/swiper-bundle.min.css';
import './Section3.css';


const Section3 = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            new Swiper(swiperRef.current, {
                modules: [Autoplay, EffectCoverflow, Pagination],
                loop: true,
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 5,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                    slideShadows: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    dynamicBullets: true,
                },
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 1,
                    },
                },
            });
        }
    }, []);

    const cards = [
        {
            image: './assets/pic1.jpg',
            header: 'HealthTrack Pro',
            description: 'HealthTrack Pro is a comprehensive healthcare management platform...',
        },
        {
            image: './assets/pic21.jpg',
            header: 'EstateVision 360',
            description: 'EstateVision 360 provides an all-in-one solution for real estate professionals...',
        },
        // Add more cards here up to 10
    ];

    return (
        <div className="section3">
            <div className="header">
                <h2>Our Recent Works</h2>
            </div>
            <div className="swiper-container" ref={swiperRef}>
                <div className="swiper-wrapper">
                    {cards.map((card, index) => (
                        <div className="swiper-slide" key={index}>
                            <div className="carousel-card">
                                <img src={card.image} alt={card.header} className="card-image" />
                                <div className="card-content">
                                    <h3 className="card-header">{card.header}</h3>
                                    <p className="card-description">{card.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </div>
    );
};

export default Section3;
*/