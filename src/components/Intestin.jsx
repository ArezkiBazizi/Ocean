// src/components/Intestin.js
import React from "react";
import intestinImage from "../assets/intestin.png"; // Assurez-vous que le chemin est correct
import Organ from "./Organ";

const Intestin = () => {
    const initialStyles = {
        top: "38%", // Position verticale relative
        left: "50%", // Position horizontale relative
        width: "29%", // Taille initiale
        zIndex: 3,
        opacity: 0.5,
        transform: "translate(-50%, -50%)",
    };

    const hoverStyles = {
        width: "50%",
        opacity: 1,
    };

    const info = {
        title: "Intestin",
        description: "Absorbe les nutriments et élimine les déchets.",
    };

    return (
        <Organ
            image={intestinImage}
            alt="Intestin"
            initialStyles={initialStyles}
            hoverStyles={hoverStyles}
            info={info}
        />
    );
};

export default Intestin;
