// src/components/HumanModel.js
import React from "react";
import bodyImage from "../assets/body.png"; // Chemin correct vers l'image

const HumanModel = () => {
    return (
        <img
            src={bodyImage}
            alt="Human Body"
            style={{
                width: "100%", // Remplit le conteneur
                height: "auto", // Maintient le ratio d'aspect
                display: "block", // Supprime les marges indésirables
            }}
        />
    );
};

export default HumanModel;
