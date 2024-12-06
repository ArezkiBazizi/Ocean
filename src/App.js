// src/App.js
import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import OceanScene from "./components/OceanScene";
import BodyParts from "./components/BodyParts";
import OceanGame from "./components/OceanGame";
import Header from './components/Header';
import Footer from "./components/Footer";
import Konami from "react-konami-code";
import PodcastPage from "./components/PodcastPage";

const App = () => {
    const navigate = useNavigate();

    const handleKonamiCode = () => {
        // Naviguer vers la page du jeu lorsqu'un Konami Code est détecté
        navigate("/ocean-game");
    };

    return (
        <div style={{ position: "relative", width: "100%", height: "100vh" }}>
            {/* Détecteur de Konami Code */}
            <Konami action={handleKonamiCode} />
            
            {/* Routes de l'application */}
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Header />
                            {/* Arrière-plan océan */}
                            <OceanScene />
                            <BodyParts />
                            <Footer />
                        </>
                    }
                />
                <Route path="/ocean-game" element={<OceanGame />} />
                <Route path="/podcasts" element={<PodcastPage />} />
            </Routes>
        </div>
    );
};

export default App;
