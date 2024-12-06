import React, { useState } from "react";
import KidneyImage from "../assets/kidney.png"; // Assurez-vous que le chemin est correct
import InteractiveCard from "./InteractiveCard";
import InfoCard from "./InfoCard";

const Kidney = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isCardVisible, setIsCardVisible] = useState(false);

    const handleCardOpen = () => setIsCardVisible(true);
    const handleCardClose = () => setIsCardVisible(false);

    const info = {
        title: "Reins & Océans",
        description: `Les reins filtrent et maintiennent l'équilibre hydrique. 
            De la même manière, les océans jouent un rôle crucial dans le cycle de l'eau, 
            régulant les précipitations et le stockage de chaleur. Leur préservation 
            garantit l'équilibre climatique mondial.`,
        image: KidneyImage,
    };

    return (
        <>
            <div
                style={{
                    position: "absolute",
                    top: "38%",
                    left: "55%",
                    width: isHovered ? "15%" : "9%",
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
                    src={KidneyImage}
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

export default Kidney;
