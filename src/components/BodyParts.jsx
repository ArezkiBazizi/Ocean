// src/components/BodyParts.js
import React from "react";
import Head from "./Head";
import Heart from "./Heart";
import HumanModel from "./HumanModel";
import Lung from "./Lung";
import Brain from "./Brain";
import Intestin from "./Intestin";
import Kidney from "./Kidney";
import Liver from "./Liver";

const BodyParts = () => {
    return (
        <div
            style={{
                position: "relative", // Positionnement relatif pour les enfants absolus
                width: "100%",
                maxWidth: "350px", // Ajustez selon vos besoins
                margin: "0 auto", // Centrer le conteneur
                height: "auto",
                top: "10%", // Position verticale
            }}
        >
            {/* Image principale du corps humain */}
            <HumanModel />

            {/* Organes superposés */}
            <Head />
            <Heart />
            <Lung />
            <Brain />
            <Intestin />
            <Kidney />
            <Liver />
        </div>
    );
};

export default BodyParts;
