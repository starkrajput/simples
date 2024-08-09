/* eslint-disable no-unused-vars */
import React from 'react';// Adjust the path if Navbar.jsx is in a different directory
import '../Pages/style.css'; 
import Simp_Banner from '../Component/Template/Simp_Banner';
import Navbar from '../Component/navbar';
import VerticalSection from '../Component/Template/VerticalSection';
import Section0 from '../Component/Template/Section0';
import CardContentOv from '../Component/Template/CardContentOv';
import Section2 from '../Component/Template/Section2';
import SimpleCard from '../Component/Template/SimpleCard';
import Footer from '../Component/Footer';
import SP1 from '../assets/Vedio/SP1.jpg';
import SP2 from '../assets/Vedio/SP2.jpg';
import SP3 from '../assets/Vedio/SP3.jpg';
import WebBanner from '../assets/Vedio/WebApp.jpg';
import CustomizedPC from '../assets/Vedio/CustomizedPC.jpg';
import Healthcare from '../assets/Vedio/624111.jpg';
import ERP from '../assets/Vedio/erp.png';
import Fintech from '../assets/Vedio/fintech.jpg';
import LuxuryShop from '../assets/Vedio/luxuryeshop.jpg';
import S1 from '../assets/Vedio/SoftwareApp3.png';
import S2 from '../assets/Vedio/SoftwareApp4.jpg';
import S3 from '../assets/Vedio/SoftwareApp5.png';
import S4 from '../assets/Vedio/P1.jpg'
import S5 from '../assets/Vedio/P2.jpg'
import S6 from '../assets/Vedio/P3.jpg'
import S7 from '../assets/Vedio/P4.jpg'
import Ov1 from '../assets/Vedio/Archi.jpg';
import Ov2 from '../assets/Vedio/360expert.jpg';
import Ov3 from '../assets/Vedio/testing.jpg';
function WebApp() {
    const section0Data = {
        title: "Transforming Industries : Solutions That Deliver",
        cards: [
            {
                title: "Enterprise Resource Planning (ERP) Solution",
                date: "March 15, 2023",
                excerpt: "Developed a robust ERP system to streamline operations for a global manufacturing company. Integrated modules for finance, supply chain, and HR, resulting in significant efficiency gains.",
                image: ERP,
                link: "/case-studies/erp-solution"
            },
            {
                title: "E-commerce Platform for Luxury Fashion",
                date: "May 5, 2022",
                excerpt: "Created a bespoke e-commerce platform for a high-end fashion brand, featuring personalized product recommendations, seamless checkout, and integrated inventory management.",
                image: LuxuryShop,
                link: "/case-studies/luxury-fashion-platform"
            },
            {
                title: "Healthcare Data Analytics Platform",
                date: "July 28, 2021",
                excerpt: "Built a data-driven platform to help healthcare providers analyze patient data and improve outcomes. The platform features advanced analytics and machine learning capabilities.",
                image: Healthcare,
                link: "/case-studies/healthcare-data-analytics"
            },
            {
                title: "FinTech Platform for Mobile Payments",
                date: "November 12, 2020",
                excerpt: "Developed a secure mobile payment platform for a leading financial institution. The platform supports various payment methods and adheres to stringent industry regulations.",
                image: Fintech,
                link: "/case-studies/fintech-platform"
            },
            // Add more card objects as needed
        ]
    };
    const section2Data = {
        title: "Our Recent Works",
        boxes: [
            { className: 'one', title: 'CREATIVITY', posterClass: 'p1' },
            { className: 'two', title: 'DISCOVER', posterClass: 'p2' },
            { className: 'three', title: 'IMAGINE', posterClass: 'p3' },
            { className: 'five', title: 'SPIRIT', posterClass: 'p4' },
            { className: 'six', title: 'DESIGN', posterClass: 'p5' },
            { className: 'seven', title: 'CONQUER', posterClass: 'p6' },
            { className: 'eight', title: 'SUCCESS', posterClass: 'p7' },
            { className: 'nine', title: 'UNFORGETTABLE', posterClass: 'p8' },
            { className: 'ten', title: 'AMAZING', posterClass: 'p9' },
            { className: 'eleven', title: 'LOVE', posterClass: 'p10' },
            { className: 'tlv', title: 'LEARN', posterClass: 'p11' },
            { className: 'thirteen', title: 'YEP', posterClass: 'p12' },
            { className: 'ftn', title: 'SMILE', posterClass: 'p13' },
            { className: 'fith', title: 'CODE', posterClass: 'p14' },
            { className: 'sith', title: 'CARDS', posterClass: 'p15' },
            { className: 'sevth', title: 'FLEXBOX', posterClass: 'p16' },
        ]
    };
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
    const VerticalcardData = [
        {
            heading: 'AI-Powered School Management',
            content: 'Streamline your school\'s operations with our AI-driven management dashboard. Automate tasks, personalize learning experiences, and gain valuable insights into student performance.',
            image: S1,
            buttonText: 'Learn More'
        },
        {
            heading: 'Customizable Industry Solutions',
            content: 'Tailor-made software to meet the unique needs of your industry. From healthcare to manufacturing, we provide solutions that drive efficiency and growth.',
            image: CustomizedPC,
            buttonText: 'Explore Solutions'
        },
        {
            heading: 'Integrated Invoicing and Accounting',
            content: 'Simplify your financial management with our seamlessly integrated invoicing and accounting software. Save time and reduce errors.',
            image: S2,
            buttonText: 'See Demo'
        },
        {
            heading: 'Customer Relationship Management (CRM)',
            content: 'Build stronger customer relationships and boost sales with our comprehensive CRM solution. Track interactions, manage leads, and analyze customer data.',
            image: S3,
            buttonText: 'Request a Demo'
        },
        {
            heading: 'Data Analytics and Visualization',
            content: 'Uncover actionable insights from your data with our advanced analytics and visualization tools. Make data-driven decisions to optimize your business.',
            image:S4,
            buttonText: 'Learn More'
        },
        {
            heading: 'Cybersecurity Solutions',
            content: 'Protect your business from cyber threats with our robust security solutions. Safeguard your data and systems with our comprehensive suite of tools.',
            image: S5,
            buttonText: 'Explore Solutions'
        },
        {
            heading: 'E-commerce Platform',
            content: 'Create a seamless online shopping experience with our feature-rich e-commerce platform. Increase sales and customer satisfaction.',
            image: S6,
            buttonText: 'Start Selling'
        },
        {
            heading: 'Human Resources Management (HRM)',
            content: 'Streamline HR processes and optimize your workforce with our comprehensive HRM solution. Manage talent, track performance, and boost employee engagement.',
            image: S7,
            buttonText: 'Learn More'
        },
        // Add more cards as needed
    ];
    const OvcardData = [
        {
            title: 'Robust Architecture',
            text: 'Our development process starts with a solid foundation. We create scalable and maintainable web app architectures to ensure long-term success.',
            image: Ov1,
            description: 'Our development process begins with a comprehensive web app architecture design, ensuring scalability and maintainability. We follow agile methodologies to deliver iterative improvements.'
        },
        {
            title: '360-Degree Expertise',
            text: 'Benefit from our teams deep understanding of client needs and industry trends.We deliver future- proof solutions tailored to your business objectives.',
            image: Ov2,
                description: 'Our 360-degree developers possess a deep understanding of client requirements and industry trends. We create future-proof solutions with a long-term vision.'
          },
        {
            title: 'Rigorous Testing',
                text: 'Ensure product excellence with our comprehensive testing process. We meticulously test across platforms and devices for optimal performance.',
                    image:Ov3,
                        description: 'Rigorous testing is an integral part of our development process. We conduct thorough testing across multiple platforms and devices to ensure optimal performance and user experience.'
        },
  // Add more cards as needed
];
    const BannercarouselItems = [
        {
            image:  WebBanner ,
            title: 'Web Solutions',
            description: ' From concept to deployment, we provide end-to-end web app development services, ensuring a seamless user experience and optimal performance.',
            buttonText: 'Learn More'
        },
      
    ];
    return (
        <div className="content-container">
        <Navbar/>
            <Simp_Banner items={BannercarouselItems} />
            <VerticalSection title="Our Recent Works" cards={VerticalcardData} />
            <Section0 title={section0Data.title} cards={section0Data.cards} />
            <CardContentOv title="Our Recent Works" cards={OvcardData} />
            {/*<Section2 title={section2Data.title} boxes={section2Data.boxes} />*/}
            <SimpleCard title={articlesData.title} articles={articlesData.articles} />
            <Footer/>
        </div>
    );
}

export default WebApp;
