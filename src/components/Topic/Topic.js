import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizTopicCart from "../QuizTopicCart/QuizTopicCart";

const Topic = () => {
  const topics = useLoaderData();

  return (
    <div className="row mx-auto justify-content-center my-5 w-100">
      {topics.data.map((topic) => (
        <QuizTopicCart key={topic.id} topic={topic}></QuizTopicCart>
      ))}
    </div>
  );
};

export default Topic;
