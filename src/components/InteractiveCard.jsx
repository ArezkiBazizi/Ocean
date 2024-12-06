import React, { useState, useRef } from "react";
import "./InteractiveCard.css";

const InteractiveCard = ({ isVisible, title, image, description, onClose }) => {
    const [style, setStyle] = useState({});
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const posX = e.clientX - rect.left; // Position X relative à la carte
        const posY = e.clientY - rect.top; // Position Y relative à la carte
        const midX = rect.width / 2; // Centre X
        const midY = rect.height / 2; // Centre Y

        // Calcul des transformations
        const rotateX = ((posY - midY) / midY) * -10; // Ajuster l'inclinaison
        const rotateY = ((posX - midX) / midX) * 10;

        setStyle({
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transition: "transform 0.1s ease",
        });
    };

    const handleMouseLeave = () => {
        // Réinitialise les styles lorsqu'on quitte la carte
        setStyle({
            transform: "rotateX(0deg) rotateY(0deg)",
            transition: "transform 0.5s ease",
        });
    };

    if (!isVisible) return null;

    return (
        <div className="card-overlay">
            <div
                className="card-container card"
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={style}
            >
                <button className="close-button" onClick={onClose}>
                    ✖
                </button>
                <div className="card-content">
                    <h2 className="card-title">{title}</h2>
                    {image && <img src={image} alt={title} className="card-image" />}
                    <p className="card-description">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default InteractiveCard;
