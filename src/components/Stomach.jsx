import React, { useState } from "react";
import stomachImage from "../assets/stomach.png"; // Assurez-vous que le chemin est correct
import InteractiveCard from "./InteractiveCard";
import InfoCard from "./InfoCard";

const Stomach = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isCardVisible, setIsCardVisible] = useState(false);

    const handleCardOpen = () => setIsCardVisible(true);
    const handleCardClose = () => setIsCardVisible(false);

    const info = {
        title: "Estomac & Océans",
        description: `L'estomac transforme les aliments pour fournir l'énergie nécessaire au corps. 
            De manière similaire, les océans jouent un rôle crucial dans le stockage et la redistribution 
            de l'énergie solaire à travers les courants marins. Ils absorbent également une partie des 
            impacts environnementaux comme le CO₂, mais cette capacité a des limites, tout comme l'estomac 
            face à une alimentation excessive.`,
        image: stomachImage,
    };

    return (
        <>
            <div
                style={{
                    position: "absolute",
                    top: isHovered ? "20%" : "28%",
                    left: isHovered ? "30%" : "39%",
                    width: isHovered ? "40%" : "20%",
                    cursor: "pointer",
                    opacity: isHovered ? 1 : 0.5,
                    transform: isHovered ? "scale(1.1)" : "scale(1)",
                    transition: "all 0.3s ease-in-out",
                    zIndex: 3,
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleCardOpen}
            >
                <img
                    src={stomachImage}
                    alt="Stomach"
                    style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                    }}
                />
            </div>
            <InfoCard
                isVisible={isHovered}
                title={info.title}
                description={info.description}
            />
            <InteractiveCard
                isVisible={isCardVisible}
                title={info.title}
                image={info.image}
                description={info.description}
                onClose={handleCardClose}
            />
        </>
    );
};

export default Stomach;