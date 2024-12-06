import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header"; // Importez votre header personnalisé
import Footer from "../components/Footer"; // Importez votre footer personnalisé
import "./SharedStyles.css"; // Réutilisation des styles partagés

const ContactPage = () => {
    const navigate = useNavigate();

    return (
        <div className="page-container">
            {/* Utilisation du Header personnalisé */}
            <Header />

            {/* Contenu principal */}
            <main className="shared-content">
                <div className="shared-header">
                    <button
                        onClick={() => navigate("/")}
                        className="shared-button"
                    >
                        Retour à l'accueil
                    </button>
                </div>

                <form className="contact-form">
                    <label htmlFor="name">Nom :</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email :</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Message :</label>
                    <textarea id="message" name="message" rows="5" required></textarea>

                    <button type="submit" className="send-button">
                        Envoyer
                    </button>
                </form>
            </main>

            {/* Utilisation du Footer personnalisé */}
            <Footer />
        </div>
    );
};

export default ContactPage;
