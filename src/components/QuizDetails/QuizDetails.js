import React from "react";
import Question from "../Question/Question";

const QuizDetails = ({ question }) => {
  const options = question.options;
  const correctAns = question.correctAnswer;
  const questionName = question.question;
  const id = question.id;

  return (
    <div>
      <div className="bg-dark mb-5 text-white text-center">
        <h2>{questionName}</h2>
        {options.map((option) => {
          console.log(option.length);
          return <Question key={id} id={id} question={option}></Question>;
        })}
      </div>
    </div>
  );
};

export default QuizDetails;
