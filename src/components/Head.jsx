// src/components/Head.js
import React from "react";
import headImage from "../assets/head.png"; // Assurez-vous que le chemin est correct
import Organ from "./Organ";

const Head = () => {
    const initialStyles = {
        top: "9.5%", // Position verticale relative
        left: "47.57%", // Position horizontale relative
        width: "4.5%", // Taille initiale
        zIndex: 3,
        opacity: 0.5,
        transform: "translate(-50%, -50%)",
    };

    const hoverStyles = {
        width: "5.5%",
        opacity: 1,
    };

    const info = {
        title: "Tête",
        description: "Contient le cerveau et les organes sensoriels.",
    };

    return (
        <Organ
            image={headImage}
            alt="Head"
            initialStyles={initialStyles}
            hoverStyles={hoverStyles}
            info={info}
        />
    );
};

export default Head;
