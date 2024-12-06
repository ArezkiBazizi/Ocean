// src/components/Heart.js
import React from "react";
import KidneyImage from "../assets/kidney.png"; // Assurez-vous que le chemin est correct
import Organ from "./Organ";

const Kidney = () => {
    const initialStyles = {
        top: "41%", // Position verticale relative
        left: "60%", // Position horizontale relative
        width: "9%", // Taille initiale
        zIndex: 3,
        opacity: 0.5,
        transform: "translate(-50%, -50%)",
    };

    const hoverStyles = {
        transform: "translate(-50%, -50%) translateX(10px)",
        width: "15%",
        opacity: 1,
    };

    const info = {
        title: "Reins",
        description: "Netoie le sang à travers le corps.",
    };

    return (
        <Organ
            image={KidneyImage}
            alt="Kidney"
            initialStyles={initialStyles}
            hoverStyles={hoverStyles}
            info={info}
        />
    );
};

export default Kidney;
