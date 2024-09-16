import React from "react";
import quizCompleteImage from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

export default function Summary({ userAnswers }) {
  const skippedAns = userAnswers.filter((ans) => ans === null);
  const correctAns = userAnswers.filter(
    (ans, index) => ans === QUESTIONS[index].answers[0]
  );

  const skippedShare = Math.round(
    (skippedAns.length / userAnswers.length) * 100
  );
  const correctShare = Math.round(
    (correctAns.length / userAnswers.length) * 100
  );
  const wrongShare = 100 - skippedShare - correctShare;

  return (
    <div id="summary">
      <img src={quizCompleteImage} alt="icon"></img>
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedShare}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctShare}%</span>
          <span className="text">Answered Correctly</span>
        </p>
        <p>
          <span className="number">{wrongShare}%</span>
          <span className="text">Answered Incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";
          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
