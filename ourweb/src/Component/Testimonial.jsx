/* eslint-disable no-unused-vars */
import React from 'react';
import './Testimonial.css';
import Testi1 from '../assets/Vedio/Testi1.jpg';
import Testi2 from '../assets/Vedio/Testi2.jpg';
import Testi3 from '../assets/Vedio/Testi3.jpg';

const Testimonial = () => {
    return (
        <div>
            {/* Testimonial Header */}
            <div className="containerS text-center mt-5 testimonial-header">
                <h2>Testimonials</h2>
                <p className="container testimonial-description" style={{ height: 'auto' }}>
                    When we say we’re all about our people, we really mean it. The idea of "taking care of people" both our employees
                    and our clients has been built into the way we do business.
                </p>
            </div>

            {/* Testimonial Cards */}
            <div className="containerS">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="face front-face">
                                <img src={ Testi1}
                                    alt="" className="profile" />
                                <div className="pt-3 text-uppercase name">
                                    Dr. Klaus Schmid
                                </div>
                                <div className="designation">Marketing Director, Technova GmbH, Germany</div>
                            </div>
                            <div className="face back-face">
                                <span className="fas fa-quote-left"></span>
                                <div className="testimonial">
                                    RSV Technologies has been an invaluable partner in our digital transformation journey. Their expertise in crafting a robust digital marketing strategy propelled our brand to new heights. The team's dedication to understanding our business objectives and delivering tailored solutions is commendable.


                                </div>
                                <span className="fas fa-quote-right"></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="face front-face">
                                <img src={Testi2}
                                    alt="" className="profile" />
                                <div className="pt-3 text-uppercase name">
                                    Pierre Dubois
                                </div>
                                <div className="designation">CEO, La Mode Parisienne, France</div>
                            </div>
                            <div className="face back-face">
                                <span className="fas fa-quote-left"></span>
                                <div className="testimonial">
                                    We were impressed by RSV Technologies' ability to develop a mobile app that perfectly aligned with our brand identity. Their app development team was highly skilled and responsive to our needs. The app has not only enhanced our customer experience but also driven substantial revenue growth. 
                                </div>
                                <span className="fas fa-quote-right"></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="face front-face">
                                <img src={Testi3}
                                    alt="" className="profile" />
                                <div className="pt-3 text-uppercase name">
                                    Mr. Rajeev Patel
                                </div>
                                <div className="designation">Marketing Head, Desai Enterprises, Mumbai, India</div>
                            </div>
                            <div className="face back-face">
                                <span className="fas fa-quote-left"></span>
                                <div className="testimonial">
                                    RSV Technologies has been instrumental in helping us establish a strong online presence. Their digital marketing strategies have yielded impressive results, and their team's dedication to understanding our business is unparalleled. We are particularly satisfied with their ability to create engaging content that resonates with our target audience.


                                </div>
                                <span className="fas fa-quote-right"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
