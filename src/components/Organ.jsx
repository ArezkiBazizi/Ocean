import React, { useState } from "react";
import InfoCard from "./InfoCard";

const Organ = ({ image, alt, initialStyles, hoverStyles, info }) => {
    const [isHovered, setIsHovered] = useState(false);

    const styles = {
        ...initialStyles,
        ...(isHovered ? hoverStyles : {}),
        transition: "all 0.3s ease-in-out",
    };

    return (
        <div
            style={{
                position: "absolute",
                ...styles,
                cursor: "pointer",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={image}
                alt={alt}
                style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                }}
            />
            <InfoCard
                title={info.title}
                description={info.description}
                image={info.image}
                isVisible={isHovered}
            />
        </div>
    );
};

export default Organ;
