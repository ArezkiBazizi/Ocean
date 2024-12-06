// src/components/InfoCard.js
import React from "react";
import { createPortal } from "react-dom";

const InfoCard = ({ title, description, isVisible }) => {
    if (!isVisible) return null;

    return createPortal(
        <div
            style={{
                position: "fixed", // Position fixe par rapport à la fenêtre
                top: "10px", // Positionné en haut
                left: "10px", // Positionné à gauche
                width: "250px",
                padding: "15px 20px",
                background: "linear-gradient(145deg, #0077be, #004d73)",
                border: "2px solid #00bcd4",
                borderRadius: "12px",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
                zIndex: 1000, // Assurez-vous qu'il est au-dessus de tout
                color: "#ffffff",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(-100%)",
                transition: "all 0.5s ease-in-out",
                fontFamily: "'Poppins', sans-serif",
                backgroundSize: "cover",
                overflow: "hidden",
            }}
        >
            {isVisible && (
                <>
                    <h4
                        style={{
                            margin: "0 0 10px",
                            fontSize: "1.5em",
                            fontWeight: "bold",
                            textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
                        }}
                    >
                        {title}
                    </h4>
                    <p
                        style={{
                            margin: 0,
                            fontSize: "1em",
                            lineHeight: "1.5",
                            textShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
                        }}
                    >
                        {description}
                    </p>
                </>
            )}
            {/* Ajout de bulles décoratives */}
            <div
                style={{
                    position: "absolute",
                    top: "10%",
                    right: "-20px",
                    width: "60px",
                    height: "60px",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    borderRadius: "50%",
                    filter: "blur(10px)",
                    animation: "bubble 6s infinite",
                }}
            ></div>
            <div
                style={{
                    position: "absolute",
                    top: "30%",
                    right: "-30px",
                    width: "40px",
                    height: "40px",
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    borderRadius: "50%",
                    filter: "blur(8px)",
                    animation: "bubble 8s infinite",
                }}
            ></div>
        </div>,
        document.body // Rend le tooltip dans le body
    );
};

export default InfoCard;
