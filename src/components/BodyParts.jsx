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
import Stomach from "./Stomach";

const BodyParts = () => {
    return (
        <div
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "100%",
                maxWidth: "400px",
                height: "auto",
                margin: "auto",
                padding: "20px", // Espacement interne
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
            <Stomach />
        </div>
    );
};

export default BodyParts;
