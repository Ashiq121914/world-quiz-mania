import { useLoaderData } from "react-router-dom";
import QuizDetails from "../QuizDetails/QuizDetails";

const Quiz = () => {
  const quiz = useLoaderData();
  const data = quiz.data.questions;
  const topicName = quiz.data.name;

  return (
    <div>
      <h2 className="text-center my-5">
        Name of the topic is: <small className="fw-bold">{topicName}</small>{" "}
      </h2>
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
