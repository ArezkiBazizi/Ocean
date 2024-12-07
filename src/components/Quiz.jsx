import React, { useState } from "react";
import "./Quiz.css";

const Quiz = ({ questions = [] }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [isAnswered, setIsAnswered] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isQuizFinished, setIsQuizFinished] = useState(false);

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
            setIsAnswered(false);
            setSelectedOption(null);
        } else {
            setIsQuizFinished(true);
        }
    };

    const handleRestartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setIsAnswered(false);
        setSelectedOption(null);
        setIsQuizFinished(false);
    };

    if (isQuizFinished) {
        return (
            <div className="quiz-container">
                <h2>Quiz Terminé !</h2>
                <p>
                    Votre score : <strong>{score}</strong> / {questions.length}
                </p>
                <button className="restart-button" onClick={handleRestartQuiz}>
                    Recommencer le Quiz
                </button>
            </div>
        );
    }

    return (
        <div className="quiz-container">
            <h2>Question {currentQuestion + 1} / {questions.length}</h2>
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
                        disabled={isAnswered} // Désactive les options après avoir répondu
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
