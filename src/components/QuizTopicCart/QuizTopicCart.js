import React from "react";

const QuizTopicCart = ({ topic }) => {
  const { id, name, logo, total } = topic;

  return (
    <div id="homeTopic" className="col-lg-2 col-md-6 col-12 gap-2 my-2">
      <div className="card">
        <img src={logo} className="bg-dark img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">No of Question: {total}</p>
          <button className="btn btn-primary w-100">show topic</button>
        </div>
      </div>
    </div>
  );
};

export default QuizTopicCart;
