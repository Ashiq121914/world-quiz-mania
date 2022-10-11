import React from "react";
import { useLoaderData } from "react-router-dom";

const Topic = () => {
  const topic = useLoaderData();
  console.log(topic.data.length);
  console.log(topic);
  return (
    <div>
      <h3>hiiiiii</h3>
    </div>
  );
};

export default Topic;
