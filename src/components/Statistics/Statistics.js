import React from "react";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
  const data = useLoaderData();
  data.data.map((total) => {
    console.log(total.total);
  });
  const total = data.data.total;
  console.log(total);

  return (
    <div className="">
      <h2>this is statistics</h2>
    </div>
  );
};

export default Statistics;
