// Added.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
// Make sure this path is correct
import './Added.css';
import csr from '../assets/Vedio/csr.png';
import trophy from '../assets/Vedio/trophy.png';
import event from '../assets/Vedio/event.png';
import balancescale from '../assets/Vedio/balance-scale.png';
import reward from '../assets/Vedio/reward.png';
const Added = () => {
    return (
        <>
            {/* Part 1 */}
            <div className="container" style={{ marginBottom: '70px',height:'auto' }}>
                <div className="row" style={{ marginTop: '70px' }}>
                    <div className="col-12 col-md-6">
                        <div className="rounded p-3" style={{ fontSize: '18px' }}>
                            <h1><span>Our <b>Services</b></span></h1>
                            <br />
                            <p>Software Product Engineering Methodologies</p>
                            <p style={{ fontWeight: 'bold', fontSize: '20px' }}>
                               RSV Technologies empowers businesses by developing innovative software solutions that address over 85% of common industry challenges. Our expert teams create applications tailored to meet specific needs, driving efficiency and growth. </p>
                            <p>
                                Despite being a young and dynamic company, RSV Technologies has already made significant strides in the industry. Our commitment to delivering exceptional solutions has led to successful partnerships with renowned clients across various sectors. From Fortune 500 companies to innovative startups, we've proven our ability to drive results.   </p>
                            <button type="button" className="btn" style={{ width: '200px', height: '50px', color: 'white', marginLeft: '10px', background: 'rgb(2,0,25)', background: 'linear-gradient(90deg, rgba(2,0,25,1) 19%, rgba(0,0,0,1) 100%, rgba(0,212,255,1) 100%)' }}>
                                DISCOVER NOW
                            </button>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="border rounded p-3 shadow mb-3">
                            <div className="row">
                                <div className="col-4">
                                    <img style={{ width: '100px', height: '100px' }} src="https://cdn-icons-png.flaticon.com/512/8738/8738896.png" alt="Ideation Icon" />
                                </div>
                                <div className="col-8">
                                    <h5>Ideation</h5>
                                    <p>Our engineering teams, where everyone is a leader, help you create groundbreaking solutions.</p>
                                </div>
                            </div>
                            <hr style={{ border: 'none', height: '1px', backgroundColor: '#87CEEB' }} />
                            <div className="row">
                                <div className="col-4">
                                    <img src="https://cdn-icons-png.flaticon.com/512/1589/1589661.png" style={{ width: '100px', height: '100px' }} alt="Market Research Icon" />
                                </div>
                                <div className="col-8">
                                    <h5>Market Research</h5>
                                    <p>We go beyond the industry standards to find and seize opportunities. We grow when our clients grow.</p>
                                </div>
                            </div>
                            <hr style={{ border: 'none', height: '1px', backgroundColor: '#87CEEB' }} />
                            <div className="row">
                                <div className="col-4">
                                    <img src="https://cdn-icons-png.flaticon.com/512/868/868682.png" style={{ width: '100px', height: '100px' }} alt="Technology & Tools Icon" />
                                </div>
                                <div className="col-8">
                                    <h5>Technology & Tools</h5>
                                    <p>We help clients invest in the right tools that help them cut out the noise and get the job done.</p>
                                </div>
                            </div>
                            <hr style={{ border: 'none', height: '1px', backgroundColor: '#87CEEB' }} />
                            <div className="row">
                                <div className="col-4">
                                    <img src="https://cdn-icons-png.flaticon.com/512/2762/2762427.png" style={{ width: '100px', height: '100px' }} alt="Success Icon" />
                                </div>
                                <div className="col-8">
                                    <h5>Success</h5>
                                    <p>We take pride in our 21+ years of client success. We supply our clients with up-to-date and actionable results so they can focus on what really matters: growing their business.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Part 2 */}
            <div className="container" style={{ height: 'auto'} }>
                <br />
                <br />
                <div className="text-center">
                    <h2>Values & <b>Culture</b></h2>
                    <p style={{ padding: '6px', fontSize: '20px' }}>
                        Our team is our greatest asset. We consistently invest in and around our team members to make sure they are set up for success and share RSV Technologies dedication to excellence.
                    </p>
                </div>
                <br />
                <div className="row">
                    <div className="col-12 col-md-4" style={{ paddingRight: '6px', marginBottom: '50px' }}>
                        <div className="row align-items-center" style={{ paddingBottom: '38px' }}>
                            <div className="col-4">
                                <img src={csr} style={{ width: '70px', height: '70px', marginLeft: '40px' }} alt="CSR" />
                            </div>
                            <div className="col-8">
                                <h5>CSR</h5>
                            </div>
                        </div>
                        <div className="row align-items-center" style={{ paddingBottom: '38px' }}>
                            <div className="col-4">
                                <img src={trophy} style={{ width: '70px', height: '70px', marginLeft: '40px' }} alt="Awards" />
                            </div>
                            <div className="col-8">
                                <h5>Awards</h5>
                            </div>
                        </div>
                        <div className="row align-items-center" style={{ paddingBottom: '38px' }}>
                            <div className="col-4">
                                <img src={event} style={{ width: '70px', height: '70px', marginLeft: '40px' }} alt="Events" />
                            </div>
                            <div className="col-8">
                                <h5>Events</h5>
                            </div>
                        </div>
                        <div className="row align-items-center" style={{ paddingBottom: '38px' }}>
                            <div className="col-4">
                                <img src={balancescale} style={{ width: '70px', height: '70px', marginLeft: '40px' }} alt="Work-Life Balance" />
                            </div>
                            <div className="col-8">
                                <h5>Work-Life Balance</h5>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-4">
                                <img src={reward} style={{ width: '50px', height: '50px', marginLeft: '40px' }} alt="Recognition" />
                            </div>
                            <div className="col-8">
                                <h5>Recognition</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-8" >
                        <div className="containerW">
                            <div>
                                <div className="contentW">
                                    <h2>7+ Awards</h2>
                                    <span>In Software Apps Domains</span>
                                </div>
                            </div>
                            <div>
                                <div className="contentW">
                                    <h2>Sucess with Clients</h2>
                                    <span>Top brands trust us.</span>
                                </div>
                            </div>
                            <div>
                                <div className="contentW">
                                    <h2>Expertise in Inspiring</h2>
                                    <span>Spreading Innovation with Learning</span>
                                </div>
                            </div>
                            <div>
                                <div className="contentW">
                                    <h2>Revitalising the Methods</h2>
                                    <span>Creating the Legacy of being unbeatable</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Added;
