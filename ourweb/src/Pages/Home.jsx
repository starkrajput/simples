/* eslint-disable no-unused-vars */

import Navbar from '../Component/navbar';
import React from 'react';// Adjust the path if Navbar.jsx is in a different directory
import '../Pages/style.css'; // Import any CSS specific to the Home component if needed
import Banner from '../Component/Banner';
import Section2 from '../Component/Section2';
import Added from '../Component/Added';
/*import Section3 from '../Component/Section3';*/
import Testimonial from '../Component/Testimonial';
import Section4 from '../Component/Section4';
import Contact from '../Component/Contact';
import Footer from '../Component/Footer';
import SP1 from '../assets/Vedio/SP1.jpg';
import SP2 from '../assets/Vedio/SP2.jpg';
import SP3 from '../assets/Vedio/SP3.jpg';
import SimpleCard from '../Component/Template/SimpleCard';
function Home() {
    const articlesData = {
        title: "Our Recent Works",
        articles: [
            {
                image: SP1,
                alt: "PredictiveAI Insights",
                heading: "PredictiveAI Insights",
                description: "PredictiveAI Insights is a cutting-edge software platform that leverages advanced machine learning algorithms to provide actionable insights from complex data sets. By uncovering hidden patterns and trends, businesses can make data-driven decisions with unparalleled accuracy and speed.",
                link: "#",
            },
            {
                image: SP2,
                alt: "CyberShield Enterprise",
                heading: "CyberShield Enterprise",
                description: "CyberShield Enterprise is a comprehensive cybersecurity platform designed to protect businesses from evolving cyber threats. With robust features such as advanced threat detection, incident response, and vulnerability management, our software provides a fortified defense against cyberattacks.",
                link: "#",
            },
            {
                image: SP3,
                alt: "SupplyChainOptimus",
                heading: "SupplyChainOptimus",
                description: "SupplyChainOptimus is a cloud-based supply chain management solution that optimizes operations, reduces costs, and improves efficiency. Our software utilizes advanced analytics and AI to forecast demand, optimize inventory levels, and streamline logistics.",
                link: "#",
            },
        ],
    };
    return (
        <div className="content-container">
            <Banner />
            <Navbar />
           
            <Added />
            <SimpleCard title={articlesData.title} articles={articlesData.articles} />
            <Section2 />
            {/* Pending <Section3 />*/}
            <Testimonial />
            <Section4 />
            <Contact />
            <Footer/>
        </div>
    );
}

export default Home;
