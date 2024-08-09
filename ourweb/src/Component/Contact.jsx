/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
    useEffect(() => {
        const initEmailJS = () => {
            emailjs.init('service_5poie1k'); // Initialize EmailJS with your user ID

            const form = document.getElementById('contact-form');

            form.addEventListener('submit', async (event) => {
                event.preventDefault();

                const formData = {
                    firstName: document.getElementById('firstName').value,
                    lastName: document.getElementById('lastName').value,
                    email: document.getElementById('email').value,
                    phone: document.getElementById('phone').value,
                    message: document.getElementById('message').value,
                };

                try {
                    const response = await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData);

                    if (response.status === 200) {
                        alert('Message sent successfully');
                        form.reset(); // Clear the form after submission
                    } else {
                        alert('Failed to send message');
                    }
                } catch (error) {
                    alert('Error sending message: ' + error);
                }
            });
        };

        initEmailJS();

        // Cleanup on component unmount
        return () => {
            const form = document.getElementById('contact-form');
            if (form) {
                form.removeEventListener('submit', initEmailJS);
            }
        };
    }, []);

    return (
        <div>
            <div id="contact-container" className="containerD">
            {/* Left Side: Contact Us Form */}
            <div className="form-container">
                <h2 className="heading">Contact Us</h2>
                <p className="paragraph">
                    RSV Technologies is dedicated to providing high-caliber offshore software product engineering services overseen by a local management team with a proven record of success.
                </p>
                <form id="contact-form">
                    <div className="input-group">
                        <input type="text" id="firstName" name="firstName" placeholder="First Name" required />
                        <input type="text" id="lastName" name="lastName" placeholder="Last Name" required />
                    </div>
                    <div className="input-group">
                        <input type="email" id="email" name="email" placeholder="Email" required />
                        <input type="tel" id="phone" name="phone" placeholder="Phone" />
                    </div>
                    <textarea id="message" name="message" placeholder="Message" required></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>

            {/* Right Side: Additional Contact Information */}
            <div className="info-container">
                <h2 className="heading">Don't Want To Fill a Form?</h2>
                <p className="paragraph">Email Us</p>
                <h3 className="heading">Sales Inquiry</h3>
                <a href="mailto:sales@rsvtechnologies.com" className="link">sales@rsvtechnologies.com</a>
                <h3 className="heading">Career</h3>
                <a href="mailto:hiring@rsvtechnologies.com" className="link">hiring@rsvtechnologies.com</a>
                <p>
                    <a href="/careers" className="button">See Current Openings</a>
                </p>
                </div>
            </div>

        </div>
    );
};

export default Contact;
