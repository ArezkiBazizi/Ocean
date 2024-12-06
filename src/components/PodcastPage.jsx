import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import AudioFile from "../audio/audio.mp3";
import Header from "../components/Header"; // Importez votre header
import Footer from "../components/Footer"; // Importez votre footer
import "./SharedStyles.css";

const podcasts = [
    {
        id: 1,
        title: "Podcast 1: Les Océans et le Climat",
        description: "Découvrez le rôle des océans dans la régulation du climat.",
        file: AudioFile,
    },
    {
        id: 2,
        title: "Podcast 2: Biodiversité marine",
        description: "L'importance de la biodiversité pour les écosystèmes océaniques.",
        file: AudioFile,
    },
];

const PodcastPage = () => {
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
                {podcasts.map((podcast) => (
                    <div key={podcast.id} className="shared-card">
                        <h2 className="shared-card-title">{podcast.title}</h2>
                        <p className="shared-card-description">{podcast.description}</p>
                        <audio controls className="shared-audio">
                            <source src={podcast.file} type="audio/mp3" />
                            Votre navigateur ne supporte pas le lecteur audio.
                        </audio>
                    </div>
                ))}
            </main>

            {/* Utilisation du Footer personnalisé */}
            <Footer />
        </div>
    );
};

export default PodcastPage;
