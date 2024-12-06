import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import "./SharedStyles.css";

const ContactPage = () => {
    const navigate = useNavigate();

    return (
        <div className="page-container">
            {/* Header */}
            <header className="shared-header">
                <img src={Logo} alt="Logo" className="shared-logo" />
                <h1 className="shared-title">Contactez-Nous</h1>
                <button
                    onClick={() => navigate("/")}
                    className="shared-button"
                >
                    Retour à l'accueil
                </button>
            </header>

            {/* Main Content */}
            <main className="shared-content">
                <form className="contact-form">
                    <label htmlFor="name">Nom:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>

                    <button type="submit" className="shared-button">
                        Envoyer
                    </button>
                </form>
            </main>

            {/* Footer */}
            <footer className="shared-footer">
                <p>© 2024 Ocean & Climate. Tous droits réservés.</p>
            </footer>
        </div>
    );
};

export default ContactPage;
