import React, { useState } from "react";
import brainImage from "../assets/brain.png"; // Assurez-vous que le chemin est correct
import InteractiveCard from "./InteractiveCard";
import InfoCard from "./InfoCard";

const Brain = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isCardVisible, setIsCardVisible] = useState(false);

    const handleCardOpen = () => setIsCardVisible(true);
    const handleCardClose = () => setIsCardVisible(false);

    const info = {
        title: "Cerveau & Océans",
        description: `Le cerveau coordonne les fonctions vitales du corps humain, 
            tout comme les océans influencent les conditions météorologiques mondiales. 
            En absorbant et redistribuant la chaleur, ils stabilisent le climat.`,
        image: brainImage,
    };

    return (
        <>
            <div
                style={{
                    position: "absolute",
                    top: isHovered ? "4%" : "8%",
                    left: isHovered ? "39%" : "43%",
                    width: isHovered ? "25%" : "13%",
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
                    src={brainImage}
                    alt="Brain"
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

export default Brain;
