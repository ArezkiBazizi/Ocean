import React, { useState } from "react";
import heartImage from "../assets/heart.png";
import Ocean from "../assets/ocean.png";
import InteractiveCard from "./InteractiveCard";
import InfoCard from "./InfoCard"; // Ajout de la carte info

const Heart = () => {
    const [isHovered, setIsHovered] = useState(false); // État pour le hover
    const [isCardVisible, setIsCardVisible] = useState(false);

    const handleCardOpen = () => setIsCardVisible(true);
    const handleCardClose = () => setIsCardVisible(false);

    const info = {
        title: "Cœur & Océans",
        description: `Le cœur pompe le sang pour le distribuer dans tout le corps, 
            tout comme les courants marins régulent la température de la Terre.`,
        image: Ocean,
    };

    return (
        <>
            <div
                style={{
                    position: "absolute",
                    top: "23%",
                    left: "56%",
                    width: isHovered ? "15%" : "7%", // Taille ajustée au hover
                    cursor: "pointer",
                    zIndex: 4,
                    opacity: isHovered ? 1 : 0.4, // Opacité augmentée au hover
                    transform: isHovered ? "scale(1.1)" : "scale(1)", // Zoom au hover
                    transition: "all 0.3s ease-in-out", // Transition fluide
                }}
                onMouseEnter={() => setIsHovered(true)} // Survol actif
                onMouseLeave={() => setIsHovered(false)} // Quitte le survol
                onClick={handleCardOpen} // Clic pour ouvrir la carte interactive
            >
                <img
                    src={heartImage}
                    alt="Heart"
                    style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                    }}
                />
            </div>
            {/* Affichage de la InfoCard au survol */}
            <InfoCard
                isVisible={isHovered} // Visible uniquement au survol
                title={info.title}
                description={info.description}
            />
            {/* Affichage de la InteractiveCard au clic */}
            <InteractiveCard
                isVisible={isCardVisible}
                title="Cœur & Océans"
                image={heartImage}
                description="Le cœur pompe le sang pour le distribuer dans tout le corps,
                 tout comme les courants marins régulent la température de la Terre."
                // audio="https://www.example.com/podcast.mp3" // Lien vers le podcast
                onClose={handleCardClose}
            />

        </>
    );
};

export default Heart;
