import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import "./InteractiveCard.css";

const InteractiveCard = ({ isVisible, title, image, description, audio, onClose }) => {
    const [style, setStyle] = useState({});
    const cardRef = useRef(null);
    const audioRef = useRef(null);

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

    useEffect(() => {
        // Joue le podcast à l'ouverture de la carte
        if (isVisible && audioRef.current) {
            audioRef.current.play();
        }
    }, [isVisible]);

    if (!isVisible) return null;

    const cardContent = (
        <div className="card-overlay" onClick={onClose}>
            <div
                className="card-container card"
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={style}
                onClick={(e) => e.stopPropagation()} // Empêche la fermeture si on clique dans la carte
            >
                <button className="close-button" onClick={onClose}>
                    ✖
                </button>
                <div className="card-content">
                    <h2 className="card-title">{title}</h2>
                    {image && <img src={image} alt={title} className="card-image" />}
                    <p className="card-description">{description}</p>
                    {audio && (
                        <audio
                            ref={audioRef}
                            src={audio}
                            controls
                            style={{ marginTop: "15px", width: "100%" }}
                        >
                            Your browser does not support the audio element.
                        </audio>
                    )}
                </div>
            </div>
        </div>
    );

    // Rendre dans un portail
    return ReactDOM.createPortal(cardContent, document.body);
};

export default InteractiveCard;
