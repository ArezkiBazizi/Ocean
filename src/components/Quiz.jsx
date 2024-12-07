import React, { useState } from "react";
import "./Quiz.css"; // Importez le fichier CSS

const Quiz = ({ questions = [], onFinish }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);

    if (!questions || questions.length === 0) {
        return <p>Aucune question disponible pour ce quiz.</p>;
    }

    const handleOptionClick = (index) => {
        if (isAnswered) return;

        setSelectedOption(index);
        setIsAnswered(true);

        if (index === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(null);
            setIsAnswered(false);
        } else {
            onFinish(score);
        }
    };

    return (
        <div className="quiz-container">
            <h2>Question {currentQuestion + 1}/{questions.length}</h2>
            <p>{questions[currentQuestion]?.question || "Question indisponible"}</p>
            <div className="quiz-options">
                {questions[currentQuestion]?.options?.map((option, index) => (
                    <button
                        key={index}
                        className={`quiz-option ${
                            isAnswered
                                ? index === questions[currentQuestion].correctAnswer
                                    ? "correct"
                                    : index === selectedOption
                                        ? "incorrect"
                                        : ""
                                : ""
                        }`}
                        onClick={() => handleOptionClick(index)}
                    >
                        {option}
                    </button>
                ))}
            </div>
            {isAnswered && (
                <button className="next-question" onClick={handleNextQuestion}>
                    {currentQuestion + 1 < questions.length ? "Suivant" : "Terminer"}
                </button>
            )}
        </div>
    );
};

export default Quiz;
