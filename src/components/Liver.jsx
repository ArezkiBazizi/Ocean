import React, { useState } from "react";
import LiverImage from "../assets/liver.png"; // Assurez-vous que le chemin est correct
import InteractiveCard from "./InteractiveCard";
import InfoCard from "./InfoCard";

const Liver = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isCardVisible, setIsCardVisible] = useState(false);

    const handleCardOpen = () => setIsCardVisible(true);
    const handleCardClose = () => setIsCardVisible(false);

    const info = {
        title: "Foie & Océans",
        description: `Le foie filtre les toxines et maintient l'équilibre interne du corps humain. 
        De même, les océans absorbent une grande partie des polluants humains, 
        mais leur capacité est limitée. Protéger les océans, c'est préserver leur 
        rôle essentiel dans la régulation écologique.`,
        image: LiverImage,
    };

    return (
        <>
            <div
                style={{
                    position: "absolute",
                    top: "38%",
                    left: "41%",
                    width: isHovered ? "20%" : "12%",
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
                    src={LiverImage}
                    alt="Kidney"
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

export default Liver;
