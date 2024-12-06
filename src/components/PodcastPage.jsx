import React from "react";
import Logo from "../assets/logo.png"; // Assurez-vous que le fichier logo.png est dans src/assets
import AudioFile from "../audio/audio.mp3"; // Assurez-vous que le fichier audio.mp3 est dans src/assets
import "./PodcastPage.css";

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
    return (
        <div className="podcast-page">
            <header className="podcast-header">
                <img src={Logo} alt="Logo" className="podcast-logo" />
                <h1 className="podcast-title">Podcasts sur les Océans</h1>
            </header>
            <main className="podcast-content">
                {podcasts.map((podcast) => (
                    <div key={podcast.id} className="podcast-card">
                        <h2 className="podcast-card-title">{podcast.title}</h2>
                        <p className="podcast-card-description">{podcast.description}</p>
                        <audio controls className="podcast-audio">
                            <source src={podcast.file} type="audio/mp3" />
                            Votre navigateur ne supporte pas le lecteur audio.
                        </audio>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default PodcastPage;
