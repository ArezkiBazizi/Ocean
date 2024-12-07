import React, { useState } from "react";
import lungImage from "../assets/lung.png"; // Assurez-vous que le chemin est correct
import InteractiveCard from "./InteractiveCard";
import InfoCard from "./InfoCard";

const Lung = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isCardVisible, setIsCardVisible] = useState(false);

    const handleCardOpen = () => setIsCardVisible(true);
    const handleCardClose = () => setIsCardVisible(false);

    const info = {
        title: "Poumons & Océans",
        description: `Les poumons échangent des gaz essentiels pour la vie. 
            De même, les océans produisent 50% de l'oxygène grâce au phytoplancton et 
            absorbent 30% du CO₂ émis par l'homme. Protéger les océans, c'est préserver 
            la respiration de notre planète.`,
        image: lungImage,
    };

    return (
        <>
            <div
                style={{
                    position: "absolute",
                    top: "20%",
                    left: isHovered ? "20%" : "32%",
                    width: isHovered ? "60%" : "34%",
                    cursor: "pointer",
                    zIndex: 3,
                    opacity: isHovered ? 1 : 0.5,
                    transform: isHovered ? "scale(1.1)" : "scale(1)",
                    transition: "all 0.3s ease-in-out",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleCardOpen}
            >
                <img
                    src={lungImage}
                    alt="Lung"
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

export default Lung;
