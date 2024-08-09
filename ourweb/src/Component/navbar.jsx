import React, { useEffect, useState } from 'react';
import './navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                setIsScrollingUp(false);
                document.getElementById('navbarS')?.classList.add('hidden');
            } else {
                setIsScrollingUp(true);
                document.getElementById('navbarS')?.classList.remove('hidden');
            }
            if (currentScrollY === 0) {
                // At the top of the page
                document.getElementById('navbarS')?.classList.remove('scrolled');
            } else {
                // Not at the top
                document.getElementById('navbarS')?.classList.add('scrolled');
            }

            setLastScrollY(currentScrollY);
            
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY, isAtTop]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbarS" id="navbarS">
            <div className="navbar-logoS">
                <a style={{ color: 'white', textDecoration: 'none' }} href="./">
                    RSV Technologies
                </a>
            </div>
            <div className="navbar-menu-iconS" id="menu-iconS" onClick={toggleMenu}>
                &#9776;
            </div>
            <ul className={`navbar-menuS ${isOpen ? 'open' : ''}`} id="navbar-menuS">
                <li className="dropdownS">
                    <a href="./webapp" style={{ color: 'white', textDecoration: 'none' }}>Web Apps</a>
                   {/* <div className="dropdown-containerS">
                        <ul className="dropdown-menuS">
                            <li><a style={{ color: 'white', textDecoration: 'none' }} href="./pages/Webapps.html">Artificial Intelligence Solutions</a></li>
                            <li><a style={{ color: 'white', textDecoration: 'none' }} href="./pages/Webapps.html">Enterprise Solutions</a></li>
                            <li><a style={{ color: 'white', textDecoration: 'none' }} href="./pages/Mobileapps.html">Mobile Solutions</a></li>
                            <li><a style={{ color: 'white', textDecoration: 'none' }} href="./pages/Softwareapps.html">IIoT and IoT Solutions</a></li>
                            <li><a style={{ color: 'white', textDecoration: 'none' }} href="./pages/Webapps.html">Cloud Integration Solutions</a></li>
                        </ul>
                        <ul className="dropdown-menuS">
                            <li><a style={{ color: 'white', textDecoration: 'none' }} href="./pages/Webapps.html">Web Solutions</a></li>
                            <li><a style={{ color: 'white', textDecoration: 'none' }} href="./pages/Webapps.html">Saas Development</a></li>
                            <li><a style={{ color: 'white', textDecoration: 'none' }} href="./pages/Webapps.html">Staff Augmentation Services</a></li>
                            <li><a style={{ color: 'white', textDecoration: 'none' }} href="./pages/Webapps.html">Ondemand Services</a></li>
                        </ul>
                    </div>*/}
                </li>
                <li className="dropdownS">
                    <a href="./mobileapp" style={{ color: 'white', textDecoration: 'none' }}>Mobile Apps</a>
                   {/* <div className="dropdown-containerS">
                        <ul className="dropdown-menuS">
                            <li><a style={{ color: 'white', textDecoration: 'none' }} href="./pages/Webapps.html">Web Apps</a></li>
                            <li><a style={{ color: 'white', textDecoration: 'none' }} href="./pages/Mobileapps.html">Mobile Apps</a></li>
                            <li><a style={{ color: 'white', textDecoration: 'none' }} href="./pages/Softwareapps.html">Software Solution</a></li>
                        </ul>
                    </div>*/}
                </li>
                <li className="dropdownS">
                    <a href="./softwareapp" style={{ color: 'white', textDecoration: 'none' }}>Software Apps</a>
                  {/*  <div className="dropdown-containerS">
                        <ul className="dropdown-menuS">
                            <li><a style={{ color: 'white', textDecoration: 'none' }} href="./pages/Webapps.html">AI/ML</a></li>
                            <li><a style={{ color: 'white', textDecoration: 'none' }} href="./pages/Webapps.html">Enterprise</a></li>
                            <li><a style={{ color: 'white', textDecoration: 'none' }} href="./pages/Webapps.html">Mobile</a></li>
                            <li><a style={{ color: 'white', textDecoration: 'none' }} href="./pages/Webapps.html">IIoT & IoT</a></li>
                            <li><a style={{ color: 'white', textDecoration: 'none' }} href="./pages/Webapps.html">Cloud Integration</a></li>
                        </ul>
                    </div>*/}
                </li>
               {/* <li className="dropdownS">
                    <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Mobile Apps</a>
                    <div className="dropdown-containerS">
                        */}{/* <ul className="dropdown-menuS">
                            <li><a style={{ color: 'white', textDecoration: 'none' }} href="./pages/Webapps.html">Web Apps</a></li>
                            <li><a style={{ color: 'white', textDecoration: 'none' }} href="./pages/Mobileapps.html">Mobile Apps</a></li>
                            <li><a style={{ color: 'white', textDecoration: 'none' }} href="./pages/Softwareapps.html">Software Solution</a></li>
                        </ul>*/}{/*
                    </div>
                </li>*/}
            </ul>
        </nav>
    );
};

export default Navbar;

/*Code for Reset*/
/*import React, { useEffect, useState } from 'react';
import './navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                setIsScrollingUp(false);
                document.getElementById('navbarS')?.classList.add('hidden');
            } else {
                setIsScrollingUp(true);
                document.getElementById('navbarS')?.classList.remove('hidden');
            }

            setLastScrollY(currentScrollY);
            setIsAtTop(currentScrollY === 0);
            if (!isAtTop) {
                document.getElementById('navbarS')?.classList.add('scrolled');
            } else {
                document.getElementById('navbarS')?.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY, isAtTop]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbarS" id="navbarS">
            <div className="navbar-logoS">
                <a style={{ color: 'white', textDecoration: 'none' }} href="../Home.html">
                    RSV Technologies
                </a>
            </div>
            <div className="navbar-menu-iconS" id="menu-iconS" onClick={toggleMenu}>
                &#9776;
            </div>
            <ul className={`navbar-menuS ${isOpen ? 'open' : ''}`} id="navbar-menuS">
                <li className="dropdownS">
                    <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Industry</a>
                    <div className="dropdown-containerS">
                        <ul className="dropdown-menuS">
                            <li><a style={{ color: 'white', textDecoration: 'none' }} href="./pages/Webapps.html">Artificial Intelligence Solutions</a></li>
                            <li><a style={{ color: 'white', textDecoration: 'none' }} href="./pages/Webapps.html">Enterprise Solutions</a></li>
                            <li><a style={{ color: 'white', textDecoration: 'none' }} href="./pages/Mobileapps.html">Mobile Solutions</a></li>
                            <li><a style={{ color: 'white', textDecoration: 'none' }} href="./pages/Softwareapps.html">IIoT and IoT Solutions</a></li>
                            <li><a style={{ color: 'white', textDecoration: 'none' }} href="./pages/Webapps.html">Cloud Integration Solutions</a></li>
                        </ul>
                        <ul className="dropdown-menuS">
                            <li><a style={{ color: 'white', textDecoration: 'none' }} href="./pages/Webapps.html">Web Solutions</a></li>
                            <li><a style={{ color: 'white', textDecoration: 'none' }} href="./pages/Webapps.html">Saas Development</a></li>
                            <li><a style={{ color: 'white', textDecoration: 'none' }} href="./pages/Webapps.html">Staff Augmentation Services</a></li>
                            <li><a style={{ color: 'white', textDecoration: 'none' }} href="./pages/Webapps.html">Ondemand Services</a></li>
                        </ul>
                    </div>
                </li>
                <li className="dropdownS">
                    <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Portfolios</a>
                    <div className="dropdown-containerS">
                        <ul className="dropdown-menuS">
                            <li><a style={{ color: 'white', textDecoration: 'none' }} href="./pages/Webapps.html">Web Apps</a></li>
                            <li><a style={{ color: 'white', textDecoration: 'none' }} href="./pages/Mobileapps.html">Mobile Apps</a></li>
                            <li><a style={{ color: 'white', textDecoration: 'none' }} href="./pages/Softwareapps.html">Software Solution</a></li>
                        </ul>
                    </div>
                </li>
                <li className="dropdownS">
                    <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Solutions</a>
                    <div className="dropdown-containerS">
                        <ul className="dropdown-menuS">
                            <li><a style={{ color: 'white', textDecoration: 'none' }} href="./pages/Webapps.html">AI/ML</a></li>
                            <li><a style={{ color: 'white', textDecoration: 'none' }} href="./pages/Webapps.html">Enterprise</a></li>
                            <li><a style={{ color: 'white', textDecoration: 'none' }} href="./pages/Webapps.html">Mobile</a></li>
                            <li><a style={{ color: 'white', textDecoration: 'none' }} href="./pages/Webapps.html">IIoT & IoT</a></li>
                            <li><a style={{ color: 'white', textDecoration: 'none' }} href="./pages/Webapps.html">Cloud Integration</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
*/