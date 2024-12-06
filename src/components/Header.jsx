import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from "../assets/logo.png"


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="container">
                {/* Navigation principale */}
                <nav className={`nav ${isMenuOpen ? 'show' : ''}`}>
                    <ul className="nav-links">
                        <li><Link to="/podcast">Podcast</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>

                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>

                {/* Hamburger menu pour mobile */}
                <div className="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Header;
