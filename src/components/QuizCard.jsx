import React, { useState } from "react";
import Quiz from "./Quiz"; // Importez le composant Quiz
import "./QuizCard.css"; // Ajoutez les styles pour la carte

const QuizCard = ({ questions }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [finalScore, setFinalScore] = useState(null);

    const handleStartQuiz = () => {
        setIsOpen(true);
        setFinalScore(null);
    };

    const handleFinishQuiz = (score) => {
        setFinalScore(score);
        setIsOpen(false);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <button className="start-quiz-button" onClick={handleStartQuiz}>
                Faire le Quiz
            </button>
            {isOpen && (
                <div className="quiz-card-overlay" onClick={handleClose}>
                    <div
                        className="quiz-card"
                        onClick={(e) => e.stopPropagation()} // Empêche la fermeture si on clique dans la carte
                    >
                        <button className="close-button" onClick={handleClose}>
                            ✖
                        </button>
                        {finalScore === null ? (
                            <Quiz questions={questions} onFinish={handleFinishQuiz} />
                        ) : (
                            <div className="quiz-result">
                                <h2>Résultat : {finalScore}/{questions.length}</h2>
                                <button onClick={handleStartQuiz}>Rejouer</button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default QuizCard;
