// src/components/Lung.js
import React from "react";
import lungImage from "../assets/lung.png"; // Assurez-vous que le chemin est correct
import Organ from "./Organ";

const Lung = () => {
    const initialStyles = {
        top: "25%", // Position verticale relative
        left: "48%", // Position horizontale relative
        width: "34%", // Taille initiale
        zIndex: 2,
        opacity: 0.5,
        transform: "translate(-50%, -50%)",
    };

    const hoverStyles = {
        left: "43.5%",
        width: "60%",
        opacity: 1,
    };

    const info = {
        title: "Poumons",
        description: "Responsables de la respiration et de l'oxygénation du sang.",
    };

    return (
        <Organ
            image={lungImage}
            alt="Lung"
            initialStyles={initialStyles}
            hoverStyles={hoverStyles}
            info={info}
        />
    );
};

export default Lung;
