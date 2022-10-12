import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizDetails from "../QuizDetails/QuizDetails";

const Quiz = () => {
  const quiz = useLoaderData();
  const data = quiz.data.questions;

  return (
    <div>
      {data.map((question) => {
        return (
          <QuizDetails key={question.id} question={question}></QuizDetails>
        );
      })}
    </div>
  );
};

export default Quiz;
