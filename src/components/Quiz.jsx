import { useState } from "react";
import { useCallback } from "react";
import QUESTIONS from "../questions.js";

import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const quizComplete = activeQuestionIndex === QUESTIONS.length;

  const handleClickAnswer = useCallback(function handleClickAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prev) => {
      return [...prev, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswers = useCallback(
    () => handleClickAnswer(null),
    [handleClickAnswer]
  );

  if (quizComplete) {
    return (
      <div id="summary">
        <Summary userAnswers={userAnswers} />
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleClickAnswer}
        onSkipAnswer={handleSkipAnswers}
      />
    </div>
  );
}
