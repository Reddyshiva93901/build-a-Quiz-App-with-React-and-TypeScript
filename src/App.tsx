import React, { useState } from "react";
import "./App.css";

interface Question {
  question: string;
  options: string[];
  answer: number;
}

const questions: Question[] = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    answer: 1,
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Mars", "Venus"],
    answer: 1,
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Michelangelo", "Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso"],
    answer: 1,
  },
];

const App: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleAnswer = (selectedOption: number) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="App">
      <h1>Quiz App</h1>
      {showResult ? (
        <div className="Result">
          <h2>Result</h2>
          <p>You scored {score} out of {questions.length}</p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div className="Question">
          <h2>{questions[currentQuestion].question}</h2>
          {questions[currentQuestion].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(index)}>
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
