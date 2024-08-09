/* eslint-disable no-unused-vars */
// src/AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import WebApp from './Pages/WebApp.jsx';
import MobileApp from './Pages/MobileApp.jsx';
import SoftwareApp from './Pages/SoftwareApp.jsx';
// Import other pages here as needed

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/webapp" element={<WebApp />} />
                <Route path="/mobileapp" element={<MobileApp />} />
                <Route path="/softwareapp" element={<SoftwareApp />} />
               {/* <Route path="/mobileapp" element={<WebApp />} />
                <Route path="/softwareapp" element={<WebApp />} />
                <Route path="/services" element={<WebApp />} />
                <Route path="/about" element={<WebApp />} />
                <Route path="/leadership" element={<WebApp />} />*/}
                {/* Add more routes here */}
            </Routes>
        </Router>
    );
};

export default AppRouter;
