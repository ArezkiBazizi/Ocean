// src/components/Brain.js
import React from "react";
import brainImage from "../assets/brain.png"; // Assurez-vous que le chemin est correct
import Ocean from "../assets/ocean.png"; //
import Organ from "./Organ";

const Brain = () => {
    const initialStyles = {
        top: "8.2%", // Position verticale relative
        left: "49%", // Position horizontale relative
        width: "14%", // Taille initiale
        zIndex: 3,
        opacity: 0.5,
        transform: "translate(-50%, -50%)",
    };

    const hoverStyles = {
        left: "47.5%",
        width: "30%",
        opacity: 1,
    };

    const info = {
            title: "Cerveau & Océans",
            description: `Le cerveau coordonne les fonctions vitales du corps humain, 
            tout comme les océans influencent les conditions météorologiques mondiales. 
            En absorbant et redistribuant la chaleur, ils stabilisent le climat.`,
            image: Ocean,
    };

    return (
        <Organ
            image={brainImage}
            alt="Brain"
            initialStyles={initialStyles}
            hoverStyles={hoverStyles}
            info={info}
        />
    );
};

export default Brain;
