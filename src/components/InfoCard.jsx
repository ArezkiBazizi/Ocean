import React from "react";
import { createPortal } from "react-dom";

const InfoCard = ({ title, description, image, isVisible }) => {
    return createPortal(
        <div
            style={{
                position: "fixed",
                top: "10px", // Toujours fixé en haut
                left: "10px", // Toujours aligné à gauche
                width: "300px",
                padding: "15px 20px",
                background: "linear-gradient(145deg, #0077be, #004d73)",
                border: "2px solid #00bcd4",
                borderRadius: "12px",
                boxShadow: isVisible
                    ? "0 10px 30px rgba(0, 0, 0, 0.5), inset 0 4px 10px rgba(255, 255, 255, 0.2)"
                    : "0 8px 20px rgba(0, 0, 0, 0.3)", // Ombres plus fortes lorsqu'elles sont visibles
                zIndex: 1000,
                color: "#ffffff",
                transform: isVisible ? "translateY(0)" : "translateY(-50px)", // Descente et montée
                opacity: isVisible ? 1 : 0, // Gestion de l'opacité
                transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out, box-shadow 0.3s ease-in-out", // Animation fluide
                fontFamily: "'Poppins', sans-serif",
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
                            textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)", // Ombre légère pour le texte
                        }}
                    >
                        {title}
                    </h4>
                    {image && (
                        <img
                            src={image}
                            alt={title}
                            style={{
                                width: "100%",
                                height: "auto",
                                borderRadius: "8px",
                                marginBottom: "10px",
                                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Ombre pour l'image
                            }}
                        />
                    )}
                    <p
                        style={{
                            margin: 0,
                            fontSize: "1em",
                            lineHeight: "1.5",
                            textShadow: "0 1px 3px rgba(0, 0, 0, 0.3)", // Ombre légère pour le texte
                        }}
                    >
                        {description}
                    </p>
                </>
            )}
        </div>,
        document.body
    );
};

export default InfoCard;
