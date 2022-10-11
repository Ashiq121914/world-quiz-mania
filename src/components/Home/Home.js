import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import QuizTopicCart from "../QuizTopicCart/QuizTopicCart";

const Home = () => {
  const topics = useLoaderData();

  return (
    <div>
      <Header></Header>
      <div className="row mx-auto justify-content-center my-5 w-100">
        {topics.data.map((topic) => (
          <QuizTopicCart key={topic.id} topic={topic}></QuizTopicCart>
        ))}
      </div>
    </div>
  );
};

export default Home;
