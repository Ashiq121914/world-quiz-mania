import { useLoaderData } from "react-router-dom";
import QuizDetails from "../QuizDetails/QuizDetails";

const Quiz = () => {
  const quiz = useLoaderData();
  const data = quiz.data.questions;

  return (
    <div>
      {data.map((question, idx) => {
        return (
          <QuizDetails
            idx={idx}
            key={question.id}
            question={question}
          ></QuizDetails>
        );
      })}
    </div>
  );
};

export default Quiz;
