// src/components/Intestin.js
import { React , useState } from "react";
import InteractiveCard from "./InteractiveCard";
import InfoCard from "./InfoCard"; // Ajout de la carte info
import intestinImage from "../assets/intestin.png"; // Assurez-vous que le chemin est correct
import Intestinn from "../assets/intestin.png";



const Intestin = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isCardVisible, setIsCardVisible] = useState(false);

    const handleCardOpen = () => setIsCardVisible(true);
    const handleCardClose = () => setIsCardVisible(false);

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
        description: "Les océans et les intestins jouent des rôles essentiels pour l'équilibre des systèmes qu'ils soutiennent. Les océans produisent 50 % de l'oxygène grâce au phytoplancton et absorbent 30 % du CO₂, agissant comme un poumon pour la planète. De même, nos intestins, avec leur microbiome complexe, digèrent les nutriments et renforcent notre système immunitaire."+

        "Protéger les océans, c’est préserver un régulateur clé du climat. De la même façon, prendre soin de notre microbiome, par une alimentation saine, soutient notre santé globale. Ces deux systèmes nous rappellent que la vie repose sur des équilibres essentiels.",
        image: Intestinn
    };

    return (
        <>
        <div
            style={{
                position: "absolute",
                top: "33%",
                left: isHovered ? "35%" : "36%",
                width: isHovered ? "29%" : "29%",
                cursor: "pointer",
                zIndex: 3,
                opacity: isHovered ? 1 : 0.5,
                transform: isHovered ? "scale(1.1)" : "scale(1)",
                transition: "all 0.3s ease-in-out",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleCardOpen}
        >
            <img
                src={intestinImage}
                alt="Intestin"
                style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                }}
            />
        </div>
        <InfoCard
            isVisible={isHovered}
            title={info.title}
            description={info.description}
        />
        <InteractiveCard
            isVisible={isCardVisible}
            title={info.title}
            image={info.image}
            description={info.description}
            onClose={handleCardClose}
        />
         </>
    );
};

export default Intestin;
