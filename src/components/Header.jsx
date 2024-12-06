import React from 'react';
import './Header.css'; // Import du fichier CSS pour le style
import logo from '../assets/logo.png'; // Remplacez par le chemin vers votre logo

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <nav className="nav">
                    <ul className="nav-links">
                        <li><a href="#about">Podcast</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="logo-container">
                    <img src={logo} alt="Ocean Climate Logo" className="logo" />
                </div>
            </div>
        </header>
    );
};

export default Header;
