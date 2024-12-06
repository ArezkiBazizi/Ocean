export default function Footer() {
    return (
        <div
            style={{
                position: "fixed", // Reste en bas à droite
                bottom: "10px", // Espacement du bas de l'écran
                right: "10px", // Espacement du côté droit de l'écran
                fontSize: "0.9rem", // Taille de la police
                color: "#fff", // Couleur blanche pour le texte principal
            }}
        >
            Made by Sarrasins.
            <span style={{ color: "yellow" }}>js</span> {/* "js" en jaune */}
        </div>
    );
}